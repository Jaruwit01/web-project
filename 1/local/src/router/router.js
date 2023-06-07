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
    path:'/DSLR-Camera',
    name:'DSL-Camera',
    component: () => import(/* webpackChunkName: "about" */ '../views/DSLR.vue')
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
  },
  {
    path:'/admin-page/add-item',
    name:'add-item',
    component: () => import(/* webpackChunkName: "about" */'../views/AddItem.vue')
  },
  {
    path:'/admin-page/edit-item/:id',
    name:'edit-item',
    component: () => import(/* webpackChunkName: "about" */'../views/EditItem.vue')
  },
  {
    path:'/Compact-Camera',
    name:'Compact-Camera',
    component: () => import(/* webpackChunkName: "about" */'../views/Compact.vue')
  },
  {
    path:'/Mirrorless-Camera',
    name:'Mirrorless-Camera',
    component: () => import(/* webpackChunkName: "about" */'../views/Mirrorless.vue')
  },
  {
    path:'/Film-Camera',
    name:'Film-Camera',
    component: () => import(/* webpackChunkName: "about" */'../views/Film.vue')
  },
  {
    path:'/Action-Camera',
    name:'Action-Camera',
    component: () => import(/* webpackChunkName: "about" */'../views/Action.vue')
  },
  {
    path:'/Camcorder-Camera',
    name:'Camcorder-Camera',
    component: () => import(/* webpackChunkName: "about" */'../views/CamcordersCamera.vue')
  },
  {
    path:'/Instant-Camera',
    name:'Instant-Camera',
    component: () => import(/* webpackChunkName: "about" */'../views/InstantCamera.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'active',
  routes
})
export default router



