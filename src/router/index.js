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
    name: 'ComandosXM',
    component: () => import('@/views/ComandosXeon.vue')
  },
  {
    path: '/comandosmc',
    name: 'ComandosXMMC',
    component: () => import('@/views/ComandosXeonMC.vue')
  },
  {
    path: '/invite',
    name: 'Invite',
    component: () => import('@/views/Invite.vue')
  },
  {
    path: '/:404*',
    name: 'PageNotFound',
    component: () => import('@/views/PageNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
