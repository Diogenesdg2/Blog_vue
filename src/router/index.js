import { createRouter, createWebHistory } from 'vue-router'
import Homelogin from '../components/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Homelogin
    },
    
  ]
})

export default router