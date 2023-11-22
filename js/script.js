function init(){
	//alert('it works');
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(41.876, -87.628);
	var mapOptions = {
		center: myLocation,
		zoom: 18,
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

    var zoomControlDiv = document.getElementById('zoom-control');
    var zoomInButton = document.createElement('div');
    zoomInButton.innerHTML = '+';
    zoomInButton.className = 'custom-control';
    zoomControlDiv.appendChild(zoomInButton);

    var zoomOutButton = document.createElement('div');
    zoomOutButton.innerHTML = '-';
    zoomOutButton.className = 'custom-control';
    zoomControlDiv.appendChild(zoomOutButton);

    google.maps.event.addDomListener(zoomInButton, 'click', function () {
        myMap.setZoom(myMap.getZoom() + 1);
    });

    google.maps.event.addDomListener(zoomOutButton, 'click', function () {
        myMap.setZoom(myMap.getZoom() - 1);
    });

}

google.maps.event.addDomListener(window, 'load', init);


  

