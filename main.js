/** SYC-TOOL 官网 — 模块数据与交互 */
import { HERO_PANELS } from './hero-panels.js';

const MODULES = [
  {
    id: 'weather',
    icon: '☀',
    name: '动态天气',
    desc: '打开即见当前城市实况与体感，支持搜索切换城市、四日预报与动态背景氛围，是默认首页模块。',
    bullets: ['实时温度、湿度、风力', '城市搜索与定位', '四日预报卡片', '与全局背景联动'],
    mockClass: 'mock-weather',
    mock: `
      <div class="mock-inner mock-weather">
        <div class="mock-bar"><span></span><span></span><span></span></div>
        <div class="city">北京 · 晴</div>
        <div class="temp">24°</div>
        <p style="margin:0;color:var(--text-muted);font-size:0.75rem">体感 26° · 湿度 42%</p>
        <div class="mock-forecast">
          <div>周二<br>26°</div>
          <div>周三<br>23°</div>
          <div>周四<br>21°</div>
          <div>周五<br>25°</div>
        </div>
      </div>`,
    heroPanel: null,
  },
  {
    id: 'terminal',
    icon: '⌨',
    name: '本机终端',
    desc: '毛玻璃风格 zsh 终端，支持命令历史、Tab 补全，以及独立的透明度与亮度调节，不干扰全局背景观感。',
    bullets: ['本机 zsh 执行', 'Tab 自动补全', '透明度 0–100', '亮度独立调节'],
    mockClass: 'mock-terminal',
    mock: `
      <div class="mock-terminal">
        <div><span class="prompt">syc@mac ~ %</span> <span class="cmd">ls -la</span></div>
        <div class="out">total 48<br>drwxr-xr-x  staff  Documents</div>
        <div style="margin-top:8px"><span class="prompt">syc@mac ~ %</span> <span class="cmd">npm run build</span></div>
        <div class="out">✓ built in 1.2s</div>
        <div style="margin-top:8px"><span class="prompt">syc@mac ~ %</span> <span class="cursor"></span></div>
      </div>`,
    heroPanel: HERO_PANELS.terminal,
  },
  {
    id: 'notes',
    icon: '📝',
    name: '便签',
    desc: '多便签并行编辑，按日期分组展示，离开标签时自动落盘，适合随手记灵感与待办片段。',
    bullets: ['多便签切换', '按日分组', '自动保存', 'Markdown 友好输入'],
    mock: `
      <div class="mock-inner">
        <div class="mock-notes">
          <div class="note"><strong>今日</strong><br>发布 v1.0 官网</div>
          <div class="note" style="border-color:var(--accent-2)"><strong>待办</strong><br>优化剪贴板搜索</div>
        </div>
      </div>`,
    heroPanel: null,
  },
  {
    id: 'clipboard',
    icon: '📋',
    name: '剪贴板历史',
    desc: '自动记录本机复制内容（约 2 小时窗口），支持搜索与一键复用，开发调试时再也不用反复找刚才复制的那段 JSON。',
    bullets: ['后台静默记录', '全文搜索', '一键复制回剪贴板', '本地存储'],
    mock: `
      <div class="mock-inner mock-clip">
        <div class="row"><span>{"name":"syc-tool"}</span><span>2m</span></div>
        <div class="row"><span>curl … install.sh | bash</span><span>5m</span></div>
        <div class="row"><span>export PATH=...</span><span>12m</span></div>
      </div>`,
    heroPanel: null,
  },
  {
    id: 'calculator',
    icon: '🔢',
    name: '计算器',
    desc: '标准四则运算计算器，界面简洁，与侧边栏风格统一，日常算账不必再切到系统计算器。',
    bullets: ['加减乘除', '百分比与清除', '键盘友好布局'],
    mock: `
      <div class="mock-inner" style="font-family:var(--mono);text-align:right">
        <div style="font-size:1.5rem;color:var(--accent);margin-bottom:12px">128 × 3 = 384</div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;font-size:0.7rem;color:var(--text-muted)">
          <span>7</span><span>8</span><span>9</span><span>÷</span>
          <span>4</span><span>5</span><span>6</span><span>×</span>
        </div>
      </div>`,
    heroPanel: null,
  },
  {
    id: 'json',
    icon: '{ }',
    name: 'JSON 工具',
    desc: '粘贴即格式化、压缩与语法校验，树形结构浏览，接口联调与配置排查的随身助手。',
    bullets: ['格式化 / 压缩', '语法高亮', '错误行提示', '树形折叠查看'],
    mock: `
      <div class="mock-inner mock-json">
        <pre style="margin:0">{
  <span class="key">"app"</span>: <span class="str">"SYC-TOOL"</span>,
  <span class="key">"version"</span>: <span class="str">"1.0.1"</span>,
  <span class="key">"modules"</span>: 12
}</pre>
      </div>`,
    heroPanel: null,
  },
  {
    id: 'toolkit',
    icon: '🧰',
    name: '工具箱',
    desc: '时间戳互转、文本统计、编码小工具等常用开发辅助，减少打开浏览器搜在线工具的频次。',
    bullets: ['Unix 时间戳转换', '字符 / 行数统计', 'Base64 等实用项'],
    mock: `
      <div class="mock-inner" style="font-family:var(--mono);font-size:0.72rem">
        <div style="color:var(--text-muted)">时间戳 → 日期</div>
        <div style="color:var(--accent-2);margin:6px 0">1716105600 → 2024-05-19</div>
        <div style="color:var(--text-muted)">文本统计</div>
        <div>字数 1,024 · 行数 48</div>
      </div>`,
    heroPanel: null,
  },
  {
    id: 'translate',
    icon: '🌐',
    name: '翻译',
    desc: '多引擎翻译入口，选中或粘贴文本即可对照结果，阅读外文文档与邮件更顺手。',
    bullets: ['多引擎可选', '中英互译', '结果可复制'],
    mock: `
      <div class="mock-inner">
        <div style="padding:8px;border-radius:8px;background:rgba(0,0,0,0.3);margin-bottom:8px;font-size:0.75rem">Hello, SYC-TOOL</div>
        <div style="padding:8px;border-radius:8px;border-left:3px solid var(--accent-2);font-size:0.75rem">你好，SYC 效率工具箱</div>
      </div>`,
    heroPanel: null,
  },
  {
    id: 'monitor',
    icon: '📊',
    name: '系统监控',
    desc: '实时查看 CPU、内存、磁盘、网络与电池状态，离开该标签时自动暂停轮询，节省资源。',
    bullets: ['CPU / 内存占用', '磁盘与网络', '电池信息', '非活跃时暂停刷新'],
    mock: `
      <div class="mock-inner mock-monitor">
        <div class="bars">
          <div class="metric"><label>CPU</label><div class="bar"><i style="width:34%"></i></div></div>
          <div class="metric"><label>内存</label><div class="bar"><i style="width:62%"></i></div></div>
          <div class="metric"><label>磁盘</label><div class="bar"><i style="width:48%"></i></div></div>
          <div class="metric"><label>网络</label><div class="bar"><i style="width:18%"></i></div></div>
        </div>
      </div>`,
    heroPanel: null,
  },
  {
    id: 'wallpaper',
    icon: '🖼',
    name: '壁纸',
    desc: '从本机选择图片并一键设为 macOS 桌面壁纸，与应用内的全局背景可分别配置。',
    bullets: ['本地图片选择', '一键设桌面', '预览缩略图'],
    mock: `
      <div class="mock-inner" style="display:flex;gap:10px;align-items:center">
        <div style="width:80px;height:56px;border-radius:8px;background:linear-gradient(135deg,var(--accent),var(--accent-2))"></div>
        <div style="font-size:0.8rem;color:var(--text-muted)">已选 wallpaper.jpg<br><span style="color:var(--accent-2)">设为桌面壁纸 →</span></div>
      </div>`,
    heroPanel: null,
  },
  {
    id: 'wheel',
    icon: '🎡',
    name: '幸运转盘',
    desc: '自定义选项与权重，点击转动随机决策——团建抽人、午饭吃什么，都可以交给转盘。',
    bullets: ['自定义选项', '流畅转动动画', '结果历史'],
    mock: `
      <div class="mock-inner" style="text-align:center">
        <div style="width:100px;height:100px;margin:0 auto;border-radius:50%;border:4px solid var(--accent);background:conic-gradient(var(--accent) 0 25%, var(--accent-2) 25% 50%, #444 50% 75%, var(--accent) 75%)"></div>
        <p style="margin:12px 0 0;font-size:0.85rem;color:var(--accent)">点击开始</p>
      </div>`,
    heroPanel: null,
  },
  {
    id: 'zoufour',
    icon: '♟',
    name: '走四子儿',
    desc: '内置传统棋类小游戏，工作间隙放松片刻，与效率工具共处一室而不必另开应用。',
    bullets: ['本地双人对战', '规则提示', '轻量动画'],
    mock: `
      <div class="mock-inner" style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;max-width:140px;margin:0 auto">
        ${Array(16)
          .fill(0)
          .map((_, i) => `<div style="aspect-ratio:1;background:${i % 5 === 0 ? 'var(--accent)' : 'rgba(255,255,255,0.08)'};border-radius:4px"></div>`)
          .join('')}
      </div>`,
    heroPanel: null,
  },
];

