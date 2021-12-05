/**
 * Arquivo: Local onde vai ficar as rotas da aplicação ou seja os Endpoint [Get/Post/Put/Delete]
 *
 */

// 8°) Importo o express para poder trabalhar com as rotas...
const express = require("express");

// 9°) Inicializar o módulo de rotas do express (mostra que aqui é localde rotas)
const router = express.Router();

// 15°) Importo as funções do controller
const vagasController = require("../controllers/vagas.controller");

// 16°) [GET] /vagas = Retorna uma lista de vagas
router.get("/", vagasController.getVagas);

// 17°) [GET] /vagas/{id} = retorna uma vaga de acordo com o seu id
router.get("/:id", vagasController.getVagasById);

// 25°) [POST] /vagas/add = Adiciona uma nova vaga na nossa lista de acordo com o objeto recebido pelo Front
router.post("/add", vagasController.postVaga);

// 28°) [PUT] /vagas/edit/{id} = recebe uma vaga e um id do Front e atualiza essa vaga na nossa lista
router.put("/edit/:id", vagasController.putVaga);

// 31°) [PUT] /vagas/delete/{id} = recebe um id e exclui a vaga que tiver esse id da lista 
router.delete("/delete/:id", vagasController.deleteVaga);

// 10°) Exportas as rotas para serem utilizadas no index
module.exports = router;
