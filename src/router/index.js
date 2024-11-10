import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Mixes from '@/pages/Mixes.vue'
import Suggestions from '@/pages/Suggestions.vue'
import Blog from '@/pages/Blog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mixes',
      name: 'mixes',
      component: Mixes
    },
    {
      path: '/goodstuff',
      name: 'good stuff',
      component: Suggestions
    },
    {
      path: '/blog',
      name: 'bulshitting',
      component: Blog
    }
  ]
})

export default router
