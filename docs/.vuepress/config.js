import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  lang: 'zh-CN',
  theme: plumeTheme({
    profile: {
      name: '隐藏之年开发组',
      description: '星屹工作室下隐藏之年的专门开发组',
      avatar: '/team.png',
      circle: false, 
    }
  }),
  bundler: viteBundler(),
})