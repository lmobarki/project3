function init(){
	//alert('it works');
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(41.876, -87.628);
	var mapOptions = {
		center: myLocation,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.HYBRID,
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
	
	var polygonCoordinates = [
        { lat: 41.877, lng: -87.629 },
        { lat: 41.877, lng: -87.627 },
        { lat: 41.875, lng: -87.627 },
        { lat: 41.875, lng: -87.629 },
    ];

    polygon = new google.maps.Polygon({
        paths: polygonCoordinates,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: myMap
    });

  
    window.togglePolygon = function () {
        if (polygon.getMap()) {
            polygon.setMap(null);
        } else {
            polygon.setMap(myMap);
        }
    }

}

google.maps.event.addDomListener(window, 'load', init);

  

