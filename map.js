// Initialize and add the map
function initMap() {
  // Location coordinates
  var location = {lat: 40.7128, lng: -74.0060};
  // Create a map object and specify the DOM element for display
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: location
  });
  // Add a marker at the location
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
