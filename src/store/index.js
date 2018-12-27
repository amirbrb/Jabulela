/*eslint-disable*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		userData: {
			profileImage: '',
			authenticated: false
		},
	},
	mutations: {
		authenticateUser (state, userData) {
			state.userData.authenticated = true
			state.userData.profileImage = userData.profileImage
		}
	}
})
