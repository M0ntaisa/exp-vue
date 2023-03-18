import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Create from '../views/Create.vue'
import Update from '../views/Update.vue'

const routes = [
  {
    path: '/Index',
    name: 'Index',
    component: Index,
  },
  {
    path: '/Create',
    name: 'Create',
    component: Create,
  },
  {
    path: '/Update/:id',
    name: 'Update',
    component: Update,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
