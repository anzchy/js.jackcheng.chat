# GitHub Pages 部署指南

本指南将帮助你将 LangShift 项目部署到 GitHub Pages。

## 前提条件

1. 项目已经托管在 GitHub 仓库中
2. 你有该仓库的管理员权限
3. 项目使用 Next.js 框架

## 配置步骤

### 1. 项目配置

项目已经配置了以下文件来支持 GitHub Pages 部署：

#### `.github/workflows/deploy.yml`
自动化部署工作流，当代码推送到 main 分支时自动构建和部署。

#### `next.config.mjs` 更新
添加了静态导出配置：
```javascript
output: 'export',
trailingSlash: true,
skipTrailingSlashRedirect: true,
distDir: 'out',
```

#### `package.json` 更新
添加了 `export` 脚本命令。

#### `public/.nojekyll`
告诉 GitHub Pages 不要使用 Jekyll 处理静态文件。

### 2. GitHub 仓库设置

1. **进入仓库设置**
   - 打开你的 GitHub 仓库
   - 点击 "Settings" 选项卡

2. **配置 Pages 设置**
   - 在左侧菜单中找到 "Pages"
   - 在 "Source" 部分选择 "GitHub Actions"
   - 保存设置

3. **启用 Actions**
   - 确保 GitHub Actions 已启用
   - 如果是第一次使用，可能需要启用 Actions 权限

### 3. 部署流程

1. **推送代码**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

2. **查看部署状态**
   - 在仓库的 "Actions" 选项卡中查看工作流运行状态
   - 等待构建完成（通常需要 2-5 分钟）

3. **访问网站**
   - 部署成功后，网站将在以下地址可用：
   - `https://[你的用户名].github.io/[仓库名]/`
   - 例如：`https://erweixin.github.io/langshift-python-js/`

### 4. 自定义域名（可选）

如果你有自定义域名（如 langshift.dev）：

1. **DNS 配置**
   - 在你的域名提供商处添加 CNAME 记录
   - 指向 `[你的用户名].github.io`

2. **GitHub 设置**
   - 在 Pages 设置中的 "Custom domain" 字段输入你的域名
   - 启用 "Enforce HTTPS"

3. **更新工作流**
   - 如果使用自定义域名，保留 `deploy.yml` 中的 `cname: langshift.dev` 行
   - 如果不使用，删除该行

## 常见问题

### Q: 部署失败怎么办？
A: 检查 Actions 选项卡中的错误日志，常见问题包括：
- Node.js 版本不兼容
- 依赖安装失败
- 构建错误

### Q: 网站显示 404 错误？
A: 确保：
- Pages 设置正确
- 工作流成功完成
- 访问的 URL 正确

### Q: 样式或资源加载失败？
A: 检查：
- `next.config.mjs` 中的 `basePath` 配置
- 静态资源的路径是否正确

### Q: 如何更新网站？
A: 只需推送新代码到 main 分支，GitHub Actions 会自动重新部署。

## 性能优化建议

1. **启用压缩**：项目已配置 gzip 压缩
2. **图片优化**：使用 WebP 和 AVIF 格式
3. **缓存策略**：静态资源设置长期缓存
4. **CDN**：考虑使用 Cloudflare 等 CDN 服务

## 监控和分析

- 使用 Google Analytics 跟踪访问数据
- 使用 Google Search Console 监控 SEO 表现
- 定期检查 PageSpeed Insights 性能评分

---

部署完成后，你的 LangShift 网站就可以通过 GitHub Pages 访问了！