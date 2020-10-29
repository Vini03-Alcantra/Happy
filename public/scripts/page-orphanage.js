const options = {
    draggin: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create and add marker 
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// create map
const map = L.map('mapid', options).setView([lat, lng], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

L.marker([lat, lng], {icon})
    .addTo(map)


/*Image Gallery*/

function selectImage(event){
    const button = event.currentTarget;
    console.log(button.children)
    
    // remover todas as classes .active
    const buttons = document.querySelectorAll(".image button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //Atualizar o container da imagem
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img")

    imageContainer.src = image.src;

    //adicionar a classe .active para este botao
    button.classList.add('active')
}