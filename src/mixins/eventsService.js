/*eslint-disable*/
const eventsService = {
	methods: {
		getEventsByDateAndGeoLocation: function(date, lat, lng) {
            console.log(date)
			return [
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
		}	
	}
}

export default eventsService