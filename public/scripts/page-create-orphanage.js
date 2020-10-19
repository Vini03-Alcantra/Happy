// create map
const map = L.map('mapid').setView([-3.7581102,-38.5694252], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],    
})

L.marker([-3.7581102,-38.5694252], {icon})
    .addTo(map)
    .bindPopup(popup)    