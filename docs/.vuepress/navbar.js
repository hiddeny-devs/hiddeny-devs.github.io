import { defineNavbar } from 'vuepress-theme-plume'

export default defineNavbar([
  { text: '首页', link: '/', icon: 'material-symbols:home-outline' },
  { text: '博客', link: '/blog/', icon: 'material-symbols:article-outline' },
  { text: '教程', link: '/docs/tutorials/index' },
  { text: 'API', link: '/docs/api/index' },
  { text: '关于', link: '/docs/about/credits'}
])