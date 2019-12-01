/*eslint-disable*/
import moment from 'moment';
const dateParser = {
	methods: {
		parseDate: function(d, format){
			return moment(d).format(format);
		}	
	}
}

export default dateParser