for (const m of MODULES) {
  if (HERO_PANELS[m.id]) m.heroPanel = HERO_PANELS[m.id];
}

const SIDEBAR_ICONS = MODULES.map((m) => m.icon);

/** 相对路径；单页打包时由 build-standalone 注入 SHOT_DATA */
const SHOTS = 'screenshots';
function shotUrl(id) {
  const data = (typeof window !== 'undefined' && window.__SHOT_DATA) || {};
  return data[id] || `${SHOTS}/${id}.png`;
}

function moduleMockHtml(m) {
  return `
    <div class="module-mock module-mock--shot" data-shot="${m.id}">
      <img src="${shotUrl(m.id)}" alt="${m.name} 实机截图" loading="lazy"
        onerror="this.closest('.module-mock--shot')?.classList.add('is-fallback')" />
      <div class="module-mock-fallback">${m.mock}</div>
    </div>`;
}

function renderFeatureTags() {
  const el = document.getElementById('feature-tags');
  if (!el) return;
  el.innerHTML = MODULES.map(
    (m) => `<button type="button" class="feature-tag" data-id="${m.id}">${m.icon} ${m.name}</button>`
  ).join('');
  el.querySelectorAll('.feature-tag').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.getElementById(`module-${btn.dataset.id}`)?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function modulesAnchor(id) {
  return `module-${id}`;
}

function renderModules() {
  const list = document.getElementById('module-list');
  if (!list) return;
  list.innerHTML = MODULES.map(
    (m, i) => `
    <article class="module-item reveal" id="${modulesAnchor(m.id)}">
      <div class="module-copy">
        <div class="module-meta">
          <span class="module-icon">${m.icon}</span>
          <span class="eyebrow" style="margin:0">${String(i + 1).padStart(2, '0')}</span>
        </div>
        <h3>${m.name}</h3>
        <p class="module-desc">${m.desc}</p>
        <ul class="module-bullets">
          ${m.bullets.map((b) => `<li>${b}</li>`).join('')}
        </ul>
      </div>
      ${moduleMockHtml(m)}
    </article>`
  ).join('');
}

function renderHero() {
  const sidebar = document.getElementById('hero-sidebar');
  const panel = document.getElementById('hero-panel');
  if (!sidebar || !panel) return;

  sidebar.innerHTML = SIDEBAR_ICONS.map(
    (icon, i) =>
      `<button type="button" class="sidebar-btn${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="${MODULES[i].name}">${icon}</button>`
  ).join('');

  let active = 0;

  function showPanel(index) {
    active = index;
    sidebar.querySelectorAll('.sidebar-btn').forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });
    const mod = MODULES[index];
    panel.innerHTML = `<div class="hero-panel-stage">${mod.heroPanel || mod.mock}</div>`;
  }

  showPanel(0);

  sidebar.addEventListener('click', (e) => {
    const btn = e.target.closest('.sidebar-btn');
    if (!btn) return;
    showPanel(Number(btn.dataset.index));
  });

  setInterval(() => {
    showPanel((active + 1) % MODULES.length);
  }, 4500);
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function initNav() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  window.addEventListener(
    'scroll',
    () => {
      header?.classList.toggle('scrolled', window.scrollY > 40);
    },
    { passive: true }
  );

  toggle?.addEventListener('click', () => {
    const open = nav?.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(!!open));
  });
}

