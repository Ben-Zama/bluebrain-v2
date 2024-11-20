import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Services from '../pages/services.vue'
import Contact from '../pages/contact.vue'
import errorPage from '../pages/404.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/:catchAll(.*)',
    name: 'error',
    component: errorPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
