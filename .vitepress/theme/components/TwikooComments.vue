<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vitepress'
import commentsConfig from '../config/comments'

// Get Twikoo environment ID from config
const envId = commentsConfig.twikooEnvId
const twikooContainer = ref(null)
const router = useRouter()

// CSS to override green styles
const styleElement = ref(null)
// Script element reference
const scriptElement = ref(null)

onMounted(() => {
  // Load Twikoo script
  loadTwikooScript().then(() => {
    // Initialize Twikoo after script is loaded
    initTwikoo()
  })
  
  // 注释掉样式修改 
  // addFixStyles()
  
  // Handle route changes
  router.onAfterRouteChanged = () => {
    if (window.twikoo) {
      initTwikoo()
    }
  }
})

onBeforeUnmount(() => {
  // Clean up styles when component unmounts
  if (styleElement.value && styleElement.value.parentNode) {
    styleElement.value.parentNode.removeChild(styleElement.value)
  }
})

// Load Twikoo script dynamically
function loadTwikooScript() {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    if (window.twikoo) {
      resolve()
      return
    }
    
    // Create script element
    scriptElement.value = document.createElement('script')
    scriptElement.value.src = 'https://cdn.jsdelivr.net/npm/twikoo@1.6.42/dist/twikoo.min.js'
    scriptElement.value.onload = () => resolve()
    scriptElement.value.onerror = () => reject(new Error('Failed to load Twikoo script'))
    
    // Add to document
    document.head.appendChild(scriptElement.value)
  })
}

// Add global styles to override Twikoo's green theme
function addFixStyles() {
  // Create style element
  
  styleElement.value = document.createElement('style')
  styleElement.value.setAttribute('type', 'text/css')

}

// Initialize Twikoo
function initTwikoo() {
  if (!window.twikoo || !twikooContainer.value) return
  
  // Clear container
  twikooContainer.value.innerHTML = '<div id="twikoo"></div>'
  
  // Initialize Twikoo
  window.twikoo.init({
    envId,
    el: '#twikoo',
    onCommentLoaded: () => {
      // 注释掉对绿色背景的修复
      // fixGreenBackgrounds()
      
      // 注释掉延迟修复
      // setTimeout(fixGreenBackgrounds, 500)
      // setTimeout(fixGreenBackgrounds, 1500)
    }
  })
}

// Directly fix green backgrounds
function fixGreenBackgrounds() {
  // 完全注释掉覆盖绿色的代码
  /*
  // Target elements with green background
  const selectors = [
    '.tk-action', '.tk-action-bar', '.tk-toolbar', 
    '.tk-submit-action', '.tk-footer'
  ]
  
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.style.backgroundColor = 'var(--vp-c-bg-soft)'
    })
  })
  
  // Fix submit button
  document.querySelectorAll('.tk-submit').forEach(el => {
    el.style.backgroundColor = 'var(--vp-c-brand-1)'
  })
  */
  
  // 注释掉内联样式修改
  // document.querySelectorAll('[style*="#42b983"], [style*="rgb(66, 185, 131)"]').forEach(el => {
  //   el.style.backgroundColor = 'var(--vp-c-bg-soft)'
  // })
}
</script>

<template>
  <div class="comments-section">
    <h2 class="comments-title">
      <svg class="comment-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    </h2>
    <div ref="twikooContainer" class="twikoo-container"></div>
    
  </div>
</template>

<style>
.comments-section {
  padding: 1.5rem;
  border-radius: 0.5rem;
  /* background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider); */
}

.comments-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--vp-c-brand-1);
  /* color: var(--vp-c-brand-1); */
  display: inline-block;
}

.comment-icon {
  color: var(--vp-c-brand-1);
  stroke: var(--vp-c-brand-1);
  width: 28px;
  height: 28px;
  vertical-align: middle;
  transition: all 0.3s ease;
  transform-origin: center;
  animation: pulse 2s infinite;
}

/* 悬停效果 */
.comment-icon:hover {
  transform: scale(1.15);
  filter: drop-shadow(0 0 3px var(--vp-c-brand-1));
}

/* 脉冲动画 */
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* 为SVG路径添加描边动画 */
.comment-icon path {
  stroke-dasharray: 150;
  stroke-dashoffset: 150;
  animation: draw 4s ease-in-out infinite;
}

@keyframes draw {
  0% {
    stroke-dashoffset: 150;
  }
  40% {
    stroke-dashoffset: 0;
  }
  60% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 150;
  }
}

.twikoo-container {
  width: 100%;
  min-height: 200px;
}
.twikoo .el-input__inner,
.twikoo .el-textarea__inner {
  background-size: 30% 100% !important;
}
</style>
