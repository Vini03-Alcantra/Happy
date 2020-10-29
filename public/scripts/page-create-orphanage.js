// create map
const map = L.map('mapid').setView([-3.7581102,-38.5694252], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],    
})

let marker;

map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

//add label photos 
function addPhotoField(){
    // pegar o container de fotos #imagens
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelector('.new-upload');
    //realizar o clone da última imagem adicionada    
    let newFieldContainer = fieldsContainer.cloneNode(true)
    //verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]
    if (input.value == "") {
        return 
    }
    // Limpar o campo antes de adicionar ao container de imagens
    input.value = ""
    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)    
}

function deleteField(event){
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if (fieldsContainer.length < 2) {        
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove();

}


function toggleSelect(event){
    //retirar a classe .active dos botões
    document.querySelectorAll('.button-select button')
    .forEach((button) => {
        button.classList.remove('button-active')
    })

    /// colocar a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('button-active')
        
    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
    

}

function validate(event) {
    //validar se lat e lng estão preenchidos
    //event.preventDefault()
}