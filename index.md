---
layout: home

hero:
  name: "aya"
  text: "又是希望天降横财的一天！！！"
  tagline: 记录学习与生活的点滴，分享前端开发的知识和经验
  image:
    src: assets/images/avatar.jpg
    alt: aya Logo
  actions:
    - theme: brand
      text: 开始阅读
      link: /guide/
    - theme: alt
      text: GitHub
      link: https://github.com/vuejs/vitepress

features:
  - icon: 
      src: /icons/rocket.svg
    title: 技术探索
    details: 深入前端技术，探索Vue.js、React、TypeScript等现代web开发技术
    link: /guide/
    linkText: 查看文章
  - icon: 
      src: /icons/tools.svg
    title: 工具分享
    details: 分享实用的开发工具和技巧，提高工作效率，解决常见问题
    link: /guide/webpack
    linkText: 工具集
  - icon: 
      src: /icons/book.svg
    title: 学习笔记
    details: 记录学习过程中的收获和思考，包括源码分析、最佳实践等
    link: /guide/vite
    linkText: 学习更多

customMetaSection:
  title: 最新文章
  description: 探索最新发布的技术文章和教程
  items:
    - title: Nginx配置指南
      description: 全面了解Nginx的配置和优化方法
      link: /guide/nginx
      icon: 
        src: /icons/server.svg
    - title: Taro跨端开发实践
      description: 小程序和H5一体化开发的最佳实践
      link: /guide/taro
      icon: 
        src: /icons/mobile.svg
    - title: 性能优化指南
      description: 提升Web应用性能的实用技巧
      link: /guide/性能优化
      icon: 
        src: /icons/speedometer.svg
    - title: Promise深入解析
      description: 理解JavaScript异步编程的核心
      link: /guide/Promise
      icon: 
        src: /icons/code.svg

footer: 用热爱创造价值 | Copyright © 2024
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/499550?v=4',
    name: 'Evan You',
    title: 'Vue.js & Vite Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/11247099?v=4',
    name: 'Antony Fu',
    title: 'VueUse Creator',
    links: [
      { icon: 'github', link: 'https://github.com/antfu' },
      { icon: 'twitter', link: 'https://twitter.com/antfu7' }
    ]
  }
]
</script>

<div class="vp-doc" style="margin-top: 2rem;">
  <h2 id="关于我" tabindex="-1">关于我</h2>
  <p>嗨，我是一名热爱Web开发的工程师，专注于前端技术。本站收集了我在学习和工作中的一些经验和思考，希望对你有所帮助。</p>
  <p>如有问题或建议，欢迎通过邮件联系我：<a href="mailto:matthew@matthewdavis.io">matthew@matthewdavis.io</a></p>
</div>

<div class="vp-doc" style="margin-top: 2rem; margin-bottom: 2rem;">
  <h2 id="推荐关注" tabindex="-1">推荐关注</h2>
  <VPTeamMembers size="small" :members="members" />
</div>

