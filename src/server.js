// importar libs
const express = require('express');
const path = require('path');

//iniciando o express
const server = express();

// criar uma rota
server
//utilizando os arquivos estáticos
.use(express.static('public'))
// criar uma rota
.get('/', (request, response) => {
    console.log(request.query)
    return response.sendFile(path.join(__dirname, 'views', 'index.html'));
})

//ligar o servidor 
server.listen(5500)