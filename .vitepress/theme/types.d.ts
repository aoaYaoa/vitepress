import { DefaultTheme } from 'vitepress'

declare module 'vitepress' {
  interface Config {
    themeConfig?: ThemeConfig
  }

  interface ThemeConfig extends DefaultTheme.Config {
    comments?: {
      enabled?: boolean
      defaultSystem?: 'livere' | 'gitalk' | 'twikoo'
      livereDataUid?: string
      gitalkConfig?: {
        clientID: string
        clientSecret: string
        repo: string
        owner: string
        admin: string[]
        distractionFreeMode?: boolean
        [key: string]: any
      }
      twikooEnvId?: string
      [key: string]: any
    }
  }
}

declare module 'vitepress/theme' {
  interface Theme extends DefaultTheme.Config {
    comment?: 'gitalk' | 'twikoo' | 'livere' | null
  }
} 