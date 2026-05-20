/**
 * 打包为单个 HTML，可直接用浏览器打开（file://）
 * 输出：../SYC-TOOL-官网.html 与 ../../SYC-TOOL-官网.html
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const websiteDir = path.resolve(__dirname, '..');

function toDataUri(filePath, mime) {
  const b64 = fs.readFileSync(filePath).toString('base64');
  return `data:${mime};base64,${b64}`;
}

const iconUri = toDataUri(path.join(websiteDir, 'public/icon.png'), 'image/png');
const heroBgPath = fs.existsSync(path.join(websiteDir, 'public/hero-bg.jpg'))
  ? path.join(websiteDir, 'public/hero-bg.jpg')
  : path.join(websiteDir, 'public/hero-bg.png');
const heroUri = toDataUri(heroBgPath, heroBgPath.endsWith('.png') ? 'image/png' : 'image/jpeg');

let css = fs.readFileSync(path.join(websiteDir, 'styles.css'), 'utf8');
css = css.replace(
  /\.app-body\s*\{[^}]*\}/s,
  `.app-body {
  display: flex;
  min-height: 360px;
  background:
    linear-gradient(180deg, rgba(7, 9, 15, 0.4), rgba(7, 9, 15, 0.85)),
    url('${heroUri}');
  background-size: cover;
  background-position: center;
}`
);

let mainJs = fs.readFileSync(path.join(websiteDir, 'main.js'), 'utf8');
const heroPanelsJs = fs
  .readFileSync(path.join(websiteDir, 'hero-panels.js'), 'utf8')
  .replace(/^\/\*\*[\s\S]*?\*\/\s*/m, '')
  .replace(/export const HERO_PANELS/, 'const HERO_PANELS');
let js = mainJs.replace(/import\s+\{\s*HERO_PANELS\s*\}\s+from\s+['"]\.\/hero-panels\.js['"];\s*\n?/, '');
js = `${heroPanelsJs}\n${js}`;

const wpPublic = path.join(websiteDir, 'public/wallpapers');
if (fs.existsSync(wpPublic)) {
  for (const file of fs.readdirSync(wpPublic).filter((f) => /\.(jpg|jpeg|png)$/i.test(f))) {
    const uri = toDataUri(path.join(wpPublic, file), 'image/jpeg');
    js = js.replaceAll(`wallpapers/${file}`, uri);
    heroPanelsJs && (js = js.replaceAll(`wallpapers/${file}`, uri));
  }
}

const shotsDir = path.join(websiteDir, 'public/screenshots');
if (fs.existsSync(shotsDir)) {
  const pngs = fs.readdirSync(shotsDir).filter((f) => f.endsWith('.png'));
  const shotData = {};
  for (const file of pngs) {
    const id = file.replace(/\.png$/, '');
    shotData[id] = toDataUri(path.join(shotsDir, file), 'image/png');
  }
  if (pngs.length) {
    js = `window.__SHOT_DATA=${JSON.stringify(shotData)};\n${js}`;
    console.log(`  内嵌 ${pngs.length} 张宣传截图`);
  }
}

let html = fs.readFileSync(path.join(websiteDir, 'index.html'), 'utf8');

const embedPath = path.join(websiteDir, 'public/float-ball-embed.html');
if (fs.existsSync(embedPath)) {
  const embedBase = fs.readFileSync(embedPath, 'utf8');

  function toSrcdocAttr(doc) {
    return doc.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  }

  function buildEmbedSrcdoc(queryString) {
    const params = new URLSearchParams((queryString || '').replace(/^\?/, ''));
    const paramsObj = Object.fromEntries(params);
    let doc = embedBase;
    if (Object.keys(paramsObj).length) {
      doc = doc.replace(
        '<script>',
        `<script>window.__EMBED_PARAMS=${JSON.stringify(paramsObj)};\n`
      );
    }
    return toSrcdocAttr(doc);
  }

  html = html.replace(
    /<iframe([^>]*)\ssrc="\/float-ball-embed\.html([^"]*)"([^>]*)>\s*<\/iframe>/gi,
    (match, before, query, after) => {
      const srcdoc = buildEmbedSrcdoc(query);
      const cleaned = `${before}${after}`.replace(/\s+src="[^"]*"/gi, '');
      return `<iframe${cleaned} srcdoc="${srcdoc}"></iframe>`;
    }
  );
  console.log('  内嵌原生悬浮球演示 (srcdoc)');
}

html = html
  .replace(/<link rel="icon"[^>]*>/, '')
  .replace(/<link rel="preconnect"[^>]*>\s*/g, '')
  .replace(/<link[^>]*fonts\.googleapis\.com[^>]*>\s*/g, '')
  .replace(/<link rel="stylesheet" href="\/styles\.css" \/>/, `<style>\n${css}\n</style>`)
  .replace(/<script type="module" src="\/main\.js"><\/script>/, `<script>\n${js}\n</script>`)
  .replace('src="/icon.png"', `src="${iconUri}"`);

const outHtml = path.join(websiteDir, 'SYC-TOOL-官网.html');
fs.writeFileSync(outHtml, html, 'utf8');
const kb = (fs.statSync(outHtml).size / 1024).toFixed(0);
console.log(`✓ ${outHtml} (${kb} KB)`);