function initFloatBallSection() {
  const arena = document.getElementById('float-ball-arena');
  const mainFrame = document.getElementById('float-ball-main-embed');
  const tip = document.querySelector('.float-ball-tip');
  const cards = document.querySelectorAll('.float-ball-state-card[data-ball-state]');
  if (!arena || !mainFrame || !cards.length) return;

  const DEFAULT_TIP =
    '在舞台区移动鼠标、拖动或单击小球，体验与 macOS 版一致的行为';
  const LOOK_TIP = '眼神模式：在舞台区移动鼠标，瞳孔会跟随光标方向';

  let activeState = 'awake';

  function postToMain(payload) {
    mainFrame.contentWindow?.postMessage({ type: 'float-ball', ...payload }, '*');
  }

  function selectCard(card) {
    cards.forEach((c) => {
      const on = c === card;
      c.classList.toggle('active', on);
      c.setAttribute('aria-selected', String(on));
    });
    activeState = card.dataset.ballState || 'awake';
    postToMain({ action: 'setState', state: activeState });
    if (tip) {
      tip.textContent = activeState === 'look' ? LOOK_TIP : DEFAULT_TIP;
    }
    arena.classList.toggle('is-look-mode', activeState === 'look');
  }

  cards.forEach((card) => {
    card.addEventListener('click', () => selectCard(card));
  });

  arena.addEventListener('mousemove', (e) => {
    const rect = mainFrame.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    postToMain({
      action: 'look',
      dx: e.clientX - cx,
      dy: e.clientY - cy,
    });
  });

  document.querySelectorAll('.float-ball-state-frame--look').forEach((frame) => {
    const iframe = frame.querySelector('iframe[data-look-preview]');
    if (!iframe) return;
    frame.addEventListener('mousemove', (e) => {
      const rect = iframe.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      iframe.contentWindow?.postMessage(
        {
          type: 'float-ball',
          action: 'look',
          dx: e.clientX - cx,
          dy: e.clientY - cy,
        },
        '*'
      );
    });
  });
}

