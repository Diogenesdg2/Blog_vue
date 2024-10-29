import { createRouter, createWebHistory } from 'vue-router'
import Homelogin from '../components/Login.vue'
import AreaPost from '@/components/AreaPost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Homelogin
    },
    {
      path: '/postagens',
      name: 'Area Post',
      component: AreaPost
    },
    
  ]
})

export default router