function getAPIdata() {
	
	var url = "https://api.nasa.gov/planetary/apod?api_key=yw0GWkucb0FrsRarK5QItfWGQ9WaFb8ge4jnmD8E";
	var apiKey ="yw0GWkucb0FrsRarK5QItfWGQ9WaFb8ge4jnmD8E";

	
	// get current weather
	fetch(request)	
	
	// parse response to JSON format
	.then(function(response) {
		return response.json();
	})
	
	// do something with response
	.then(function(response) {
		// show full JSON object
		console.log(response);
		//document.getElementById('weather').innerHTML = response.weather[0].description;
	})
	// catch error
	.catch(function (error) {
		console.log('Request failed', error);
	});
}

// init data stream
getAPIdata();