const DOWNLOAD_META = {
  repo: 'sunyanchen1990/syc-tool',
  repoUrl: 'https://github.com/sunyanchen1990/syc-tool',
  releasesUrl: 'https://github.com/sunyanchen1990/syc-tool/releases/latest',
  fallbackVersion: '1.0.4',
};

const FIX_AFTER_DOWNLOAD = `DIR="$HOME/Downloads"
APP=$(find "$DIR" -maxdepth 5 -name "SYC-TOOL.app" -type d 2>/dev/null | head -1)
if [ -z "$APP" ]; then echo "请先把 ZIP 解压到「下载」文件夹"; exit 1; fi
BASE="$(dirname "$APP")"
xattr -dr com.apple.quarantine "$BASE" 2>/dev/null
xattr -cr "$BASE" 2>/dev/null
xattr -cr "$APP" 2>/dev/null
codesign --force --deep --sign - "$APP" 2>/dev/null
mkdir -p "$HOME/Applications"
ditto "$APP" "$HOME/Applications/SYC-TOOL.app"
xattr -cr "$HOME/Applications/SYC-TOOL.app" 2>/dev/null
codesign --force --deep --sign - "$HOME/Applications/SYC-TOOL.app" 2>/dev/null
open "$HOME/Applications/SYC-TOOL.app"
echo "完成"`;

function mirrorAssetUrl(directUrl) {
  if (!directUrl) return [];
  return [
    { label: 'GitHub 直连', url: directUrl },
    { label: '镜像线路 1', url: `https://ghfast.top/${directUrl}` },
    { label: '镜像线路 2', url: `https://mirror.ghproxy.com/${directUrl}` },
  ];
}

function formatSize(bytes) {
  if (!bytes) return '';
  const mb = bytes / (1024 * 1024);
  return mb >= 1 ? ` · 约 ${mb.toFixed(0)} MB` : '';
}

