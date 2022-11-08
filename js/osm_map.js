// Creating map options
var mapOptions = {
    center: [38.003, 23.7915],
    zoom: 17,
}

var greenIcon = L.icon({
    iconUrl: 'img/misc/map-marker.png',
    iconSize:     [30, 38], // size of the icon
    iconAnchor:   [15, 19] // point of the icon which will correspond to marker's location
});

// Creating a map object
var map = new L.map('map', mapOptions);

var marker = L.marker([38.003, 23.7915], {icon: greenIcon}).addTo(map);

// Creating a Layer object
var layer = new L.TileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png').addTo(map);

var label_layer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png').addTo(map);

