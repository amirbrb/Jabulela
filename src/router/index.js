import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/list',
      name: 'list'
    },
    {
      path: '/geo',
      name: 'geo'
    },
    {
      path: '/settings',
      name: 'settings'
    },
    {
      path: '/me',
      name: 'profile'
    }
  ]
})
