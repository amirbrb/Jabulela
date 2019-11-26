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
		selectedDate: new Date(),
		events: [
			{
				title: "glow dance",
				description: "",
				date: {
					year: 2019,
					month: 11,
					day: 5
				},
				time: "1600-1800",
				cost: 0,
				src: "https://www.facebook.com/events/2451786398474926/",
				img: "",
				organizer:"glow",
				location: {
					lat: 0,
					lng: 0,
					literal: "bluerama, koh phangan"
				}
			},	
		]
	},
	mutations: {
		setDate(state, dateChange) {
			this.state.selectedDate = dateParser.addDays(this.state.selectedDate, dateChange)
		}
	}
})
