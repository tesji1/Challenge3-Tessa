
// on page load show map
document.onload = function() {
	initMap();
};

// init map
var myMap;

function initMap() {

	// set style for the map https://mapstyle.withgoogle.com/
	var myStyles =[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ff0000"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#ff8e56"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "transit.station.airport",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ff00c3"
      }
    ]
  },
  {
    "featureType": "transit.station.airport",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#ffc300"
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "transit.station.airport",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#fffd00"
      }
    ]
  },
  {
    "featureType": "transit.station.airport",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "weight": 6.5
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#58fefd"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
];

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
		clickableIcons: false,
		styles: myStyles 
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
		origin: {lat: 28.5728722,lng:  -80.6489808},
		destination: {lat: 28.614458,lng: -80.694108},
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


// API WEATHER 



/**
 * Fetch API data
 */
function getAPIdata() {
	
	var url = "http://api.openweathermap.org/data/2.5/forecast";
	var apiKey ="0089d8db29e8e557160590c69e891db3";
	var city = "Melbourne";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get weather forecast
	fetch(request)

	// parse to JSON format
	.then(function(response) {
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {

		// render weatherCondition
		onAPISucces(response);
	})
	
	// catch error
	.catch(function (error) {
		// onAPIError();
		console.error('Request failed', error);
	});
}

/**
 * Render weather listing
 */
function onAPISucces(response) {

	var weatherList = response.list;
	var weatherBox = document.getElementById('weather');

	for(var i=0; i< weatherList.length; i++){
		//console.log(weatherList[i].main.temp - 273.15);

		var dateTime = new Date(weatherList[i].dt_txt);
		var date = formDate(dateTime);
		var time = formTime(dateTime);
		var temp = Math.floor(weatherList[i].main.temp - 273.15);
		var iconUrl = 'http://openweathermap.org/img/w/'+weatherList[i].weather[0].icon+'.png';

		forecastMessage =  '<div class="forecastMoment">';
		forecastMessage +=   '<div class="date"> '+date+' </div>';
		forecastMessage +=	 '<div class="time"> '+ time +' </div>';
		forecastMessage +=	 '<div class="temp"> '+temp+'&#176;C </div>';
		forecastMessage +=	 '<div class="icon"> <img src="'+iconUrl+'"> </div>';
		forecastMessage += '</div>';

		weatherBox.innerHTML += forecastMessage;
	}
}

/**
 * Error
 */
function updateUIError() {
	var weatherBox = document.getElementById('weather');
	weatherBox.className = 'hidden'; 
}

/**
 * Format date
 */
function formDate(date) {
	var day = date.getDate();
	var month = date.getMonth() + 1;
	return day +'/'+ month;
}

/**
 * Format time
 */
function formTime(date) {
	var hours = date.getHours();
	if(hours<10){
		hours = '0'+hours;
	}
	var minutes = date.getMinutes();
	if(minutes < 10){
		minutes = '0'+ minutes;
	}
	return hours +':'+ minutes;
}

// init data stream
getAPIdata();



