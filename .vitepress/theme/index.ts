// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import TwikooComments from './components/TwikooComments.vue'
import GitalkComments from './components/GitalkComments.vue'
import LivereComments from './components/LivereComments.vue'
import DocFooter from './components/DocFooter.vue'
// import './style.css'
import './custom.css'
import { Theme, EnhanceAppContext } from 'vitepress'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  
  // Override the Layout to add the comments component to all content pages
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(DocFooter)
    })
  },
  
  enhanceApp(ctx: EnhanceAppContext) {
    // Register global components
    ctx.app.component('TwikooComments', TwikooComments)
    ctx.app.component('GitalkComments', GitalkComments)
    ctx.app.component('LivereComments', LivereComments)
    ctx.app.component('DocFooter', DocFooter)
  }
} as Theme
