import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('@/views/Sobre.vue')
  },
  {
    path: '/comandos',
    name: 'Comandos',
    component: () => import('@/views/Comandos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
