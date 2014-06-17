function initialize() {
    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(-25.363882,131.044922)
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    // Try HTML5 geolocation
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = new google.maps.LatLng(position.coords.latitude,
            position.coords.longitude);

            /*var infowindow = new google.maps.InfoWindow({
                map: map,
                position: pos,
                content: 'Te achei!'
            });*/

            map.setCenter(pos);
        }, function() {
            
        });
    }

    google.maps.event.addListener(map, 'click', function(e) {
        placeMarker(e.latLng, map);
    });
}

function placeMarker(position, map) {
    var marker = new google.maps.Marker({
        position: position,
        map: map
    });
    map.panTo(position);
}

google.maps.event.addDomListener(window, 'load', initialize);