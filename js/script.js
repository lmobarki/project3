function init(){
	//alert('it works');
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(41.876, -87.628);
	var mapOptions = {
		center: myLocation,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
		icon:'images/bboo.png'
	});

	var contentString = '<h1>Harold Washington Library</h1><p> The Harold Washington Library Center is the central library for the Chicago Public Library System.</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});


}

google.maps.event.addDomListener(window, 'load', init);

 // Add a search box to the map
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Search...';
    input.className = 'search-box';
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    const searchBox = new google.maps.places.SearchBox(input);

    // Bias the SearchBox results towards the current map's viewport
    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });

  

