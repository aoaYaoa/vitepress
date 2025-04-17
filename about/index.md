# 关于我

## 个人简介

<div class="about-profile">
  <div class="profile-image">
    <img src="/assets/images/avatar.jpg" alt="个人头像" />
  </div>
  <div class="profile-info">
    <p>嗨，我是 aya，一名热爱前端开发的工程师。我对网站设计和开发充满热情，专注于创建用户友好且性能优秀的 Web 应用。</p>
    <p>我喜欢探索新技术并分享我的知识和经验。这个博客是我记录学习笔记、分享技术见解和工作经验的地方。</p>
  </div>
</div>

## 技能与专长

我的技术栈主要集中在 Web 前端开发领域:

<div class="skills-container">
  <div class="skill-category">
    <h3>💻 前端开发</h3>
    <ul>
      <li>HTML5, CSS3, JavaScript (ES6+)</li>
      <li>Vue.js 生态系统 (Vue 2/3, Vuex, Vue Router, Nuxt.js)</li>
      <li>React.js (React Hooks, Redux, Next.js)</li>
      <li>TypeScript</li>
      <li>现代 CSS (Flexbox, Grid, 动画)</li>
      <li>UI 框架 (Element UI, Ant Design)</li>
    </ul>
  </div>

  <div class="skill-category">
    <h3>🛠 工具与方法</h3>
    <ul>
      <li>构建工具: Webpack, Vite, Rollup</li>
      <li>版本控制: Git, GitHub</li>
      <li>测试工具: Jest, Vitest, Cypress</li>
      <li>CI/CD 流程</li>
      <li>响应式设计与移动端适配</li>
    </ul>
  </div>

  <div class="skill-category">
    <h3>📱 跨端开发</h3>
    <ul>
      <li>小程序开发 (原生、Taro)</li>
      <li>混合应用开发</li>
      <li>PWA 技术</li>
    </ul>
  </div>
</div>

## 工作经历

- **高级前端工程师** - ABC科技有限公司 (2020年至今)
  - 负责公司核心产品前端架构设计与实现
  - 主导多个大型项目的前端开发
  - 指导初级开发人员，提供技术支持和代码审查

- **前端开发工程师** - XYZ互联网公司 (2017年至2020年)
  - 参与多个 Web 应用的开发与维护
  - 优化网站性能，提升用户体验
  - 与后端团队协作，实现各种功能需求

## 开源贡献

<div class="opensource-projects">
  <div class="project">
    <h3>VitePress 主题</h3>
    <p>一个基于 VitePress 的博客主题，专为开发者设计。</p>
    <a href="https://github.com/username/vitepress-theme" target="_blank">GitHub</a>
  </div>

  <div class="project">
    <h3>Vue 组件库</h3>
    <p>一套基于 Vue 3 的可复用组件库，帮助开发者快速构建应用。</p>
    <a href="https://github.com/username/vue-components" target="_blank">GitHub</a>
  </div>
</div>

## 教育背景

- **计算机科学与技术 学士学位** - 某某大学 (2013年 - 2017年)

## 兴趣爱好

除了编程，我还喜欢：

- 📚 阅读技术书籍与科幻小说
- 🎮 玩电子游戏
- 🏃‍♂️ 跑步和健身
- ✈️ 旅行与探索不同文化

## 联系方式

如果您对我的文章有任何问题，或者想要探讨合作机会，欢迎通过以下方式联系我：

<div class="contact-info">
  <p>📧 Email: <a href="mailto:matthew@matthewdavis.io">matthew@matthewdavis.io</a></p>
  <p>🔗 GitHub: <a href="https://github.com/username" target="_blank">https://github.com/username</a></p>
  <p>🔗 微信公众号: 前端开发笔记</p>
</div>

<style>
.about-profile {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;
}

.profile-image img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--vp-c-brand-1);
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.skill-category {
  background-color: var(--vp-c-bg-soft);
  padding: 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.skill-category h3 {
  margin-top: 0;
  border-bottom: 2px solid var(--vp-c-brand-1);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.opensource-projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.project {
  background-color: var(--vp-c-bg-soft);
  padding: 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.project:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.project h3 {
  margin-top: 0;
  color: var(--vp-c-brand-1);
}

.contact-info {
  background-color: var(--vp-c-bg-soft);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .about-profile {
    flex-direction: column;
    text-align: center;
  }
  
  .skills-container,
  .opensource-projects {
    grid-template-columns: 1fr;
  }
}
</style> 