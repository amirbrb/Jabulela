/*eslint-disable*/
import date from 'date-and-time';
const dateParser = {
	methods: {
		parseDate: function(d, format){
			return date.format(d, format);
		}	
	}
}

export default dateParser