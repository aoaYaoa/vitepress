<template>
  <div class="doc-footer">
    <div class="vp-doc-footer-divider" />
    
    <!-- Display previous and next page links -->
    <div class="vp-doc-footer-nav" v-if="hasPrevOrNext">
      <div class="vp-doc-footer-prev" v-if="prevLink">
        <a class="vp-doc-footer-link" :href="prevLink.link">
          <div class="vp-doc-footer-link-text">
            <span class="vp-doc-footer-label">上一页</span>
            <span class="vp-doc-footer-title">{{ prevLink.text }}</span>
          </div>
        </a>
      </div>
      <div class="vp-doc-footer-spacer" />
      <div class="vp-doc-footer-next" v-if="nextLink">
        <a class="vp-doc-footer-link" :href="nextLink.link">
          <div class="vp-doc-footer-link-text">
            <span class="vp-doc-footer-label">下一页</span>
            <span class="vp-doc-footer-title">{{ nextLink.text }}</span>
          </div>
        </a>
      </div>
    </div>
    
    <!-- Comments section -->
    <div class="doc-comments" v-if="showComments">
      <!-- <h2>评论</h2> -->
      <p v-if="!commentsSystem || commentsSystem === 'gitalk'">如有问题或建议，请在下方留言：</p>
      <component :is="selectedCommentsComponent" v-if="selectedCommentsComponent" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import defaultCommentsConfig from '../config/comments'

const { page, theme, frontmatter } = useData()

// Previous and next page links
const prevLink = computed(() => {
  return theme.value.docFooter?.prev !== false && page.value.prev
    ? page.value.prev
    : null
})

const nextLink = computed(() => {
  return theme.value.docFooter?.next !== false && page.value.next
    ? page.value.next
    : null
})

const hasPrevOrNext = computed(() => {
  return !!prevLink.value || !!nextLink.value
})

// Determine whether to show comments
const showComments = computed(() => {
  // First check if it's explicitly set in the frontmatter
  if (frontmatter.value.comments === false) return false
  if (frontmatter.value.comments === true) return true
  
  // Then check if it's disabled in the theme config
  if (theme.value.comment === null || theme.value.comment === false) return false
  
  // Otherwise use the config setting (default to true)
  return defaultCommentsConfig.enabled !== false
})

// Determine which comment system to use
const commentsSystem = computed(() => 
  frontmatter.value.commentsSystem || 
  theme.value.comment || 
  defaultCommentsConfig.defaultSystem || 
  'gitalk'
)

// Select the appropriate comment component
const selectedCommentsComponent = computed(() => {
  switch (commentsSystem.value) {
    case 'twikoo':
      return 'TwikooComments'
    case 'livere':
      return 'LivereComments'
    case 'gitalk':
    default:
      return 'GitalkComments'
  }
})
</script>

<style scoped>
.doc-footer {
  margin-top: 2rem;
}

.vp-doc-footer-divider {
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

.vp-doc-footer-nav {
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
}

.vp-doc-footer-prev,
.vp-doc-footer-next {
  flex-shrink: 0;
  max-width: 42%;
}

.vp-doc-footer-spacer {
  flex-grow: 1;
}

.vp-doc-footer-link {
  display: block;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: color 0.2s;
}

.vp-doc-footer-link:hover {
  color: var(--vp-c-brand-1);
}

.vp-doc-footer-label {
  display: block;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.25rem;
}

.vp-doc-footer-title {
  display: block;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5;
}

.vp-doc-footer-next .vp-doc-footer-link-text {
  text-align: right;
}

.doc-comments {
  margin-top: 4rem;
  /* padding: 1.5rem; */
  border-radius: 0.5rem;
  /* background-color: var(--vp-c-bg-soft); */
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.doc-comments h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  display: inline-block;
}

.doc-comments p {
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-2);
}

@media (max-width: 768px) {
  .vp-doc-footer-prev,
  .vp-doc-footer-next {
    max-width: 48%;
  }
  
  .vp-doc-footer-title {
    font-size: 0.9rem;
  }
}
</style> 