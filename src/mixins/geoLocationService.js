/*eslint-disable*/
const geoLocationService = {
	methods: {
		locatePosition: function (callback) {
			navigator.geolocation.getCurrentPosition(callback)
		}
	}
}

export default geoLocationService