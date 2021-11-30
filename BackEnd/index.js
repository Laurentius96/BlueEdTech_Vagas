// Server (API)

// 1°) Importar o express para que seja possivel utilizar as suas funções na aplicação
const express = require("express");

// 2°) Inicializar o express no nosso arquivo JavaScript para ele posso assumir as funções do express
const app = express();

// 7°)
const blueVagas = [
  {
    id: 1,
    empresa: "Blue",
    salario: 3000,
    oportunidade: "Front-End Jr",
    tipo: "estágio",
  },
  {
    id: 2,
    empresa: "Google",
    salario: 10000,
    oportunidade: "Front-End Jr",
    tipo: "CLT",
  },
  {
    id: 3,
    empresa: "Facebook",
    salario: 20000,
    oportunidade: "Full Stack Sr",
    tipo: "PJ",
  },
  {
    id: 4,
    empresa: "Amazon",
    salario: 15000,
    oportunidade: "Full Stack Pl",
    tipo: "CLT",
  },
];

// 3°) JSON - JavaScript Object Notation
// Falo para o express trabalhar com middleware de Json para trabalharmos com o formato JSON.
app.use(express.json());

// 4°) API - Forma de comunicação entre sistemas que contem endereços (End Points)
// API REST - Permite o uso GET/POST/PUT/DELETE
// Criar um endpoit para retomar um msg para o cliente
app.get("/", (req, res) => {
  // REQ - (RESQUEST/REQUISIÇÃO) --- Vem do Cliente
  // RES - (RESPONSE/RESPOSTA) ----- Volta para o Cliente
  res.send("Olá Blumers!");
});

// 8°) [GET] /vagas - retornar a lista de vagas
app.get("/vagas", (req, res) => {
  res.send(blueVagas);
});

// 9°) Endpoint[GET] /vagas/{id} - retornar para o cliente uma unica vaga de acordo com o seu id
app.get("/vagas/:id", (req, res) => {
  // Acessar o id via a requisição
  const idParam = req.params.id;
  // Buscar um item a lista de acordo com o seu id
  // Procuro na lista uma vaga que contenha o id igual ao que eu recebi via parametro
  const vagaEcontrada = blueVagas.find((vaga) => vaga.id == idParam);
  //envio para o front-end a vaga que foi encontrata
  res.send(vagaEcontrada);
});

// 5°) Definir a porta que meu Back irá executar
const port = 3000;

// 6°) Inicializa o servidor na seguinte porta:
app.listen(port, () => {
  console.log(`App Rodando na porta ${port}`);
});
