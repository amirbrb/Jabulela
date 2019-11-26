import Vue from 'vue'
import Router from 'vue-router'
import ListView from '../components/views/ListView'
import MapView from '../components/views/MapView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListView
    },
    {
      path: '/list',
      name: 'list',
      component: ListView
    },
    {
      path: '/geo',
      name: 'geo',
      component: MapView
    }
  ]
})
