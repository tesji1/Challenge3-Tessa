function getAPIdata() {

  var url = "https://api.openweathermap.org/data/2.5/weather";
  var apiKey ="0089d8db29e8e557160590c69e891db3";
  var city = "florida";

  // construct request
  var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
  
  // get current weather
  fetch(request)
  
  // parse to JSON format
  .then(function(response) {
    return response.json();
  })
  
  // render weather per day
  .then(function(response) { //iets met jason format aan het doen
    // render weatherCondition
    onAPISucces(response);  
  })
  
  // catch error
  .catch(function (error) {
    onAPIError();
  });
}

// start weather function

function onAPISucces(response) {
  // get type of weather in string format
  var type = response.weather[0].description;

  // get temperature in Celcius
  var degC = Math.floor(response.main.temp - 273.15);

  // render weather in DOM
  var weatherBox = document.getElementById('weather2');
  weatherBox.innerHTML = degC + "&#176;C <br>" + type;
}


function onAPIError() {
  console.error('Request failed', error);
  var weatherBox = document.getElementById('weather2');
  weatherBox.className = 'hidden'; // als die niet doet wordt het weer niet getoont
}
// einde weather //

// init data stream
getAPIdata();

// MAP SHOW 
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

// on page load show map
document.onload = function() {
	initMap();
};


// Variablen map en marker
var myMap;
var marker;

// init map
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
			lat: 28.5728722, 
			lng: -80.6489808
		},
		zoom: 12,
		clickableIcons: false,

		styles: myStyles 
	};


	// create map and add to page
	myMap = new google.maps.Map(document.getElementById('map'), mapOptions);




// info window central space center
   var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Kennedy Space Center</h1>'+
            '<img src="assets/images/logo-kennedy-space.png" alt="Kennedy space">'+
            '<div id="bodyContent">'+
            '<p><b>Kennedy Space Center</b>' +
            ' Het Kennedy Space Center is de lanceerbasis '+
            'ruimtevaartindustriecomplex van NASA bij Cape Canaveral op Merritt  '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            'Island in Florida. Vanaf deze lanceerbasis werden in het verleden de '+
            'Apollo-vluchten voorbereid'+
            '<img src="assets/images/kennedy-space.jpg" alt="Kennedy space">'+
            '<p>Attribution: Kennedy Space Center, <a href="http://www.spacex.com/">'+
            'http://www.spacex.com/</a> '+
            'Lees de website voor meer informatie.</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 200
        });

// Marker central space central
    var marker = new google.maps.Marker({
      position: {
        lat: 28.5728722, 
        lng: -80.6489808,
      },
      map: myMap,
      animation: google.maps.Animation.BOUNCE,
      title: 'Kenny Space Central',
      icon: 'assets/images/space-station.png'
      });
      marker.addListener('click', function() {
        infowindow.open(myMap, marker);
      });

  // create a marker for the airport
  var AirportMarker = new google.maps.Marker({
    position: {
      lat: 28.614458, 
      lng: -80.694108,
    },
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    title: 'Airport',
    icon: 'assets/images/landing.png'
  });


// info window for airportMarker when click 
     var contentStringAirport = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">NASA shuttle landing facility</h1>'+
            '<div id="bodyContent">'+
            '<p><b>NASA shuttle landing facility</b>' +
            ' De Shuttle Landing Facility is een vliegveld dat gelegen is  '+
            'bij het stadje Merritt Island in Brevard County in de Amerikaanse staat Florida. '+
            '<img src="assets/images/nasa.jpEg" alt="Kennedy space">'+

            '<p>Attribution: Kennedy Space Center, <a href="http://www.spacex.com/">'+
            'http://www.spacex.com/</a> '+
            'Lees de website voor meer informatie.</p>'+
            '</div>'+
            '</div>';

        var infowindowAirport = new google.maps.InfoWindow({
          content: contentStringAirport,
          maxWidth: 200
        });

//marker airportMarker with window when click
    var AirportMarker = new google.maps.Marker({
      position: {
        lat: 28.614458, 
        lng: -80.694108,
      },
      map: myMap,
      animation: google.maps.Animation.BOUNCE,
      title: 'Airport',
      icon: 'assets/images/landing.png'
      });
      AirportMarker.addListener('click', function() {
        infowindowAirport.open(myMap, AirportMarker);
      });

    // create a marker for the airport Melbourne
  var AirportMarkerMelbourne = new google.maps.Marker({
    position: {
      lat: 28.1025235, 
      lng: -80.64536750000002,
    },
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    title: 'Melbourne international Airport',
    icon: 'assets/images/landing.png'
  });

      // create a marker for the airport Merrit
  var AirportMarkerMerrit = new google.maps.Marker({
    position: {
      lat: 28.3424508, 
      lng: -80.68894339999997,
    },
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    title: 'Merritt Island Airport-COI',
    icon: 'assets/images/landing.png'
  });


    


}



      




/**
 * Fetch API data
 */
function getAPIdataa() {
	
	var url = "https://api.openweathermap.org/data/2.5/forecast";
	var apiKey ="0089d8db29e8e557160590c69e891db3";
	var city = "florida";

	// construct request
	var requestt = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get weather forecast
	fetch(requestt)

	// parse to JSON format
	.then(function(response) {
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {

		// render weatherCondition
		onAPISuccess(response);
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
function onAPISuccess(response) {

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
getAPIdataa();


// opent 5 dagen weersverwachting met eenn
function myDing() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}





