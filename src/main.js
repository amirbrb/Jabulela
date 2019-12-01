// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './components/general/App'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog, faListUl, faGlobe, faUserCircle, faEyeSlash, faSignature, faBars, faChevronCircleRight, faChevronCircleLeft, faSearch, faClock, faCoins, faHistory } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import moment from 'vue-moment'

library.add(faCog)
library.add(faListUl)
library.add(faGlobe)
library.add(faUserCircle)
library.add(faEyeSlash)
library.add(faSignature)
library.add(faBars)
library.add(faChevronCircleLeft)
library.add(faChevronCircleRight)
library.add(faSearch)
library.add(faClock)
library.add(faCoins)
library.add(faHistory)

Vue.use(VueResource)
Vue.use(moment)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
