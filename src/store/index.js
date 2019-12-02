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
		selectedDate: new Date()
	},
	getters: {
		selectedDate () {
			return state.selectedDate
		}
	},
	mutations: {
		setDateMovment(state, dateChange) {
			var newDate = new Date()
			newDate.setDate(state.selectedDate.getDate() + dateChange)
			state.selectedDate = newDate	
		},
		setDate(state, selectedDate) {
			state.selectedDate = selectedDate
		}
	}
})
