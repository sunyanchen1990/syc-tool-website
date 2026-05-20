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

## 更新实机截图

需与本仓库同级的 [syc-tool](https://github.com/sunyanchen1990/syc-tool) 应用仓库：

```bash
# 在 syc-tool 仓库根目录
npm run website:capture
```

截图输出到 `public/screenshots/`，并自动重新打包 `SYC-TOOL-官网.html`。
