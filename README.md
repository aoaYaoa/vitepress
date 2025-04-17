# VitePress 博客

基于VitePress构建的个人博客网站，记录学习与生活的点滴，分享前端开发的知识和经验。

## 功能特性

- 📝 Markdown驱动的内容创作
- 🎨 自定义主题和样式
- 💬 多种评论系统集成（Gitalk, Twikoo, Livere）
- 🌙 自动暗黑模式支持
- 🔍 内置搜索功能
- 📱 响应式设计，适配各种设备

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建静态站点
npm run docs:build

# 预览构建的站点
npm run docs:preview
```

## 目录结构

```
.
├─ .vitepress/       # VitePress配置目录
│  ├─ config.mts     # 主配置文件
│  ├─ theme/         # 主题定制
│  └─ public/        # 静态资源
├─ public/           # 全局静态资源
├─ assets/           # 资源文件
│  └─ images/        # 图片资源
├─ guide/            # 指南文章
├─ resource/         # 资源分享
├─ about/            # 关于页面
└─ index.md          # 首页
```

## 技术栈

- [VitePress](https://vitepress.dev/) - 静态站点生成器
- [Vue 3](https://vuejs.org/) - 渐进式JavaScript框架
- [Vite](https://vitejs.dev/) - 下一代前端工具链

## 许可证

MIT
