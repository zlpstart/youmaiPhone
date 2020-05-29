import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect:'/w'
    },
  {
    path: '/w',
    name: 'Home',
    component: () => import('../views/Home/index.vue')
  },
  {
    path: '/workIntroduce/:e',
    name: 'workIntroduce',
    component: () => import('../views/WorkIntroduce/index.vue')
  },
  {
    path: '/versions',
    name: 'versions',
    component: () => import('../views/Versions/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About/index.vue')
  },
  {
    path: '/mall',
    name: 'mall',
    component: () => import('../views/Mall/index.vue')
  },
  {
    path: '/exploit',
    name: 'exploit',
    component: () => import('../views/Exploit/index.vue')
  },
  {
    path: '/serve',
    name: 'serve',
    component: () => import('../views/Serve/index.vue')
  },
  {
    path: '/market',
    name: 'market',
    component: () => import('../views/Market/index.vue')
  },
  {
    path: '/homeland',
    name: 'homeland',
    component: () => import('../views/Homeland/index.vue')
  },
  {
    path: '/renting',
    name: 'renting',
    component: () => import('../views/Renting/index.vue')
  },
  {
    path: '/garden',
    name: 'garden',
    component: () => import('../views/Garden/index.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/News/index.vue')
  },
  {
    path: '/err',
    name: 'err',
    component: () => import('../views/404/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
