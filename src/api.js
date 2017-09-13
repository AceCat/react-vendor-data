var axios = require('axios');

module.exports = {
	fetchDescendingPaymentAmt: function(){
		var URIquery = window.encodeURI('https://data.cityofchicago.org/resource/rjgc-4h37.json?$order=amount DESC');
		return axios.get(URIquery)
		.then(function (response) {
			return response.data
		});
	},

	fetchDescendingVendorAmt: function(){
		var URIquery = window.encodeURI('https://data.cityofchicago.org/resource/rjgc-4h37.json?$query=SELECT vendor_name, SUM(amount) AS total GROUP BY vendor_name |> SELECT total, vendor_name ORDER BY total DESC');
		return axios.get(URIquery)
		.then(function (response) {
			return response.data
		});
	}
};