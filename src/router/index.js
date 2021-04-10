import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Repos from '../components/Repos.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Repos/:username',
    name: 'Repos',
    component: Repos
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