function bindDownloadButton(btn, mirrors) {
  if (!btn || !mirrors.length) return;
  btn.href = mirrors[0].url;
  btn.setAttribute('download', '');
}

function renderAltLinks(el, mirrors) {
  if (!el || mirrors.length < 2) return;
  const links = mirrors
    .slice(1)
    .map((m) => `<a href="${m.url}" rel="noopener" target="_blank">${m.label}</a>`)
    .join('');
  el.innerHTML = `<span class="download-alt-label">下载较慢可试</span>${links}`;
  el.hidden = false;
}

async function initDownloadSection() {
  const versionEl = document.getElementById('download-version');
  const zipBtn = document.getElementById('download-zip-btn');
  const dmgBtn = document.getElementById('download-dmg-btn');
  const zipAlt = document.getElementById('download-zip-alt');
  const dmgAlt = document.getElementById('download-dmg-alt');
  const fixCmdEl = document.getElementById('download-fix-cmd');
  const fixCopyBtn = document.getElementById('download-fix-copy');

  let version = DOWNLOAD_META.fallbackVersion;
  let zipUrl = `https://github.com/${DOWNLOAD_META.repo}/releases/download/v${version}/SYC-TOOL-${version}-arm64.zip`;
  let dmgUrl = `https://github.com/${DOWNLOAD_META.repo}/releases/download/v${version}/SYC-TOOL-${version}-arm64.dmg`;
  let zipSize = 0;
  let dmgSize = 0;

  try {
    const res = await fetch(
      `https://api.github.com/repos/${DOWNLOAD_META.repo}/releases/latest`,
      { headers: { Accept: 'application/vnd.github+json' } }
    );
    if (res.ok) {
      const data = await res.json();
      version = (data.tag_name || '').replace(/^v/, '') || version;
      for (const asset of data.assets || []) {
        const name = asset.name || '';
        if (name.endsWith('arm64.zip')) {
          zipUrl = asset.browser_download_url;
          zipSize = asset.size || 0;
        }
        if (name.endsWith('arm64.dmg')) {
          dmgUrl = asset.browser_download_url;
          dmgSize = asset.size || 0;
        }
      }
    }
  } catch {
    /* fallback URLs */
  }

  if (versionEl) {
    versionEl.textContent = `当前版本 v${version}`;
  }

  const zipMirrors = mirrorAssetUrl(zipUrl);
  const dmgMirrors = mirrorAssetUrl(dmgUrl);

  bindDownloadButton(zipBtn, zipMirrors);
  bindDownloadButton(dmgBtn, dmgMirrors);
  renderAltLinks(zipAlt, zipMirrors);
  renderAltLinks(dmgAlt, dmgMirrors);

  if (zipBtn && zipSize) zipBtn.textContent = `下载 ZIP${formatSize(zipSize)}`;
  if (dmgBtn && dmgSize) dmgBtn.textContent = `下载 DMG${formatSize(dmgSize)}`;

  if (fixCmdEl) fixCmdEl.textContent = FIX_AFTER_DOWNLOAD;
  if (fixCopyBtn) {
    fixCopyBtn.onclick = async () => {
      try {
        await navigator.clipboard.writeText(FIX_AFTER_DOWNLOAD);
        fixCopyBtn.textContent = '已复制';
        setTimeout(() => {
          fixCopyBtn.textContent = '复制修复命令';
        }, 1600);
      } catch {
        fixCopyBtn.textContent = '请手动复制';
      }
    };
  }
}

function initHeaderOffset() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;

      document.querySelector('.nav')?.classList.remove('open');

      if (href === '#top') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function initHeroBackground() {
  const body = document.querySelector('.app-body');
  if (!body) return;
  const base = import.meta.env.BASE_URL || './';
  const img = `${base}hero-bg.jpg`;
  body.style.backgroundImage = `linear-gradient(180deg, rgba(7, 9, 15, 0.4), rgba(7, 9, 15, 0.85)), url('${img}')`;
}

renderFeatureTags();
renderModules();
renderHero();
initHeroBackground();
initFloatBallSection();
initDownloadSection();
initReveal();
initNav();
initHeaderOffset();
