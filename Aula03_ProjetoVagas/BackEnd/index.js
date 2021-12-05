// Server (API)

// 1°) Importar o express para que seja possivel utilizar as suas funções na aplicação
const express = require("express");

// 6°) Importamos a lib cors
const cors = require("cors");

// 2°) Inicializar o express no nosso arquivo JavaScript para ele posso assumir as funções do express
const app = express();

// 6.2°) CORS - permite a troca de recursos entre origens diferentes.
// Usando a middleware da lib cors
app.use(cors());

// 3°) JSON - JavaScript Object Notation
// Falo para o express trabalhar com middleware de Json para trabalharmos com o formato JSON.
app.use(express.json());

// 7°) Importa o arquivo de rotas
const vagasRouter = require("./routes/vagas.route");

// 11°) Falo para o Back-End usar as minhas rotas para o Endpoint /Vagas
app.use("/vagas", vagasRouter);

// 4°) Definir a porta que meu Back irá executar
const port = 3000;

// 5°) Inicializa o servidor na seguinte porta:
app.listen(port, () => {
  console.log(`App Rodando na porta ${port}`);
});
