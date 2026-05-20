/** Hero 右侧动态示意（纯 CSS，不用实机截图） */
export const HERO_PANELS = {
  weather: `
    <div class="hero-mock hero-mock-weather">
      <div class="hero-live-badge"><span class="pulse-dot"></span> LIVE</div>
      <div class="city">上海 · 多云</div>
      <div class="temp hero-temp-glow">19°</div>
      <p class="hero-sub">体感 21° · 微风</p>
      <div class="mock-forecast hero-forecast">
        <div class="active">今<div>19°</div></div>
        <div>明<div>17°</div></div>
        <div>后<div>20°</div></div>
        <div>五<div>22°</div></div>
      </div>
    </div>`,
  terminal: `
    <div class="hero-mock mock-terminal hero-mock-terminal">
      <div><span class="prompt">syc@mac ~ %</span> <span class="cmd">npm run build</span></div>
      <div class="out hero-line-fade">✓ built in 1.2s</div>
      <div><span class="prompt">syc@mac ~ %</span> <span class="cursor"></span></div>
    </div>`,
  calculator: `
    <div class="hero-mock hero-mock-calc">
      <div class="calc-display">128 × 3</div>
      <div class="calc-result">384</div>
      <div class="calc-keys">
        <span>7</span><span>8</span><span>9</span><span class="op">×</span>
        <span>4</span><span>5</span><span>6</span><span class="op">−</span>
      </div>
    </div>`,
  notes: `
    <div class="hero-mock hero-mock-notes">
      <div class="note"><strong>发布</strong> v1.0 官网上线</div>
      <div class="note accent"><strong>待办</strong> 宣传截图 · 模块演示</div>
    </div>`,
  clipboard: `
    <div class="hero-mock hero-mock-clip mock-clip">
      <div class="row"><span>{"app":"SYC-TOOL"}</span><span>1m</span></div>
      <div class="row"><span>npm run install:mac</span><span>3m</span></div>
      <div class="row dim"><span>export PATH=…</span><span>8m</span></div>
    </div>`,
  wallpaper: `
    <div class="hero-mock hero-mock-wallpaper">
      <div class="wp-grid">
        <div class="wp-thumb" style="background-image:url('wallpapers/half-dome.jpg')"></div>
        <div class="wp-thumb" style="background-image:url('wallpapers/yosemite-valley.jpg')"></div>
        <div class="wp-thumb" style="background-image:url('wallpapers/golden-peaks.jpg')"></div>
      </div>
      <p>一键设为 Mac 桌面</p>
    </div>`,
  wheel: `
    <div class="hero-mock hero-mock-wheel">
      <div class="wheel-spin-wrap">
        <div class="wheel-spin"></div>
        <div class="wheel-pointer"></div>
      </div>
      <p class="wheel-result">火锅 🎉</p>
    </div>`,
  json: `
    <div class="hero-mock mock-json hero-mock-json">
      <pre>{
  <span class="key">"app"</span>: <span class="str">"SYC-TOOL"</span>,
  <span class="key">"modules"</span>: <span class="num">12</span>
}</pre>
    </div>`,
  toolkit: `
    <div class="hero-mock hero-mock-toolkit">
      <div class="tk-line"><span>时间戳</span><em>1716105600 → 2024-05-19</em></div>
      <div class="tk-line"><span>统计</span><em>字数 1,024 · 行 48</em></div>
    </div>`,
  translate: `
    <div class="hero-mock hero-mock-translate">
      <div class="tr-src">Hello, SYC-TOOL</div>
      <div class="tr-arrow">⇣</div>
      <div class="tr-dst">你好，效率工具箱</div>
    </div>`,
  monitor: `
    <div class="hero-mock mock-monitor hero-mock-monitor">
      <div class="bars">
        <div class="metric"><label>CPU</label><div class="bar"><i class="bar-anim" style="--w:38%"></i></div></div>
        <div class="metric"><label>内存</label><div class="bar"><i class="bar-anim" style="--w:64%"></i></div></div>
        <div class="metric"><label>磁盘</label><div class="bar"><i class="bar-anim" style="--w:52%"></i></div></div>
        <div class="metric"><label>网络</label><div class="bar"><i class="bar-anim" style="--w:22%"></i></div></div>
      </div>
    </div>`,
  zoufour: `
    <div class="hero-mock hero-mock-zoufour">
      <div class="zf-board">
        <svg class="zf-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <line x1="0" y1="25" x2="100" y2="25" />
          <line x1="0" y1="50" x2="100" y2="50" />
          <line x1="0" y1="75" x2="100" y2="75" />
          <line x1="25" y1="0" x2="25" y2="100" />
          <line x1="50" y1="0" x2="50" y2="100" />
          <line x1="75" y1="0" x2="75" y2="100" />
        </svg>
        <div class="zf-capture-flash" aria-hidden="true"></div>
        <div class="zf-grid">
          ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
            .map((i) => {
              const human = [8, 9, 12, 13].includes(i);
              const ai = [1, 2, 5].includes(i);
              const sel = i === 8;
              const cls = [human ? 'human' : '', ai ? 'ai' : '', sel ? 'selected' : '']
                .filter(Boolean)
                .join(' ');
              return `<span class="${cls}" style="--i:${i}"></span>`;
            })
            .join('')}
        </div>
        <span class="zf-moving-piece" aria-hidden="true"></span>
      </div>
      <p class="zf-status"><span class="zf-dot"></span> 走四子儿 · 吃子中</p>
    </div>`,
};
