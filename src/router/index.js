import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../components/views/HomeView'
import ListView from '../components/views/ListView'
import MapView from '../components/views/MapView'
import SettingsView from '../components/views/SettingsView'
import ProfileView from '../components/views/ProfileView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    },
    {
      path: '/me',
      name: 'profile',
      component: ProfileView
    }
  ]
})
