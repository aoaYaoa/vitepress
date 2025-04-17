<script setup>
import { onMounted, ref } from 'vue'
import commentsConfig from '../config/comments'

// Get Livere configuration from config
const livereDataUid = commentsConfig.livereDataUid || 'MTAyMC82MDU3OC8zNzA0OQ=='
const livereLoaded = ref(false)
const livereContainer = ref(null)

// Load Livere
const loadLivere = () => {
  if (document.getElementById('livere-script')) {
    console.log('Livere script already loaded')
    return Promise.resolve()
  }
  
  return new Promise((resolve, reject) => {
    try {
      // Show loading message
      if (livereContainer.value) {
        livereContainer.value.innerHTML = '<div style="text-align: center; padding: 20px;">正在加载 Livere 评论系统...</div>'
      }
      
      // Set window options for Livere
      window.livereOptions = { refer: location.pathname }
      
      // Create script element
      const script = document.createElement('script')
      script.id = 'livere-script'
      script.src = 'https://cdn-city.livere.com/js/embed.dist.js'
      script.async = true
      script.defer = true
      script.onload = () => {
        livereLoaded.value = true
        resolve()
      }
      script.onerror = (e) => {
        console.error('Failed to load Livere script:', e)
        if (livereContainer.value) {
          livereContainer.value.innerHTML = '<div style="text-align: center; padding: 20px; color: red;">加载 Livere 评论系统失败，请检查网络连接</div>'
        }
        reject(e)
      }
      
      // Append to document
      document.head.appendChild(script)
    } catch (error) {
      console.error('Error setting up Livere:', error)
      reject(error)
    }
  })
}

// Handle routing in SPA mode
const setupRouteChange = () => {
  if (typeof window !== 'undefined') {
    // Watch for route changes
    const originalPushState = history.pushState
    history.pushState = function() {
      originalPushState.apply(this, arguments)
      // Reload Livere on route change
      reloadLivere()
    }
    
    // Watch for popstate events (back/forward)
    window.addEventListener('popstate', () => {
      reloadLivere()
    })
  }
}

// Reload Livere on route change
const reloadLivere = () => {
  // Clear current container
  if (livereContainer.value) {
    livereContainer.value.innerHTML = '<div id="lv-container" data-id="city" :data-uid="livereDataUid"></div>'
    
    // Remove old script
    const oldScript = document.getElementById('livere-script')
    if (oldScript) {
      oldScript.remove()
    }
    
    // Load again
    setTimeout(() => {
      loadLivere()
    }, 500)
  }
}

// Initialize on component mount
onMounted(() => {
  // Load Livere
  loadLivere()
  
  // Setup route change handling
  setupRouteChange()
})
</script>

<template>
  <div class="livere-container-wrapper">
    <h3>Livere 评论</h3>
    <div ref="livereContainer">
      <div id="lv-container" data-id="city" :data-uid="livereDataUid"></div>
    </div>
    
    <!-- Add fallback message -->
    <div v-if="!livereLoaded" class="livere-fallback">
      <p>如果评论无法加载，请确保您已打开 JavaScript 并刷新页面</p>
    </div>
  </div>
</template>

<style scoped>
.livere-container-wrapper {
  margin-top: 2rem;
  padding-top: 1rem;
}

.livere-container-wrapper h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.livere-fallback {
  margin-top: 1rem;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  border-top: 1px dashed var(--vp-c-divider);
}

/* Customize Livere styles */
:deep(#lv-container) {
  width: 100%;
}

/* Dark mode adjustments */
:global(.dark) :deep(#lv-container) {
  color-scheme: dark;
}
</style> 