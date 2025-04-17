<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vitepress'
import commentsConfig from '../config/comments'

// Get Gitalk configuration from config
const gitalkConfig = commentsConfig.gitalkConfig || {
  clientID: 'Ov23liY2ymYYtgsmUeoN',
  clientSecret: '39a78717ca5710bb38b412fd5e1cd2106b5319c5',
  repo: 'hexo-comments',
  owner: 'aoaYaoa',
  admin: ['aoaYaoa'],
  distractionFreeMode: false
}

const route = useRoute()
const gitalkContainer = ref(null)
const gitalkLoaded = ref(false)
const gitalkScript = ref(null)
const gitalkCss = ref(null)

// Get unique page ID for comments
const getPageId = () => {
  if (route.path) {
    // Limit length for Gitalk (GitHub issue labels have length limitations)
    return route.path.slice(-50)
  }
  return location.pathname
}

// Load Gitalk CSS
const loadGitalkCss = () => {
  if (document.getElementById('gitalk-css')) return Promise.resolve()
  
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.id = 'gitalk-css'
    link.rel = 'stylesheet'
    link.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css'
    link.onload = resolve
    link.onerror = reject
    document.head.appendChild(link)
  })
}

// Load Gitalk JS
const loadGitalkJs = () => {
  if (window.Gitalk) return Promise.resolve(window.Gitalk)
  if (document.getElementById('gitalk-script')) {
    return new Promise(resolve => {
      const checkGitalk = () => {
        if (window.Gitalk) resolve(window.Gitalk)
        else setTimeout(checkGitalk, 100)
      }
      checkGitalk()
    })
  }
  
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.id = 'gitalk-script'
    script.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js'
    script.onload = () => resolve(window.Gitalk)
    script.onerror = reject
    document.head.appendChild(script)
  })
}

// Initialize Gitalk
const initGitalk = async () => {
  if (!gitalkContainer.value) {
    console.error('Gitalk container not found')
    return
  }
  
  try {
    // Show loading message
    gitalkContainer.value.innerHTML = '<div style="text-align: center; padding: 20px;">正在加载 Gitalk 评论系统...</div>'
    
    // Load CSS and JS
    await loadGitalkCss()
    const Gitalk = await loadGitalkJs()
    
    // Clear container
    gitalkContainer.value.innerHTML = ''
    
    // Create Gitalk instance with current page ID
    const gitalk = new Gitalk({
      ...gitalkConfig,
      id: getPageId(),
    })
    
    // Initialize Gitalk
    gitalk.render('gitalk-container')
    gitalkLoaded.value = true
    console.log('Gitalk initialized successfully')
  } catch (error) {
    console.error('Failed to initialize Gitalk:', error)
    gitalkContainer.value.innerHTML = '<div style="text-align: center; padding: 20px; color: red;">加载 Gitalk 评论系统失败，请检查配置和网络连接</div>'
  }
}

// Handle routing in SPA mode
const setupRouteChange = () => {
  if (typeof window !== 'undefined') {
    // Watch for route changes
    const originalPushState = history.pushState
    history.pushState = function() {
      originalPushState.apply(this, arguments)
      // Re-initialize Gitalk on route change
      setTimeout(initGitalk, 500)
    }
    
    // Watch for popstate events (back/forward)
    window.addEventListener('popstate', () => {
      setTimeout(initGitalk, 500)
    })
  }
}

// Initialize on component mount
onMounted(() => {
  // Initialize Gitalk
  initGitalk()
  
  // Setup route change handling
  setupRouteChange()
})
</script>

<template>
  <div class="gitalk-container-wrapper">
    <h3>Gitalk 评论</h3>
    <div id="gitalk-container" ref="gitalkContainer"></div>
    
    <!-- Add GitHub issue link for manual fallback -->
    <div v-if="!gitalkLoaded" class="gitalk-fallback">
      <p>如果评论无法加载，您可以
        <a :href="`https://github.com/${gitalkConfig.owner}/${gitalkConfig.repo}/issues`" 
           target="_blank" rel="noopener noreferrer">
          在 GitHub 上查看或创建 Issue
        </a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.gitalk-container-wrapper {
  margin-top: 2rem;
  padding-top: 1rem;
}

.gitalk-container-wrapper h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.gitalk-fallback {
  margin-top: 1rem;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  border-top: 1px dashed var(--vp-c-divider);
}

/* Customize Gitalk styles */
:deep(.gt-container) {
  margin: 0 auto;
}

:deep(.gt-container .gt-meta) {
  border-color: var(--vp-c-divider);
}

:deep(.gt-container .gt-svg svg) {
  fill: var(--vp-c-brand-1);
}

:deep(.gt-container .gt-btn-preview) {
  background-color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

:deep(.gt-container .gt-btn-preview:hover) {
  background-color: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
}

:deep(.gt-container .gt-header-controls-tip) {
  color: var(--vp-c-brand-1);
}

:deep(.gt-container a.is--active) {
  color: var(--vp-c-brand-1);
}

:deep(.gt-container .gt-comment-username) {
  color: var(--vp-c-brand-1);
}

/* Dark mode adjustments */
:global(.dark) :deep(.gt-container) {
  color-scheme: dark;
}

:global(.dark) :deep(.gt-container .gt-btn-preview) {
  color: white;
}

:global(.dark) :deep(.gt-container .gt-comment-content) {
  background-color: var(--vp-c-bg-alt);
}

:global(.dark) :deep(.gt-container .gt-comment-content:hover) {
  box-shadow: none;
}
</style> 