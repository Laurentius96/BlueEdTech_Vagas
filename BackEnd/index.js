// Server (API)

// 1°) Importar o express para que seja possivel utilizar as suas funções na aplicação 
const express = require('express');

// 2°) Inicializar o express no nosso arquivo JavaScript para ele posso assumir as funções do express
const app = express();

// 3°) JSON - JavaScript Object Notation 
// Falo para o express trabalhar com middleware de Json para trabalharmos com o formato JSON. 
app.use(express.json());

// 4°) API - Forma de comunicação entre sistemas que contem endereços (End Points)
// API REST - Permite o uso GET/POST/PUT/DELETE
// Criar um endpoit para retomar um msg para o cliente 
app.get('/', (req, res) => {
    // REQ - (RESQUEST/REQUISIÇÃO) --- Vem do Cliente
    // RES - (RESPONSE/RESPOSTA) ----- Volta para o Cliente
    res.send('Olá Blumers!');
});

//[GET] /vagas - retornar a lista de vagas


// 5°) Definir a porta que meu Back irá executar
const port = 3000;

// 6°) Inicializa o servidor na seguinte porta:
app.listen(port, () => {
    console.log(`App Rodando na porta ${port}`);
});

