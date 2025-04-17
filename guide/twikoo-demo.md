# Twikoo 评论系统示例

这个页面专门展示如何使用 Twikoo 评论系统。

## 方法一：使用专用 Twikoo 组件（推荐）

这个专用组件提供了更好的 Twikoo 集成体验，包括图片查看器和数学公式支持：

<TwikooComments />

<!-- ## 方法二：直接集成（不使用组件）

这个方法直接在页面上集成 Twikoo，无需使用我们的组件：

<div id="tcomment"></div>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 动态加载 Twikoo
  const loadScript = () => {
    return new Promise((resolve, reject) => {
      if (document.getElementById('twikoo-direct-script')) {
        resolve(window.twikoo)
        return
      }
      
      const script = document.createElement('script')
      script.id = 'twikoo-direct-script'
      script.src = 'https://cdn.jsdelivr.net/npm/twikoo/dist/twikoo.all.min.js'
      script.crossOrigin = 'anonymous'
      script.onload = () => resolve(window.twikoo)
      script.onerror = reject
      document.head.appendChild(script)
    })
  }
  
  // 初始化 Twikoo
  const initTwikoo = async () => {
    try {
      const twikoo = await loadScript()
      await twikoo.init({
        envId: 'https://twikoogo.netlify.app', // 环境 ID
        el: '#tcomment', // 容器元素
      })
      console.log('Twikoo 评论系统加载成功')
    } catch (e) {
      console.error('Twikoo 评论系统加载失败:', e)
      document.getElementById('tcomment').innerHTML = 
        '<div style="color: red; text-align: center;">Twikoo 评论系统加载失败</div>'
    }
  }
  
  // 执行初始化
  initTwikoo()
})
</script> -->
## Twikoo 特性

Twikoo 是一个功能丰富的评论系统，支持：

- 用户头像和登录功能
- 多层嵌套回复
- 图片上传和预览
- 表情选择器
- 代码语法高亮
- LaTeX 数学公式
- Markdown 格式支持
- 反垃圾评论保护

## 故障排除

如果 Twikoo 无法加载，可能是由于以下原因：

1. **网络问题**：确保可以访问 Twikoo 的 CDN (cdn.jsdelivr.net) 和服务器
2. **环境 ID 格式**：检查环境 ID 格式是否正确
   - 云函数版本：填写腾讯云环境 ID
   - Vercel 版本：填写完整部署 URL
   - Netlify 版本：填写完整部署 URL
3. **跨域限制**：可能存在跨域限制问题，尝试使用 iframe 嵌入方式
4. **浏览器兼容性**：确保使用现代浏览器，如 Chrome、Firefox、Edge 等

## Twikoo 官方文档

更多关于 Twikoo 的配置信息，请参考 [Twikoo 官方文档](https://twikoo.js.org/) 