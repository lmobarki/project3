function initMap() {
  // Coordinates for Illinois Institute of Technology (IIT) library
  var iitLibrary = { lat: 41.8358, lng: -87.6270 };

  // Create a map centered at IIT library
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: iitLibrary
  });

  // Add a marker for IIT library
  var marker = new google.maps.Marker({
    position: iitLibrary,
    map: map,
    title: "IIT Library",
  });
}


