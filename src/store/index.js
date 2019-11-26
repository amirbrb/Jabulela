/*eslint-disable*/
import Vue from 'vue'
import Vuex from 'vuex'
import dateParser from 'date-and-time'

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
			this.state.selectedDate = dateParser.addDays(this.state.selectedDate, dateChange)
		},
		setDate(state, selectedDate) {
			this.state.selectedDate = selectedDate
		}
	}
})
