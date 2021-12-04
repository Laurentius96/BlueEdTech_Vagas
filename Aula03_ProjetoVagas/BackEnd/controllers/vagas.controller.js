/**
 * Arquivo: Local onde vai ficar as guardadas as funções erão chamadas pelo route.js, como esse arquivo é responsável pelas respostas das requisições e o tratamento básico dos dados
 */

// 22°) Importo o service para poder ter aceeso as funções que cuidam dos dados
const vagasService = require("../services/vagas.service");

// 12°) Retorna um lista de vagas pre cadastradas para o front-end
const getVagas = (req, res) => {
  const vagas = vagasService.getVagasService();
  res.send(vagas);
};

// 13°) Retorna uma unica vaga de acordo com o seu id
const getVagasById = (req, res) => {
  // REQ = o que vem do Front para o Banck
  // RES = o que o back retorna para o front
  const id = req.params.id;
  const vaga = vagasService.getVagasByIdService(id);
  res.send(vaga);
};

// 14°) Exportando as funções para serem usadas nas rotas
module.exports = {
  getVagas,
  getVagasById,
};