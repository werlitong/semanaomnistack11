const express = require('express');

const app = express();

app.get('/', (request,response) => {
    //return response.send("Hello World")
    return response.json({
        evento: 'Semana OminiStack 11.0',
        aluno: 'Werliton Gomes'
    })
});

app.listen(3333);
