import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Main_Details from '../views/Main_Details.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home
  },
  {
    path: '/data-all/:tipe',
    name: 'Details',
    props: true,
    component: Details
  },
  {
    path: '/details/:tipe/:id',
    name: 'Main_Details',
    props: true,
    component: Main_Details
  }
]

const router = new VueRouter({
  routes
})

export default router
