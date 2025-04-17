import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "aya",
  description: "又是希望天降横财的一天！！！",
  lang: 'zh-CN',
  
  // 网站图标和自定义头部标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'aya网站' }],
    ['meta', { property: 'og:description', content: '基于VitePress构建的中文站点' }],
    ['meta', { property: 'og:image', content: '/logo.png' }],
  ],
  
  // Markdown 配置
  markdown: {
    // 代码块中显示行号
    lineNumbers: true
  },
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    // 站点 Logo
    logo: '/logo.png',
    
    // 导航菜单
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/guide/' },
      { text: '资源', link: '/resource/' },
      { text: '关于', link: '/about/' }
    ],

    // 保留侧边栏配置，以便在访问具体文章时仍有导航
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '指南目录', link: '/guide/' },
            { text: '图片使用指南', link: '/guide/images-guide' },
            { text: 'Twikoo评论示例', link: '/guide/twikoo-demo' },
            { text: 'Webpack', link: '/guide/webpack' },
            { text: 'Vite', link: '/guide/vite' },
            { text: 'Taro', link: '/guide/taro' },
            { text: 'Qiankun', link: '/guide/qiankun' },
            { text: 'Promise', link: '/guide/Promise' },
            { text: 'Nginx', link: '/guide/nginx' },
            { text: 'Deno学习记录', link: '/guide/deno学习记录' },
            { text: '性能优化', link: '/guide/性能优化' }
          ]
        }
      ],
      '/examples/': [
        {
          text: '示例',
          items: [
            { text: '示例目录', link: '/examples/' },
            { text: 'Markdown示例', link: '/examples/markdown' },
            { text: 'API示例', link: '/examples/api' }
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'mail', link: 'mailto:matthew@matthewdavis.io' }
    ],

    // 添加页脚
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024'
    },

    // 本地化文本
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    
    // 大纲配置
    outline: {
      label: '页面导航',
      level: [2, 3]
    },
    
    // 搜索功能配置
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    
    // 评论系统配置
    // @ts-ignore
    comment: 'twikoo' // 可选值: 'gitalk', 'twikoo', 'livere' 或 null (不显示评论)
  }
})
