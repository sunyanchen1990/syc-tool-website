# SYC-TOOL 官方网站

SYC-TOOL macOS 效率工具箱的产品宣传页，风格与桌面应用一致（深色 + 金色 `#f5b800` + 薄荷绿 `#6ee7c8`）。

仓库地址：[github.com/sunyanchen1990/syc-tool-website](https://github.com/sunyanchen1990/syc-tool-website)

桌面应用代码见：[github.com/sunyanchen1990/syc-tool](https://github.com/sunyanchen1990/syc-tool)

## 单文件预览（推荐）

**`SYC-TOOL-官网.html`** — 双击或用浏览器打开即可查看，无需安装 Node、无需启动服务。

重新生成单页：

```bash
npm install
npm run standalone
```

## 开发

```bash
npm install
npm run dev
```

默认 http://localhost:5199

## 构建与部署

```bash
npm run build
```

静态产物在 `dist/`，可部署到 GitHub Pages、Vercel、Nginx 等。

## 在线地址（GitHub Pages）

推送 `main` 分支后自动部署：

**https://sunyanchen1990.github.io/syc-tool-website/**

首次需在仓库 **Settings → Pages → Build and deployment** 中选择 **GitHub Actions**（工作流首次成功运行后通常会自动生效）。

## 更新实机截图

需与官网仓库同目录下的 [syc-tool](https://github.com/sunyanchen1990/syc-tool)（均在 `t5/` 下）：

```bash
# 在 t5/syc-tool 目录
npm run website:capture
```

截图输出到 `public/screenshots/`，并自动重新打包 `SYC-TOOL-官网.html`。
