// importar libs
const express = require('express');

//iniciando o express
const server = express();

// criar uma rota
server.get('/', () => {
    console.log('Hello World')
})

//ligar o servidor 
server.listen(5500)