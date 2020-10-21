// importar libs
const express = require('express');

//iniciando o express
const server = express();

// criar uma rota
server.get('/', (request, response) => {
    return response.send("Olá sou o back end")
})

//ligar o servidor 
server.listen(5500)