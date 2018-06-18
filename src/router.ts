import Vue from 'vue'
import Router from 'vue-router'
import {imgSrcToBlob} from 'blob-util'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'login'
      // name: 'home',
      // component: () => import('./views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    }, {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '*',
      name: 'not-find',
      component: () => import('./views/404.vue')
    }
  ]
})
