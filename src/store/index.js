/*eslint-disable*/
import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

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
			this.state.selectedDate = moment(this.state.selectedDate).add(dateChange, 'days').toDate()
		},
		setDate(state, selectedDate) {
			this.state.selectedDate = selectedDate
		}
	}
})
