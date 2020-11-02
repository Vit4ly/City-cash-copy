import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '@/components/pages/Auth'
import Login from '@/components/auth/Login'
import Cabinet from '@/components/pages/Cabinet'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: '/login',
        component: Login
      }
    ]
  },

  {
    path: '/cabinet',
    name: 'Cabinet',
    component: Cabinet
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
