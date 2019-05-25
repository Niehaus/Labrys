window.addEventListener('load', function() {
  var map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
  });

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibmllaGF1cyIsImEiOiJjancxOG5qeDcwNGZlNDVvNXEyOGpwaWEzIn0.wxetZ_BKGpdp4JvOqttX4A'
  }).addTo(map);
})
