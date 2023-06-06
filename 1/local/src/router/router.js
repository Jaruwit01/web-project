import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Camera.vue'
import SignUp from "../views/CreateAccount.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/camera',
    name: 'camera',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/signIn',
    component: () => import(/* webpackChunkName: "about" */ '../views/Member.vue')
  },
  {
    path:'/DSL-Camera',
    name:'DSL-Camera',
    component: () => import(/* webpackChunkName: "about" */ '../views/DSL.vue')
  },
  {
    path:'/signUp',
    name:'signUp',
    component:SignUp
  
  },
  {
    path:'/admin-page',
    name:'admin-page',
    component: () => import(/* webpackChunkName: "about" */'../views/AdminPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router



