exports.getCountryCode = function(name) {

	var countryCode = 0;

	switch(name) {
		case 'USA':
			countryCode = '001';
			break;
		case 'India':
			countryCode = 91;
			break;

		default: 
			countryCode = 0;
			break;
	} 
	return countryCode;
};


exports.getDate = function(format) {

	return new Date();
};

exports.getAppName = function() {
	
}