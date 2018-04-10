
// on page load show map
document.onload = function() {
	initMap();
};

// init map
var myMap;

function initMap() {

	// initialize direction variables
	var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

	// set options for map 
	var mapOptions = {
		center: {
			lat: 52.07436, 
			lng: 4.32148
		},
		zoom: 15,
	};

	// create map and add to page
	myMap = new google.maps.Map(document.getElementById('map'), mapOptions);

	// set the map for the direction display 
	directionsDisplay.setMap(myMap);
	
	// call function to get the route
	calculateAndDisplayRoute(directionsService, directionsDisplay);

}

// function to get the route
function calculateAndDisplayRoute(directionsService, directionsDisplay) {

	var request = {
		origin: {lat: 52.073523005070804,lng: 4.315582827556108},
		destination: {lat: 52.07780591224763,lng: 4.30793048523662},
		travelMode: 'WALKING' //DRIVING, BICYCLING, TRANSIT, WALKING
	};

	directionsService.route(request, function(response, status) {
		if (status === 'OK') {
			directionsDisplay.setDirections(response); // display the route
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
}


