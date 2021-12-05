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

// 24°) Ira cadastrar uma vaga de acordo com o objeto vindo do Front
const postVaga = (req, res) => {
  // Pegamos o objeto da requisição para ser cadastrado
  const vaga = req.body;
  // Enviando a vaga que recebeu via corpo de requisição para o serviço adicionar na lista
  const newVaga = vagasService.addVaga(vaga);
  res.send({
    message: `Vaga ${newVaga.oportunidade} na empresa ${newVaga.empresa} cadastrada com secesso!`,
  });
};

// 26°) Vai receber um objeto (body) e um id(param) para poder atualizar a vaga com o objeto de acordo com o seu id
const putVaga = (req, res) => {
  // Pego o parametro via requisição
  const idParam = req.params.id;
  // Pego o objeto recebido via requisição
  const vagaEdit = req.body;
  const edicao = vagasService.putVaga(idParam, vagaEdit);
  if (edicao) {
    res.send({ message: `A vaga foi editada com sucesso!` });
  } else {
    res
      .status(404)
      .send({ message: `Não foi eencontrado vaga com esse ID para editar.` });
  }
};

// 30°) Vai excluir um item da lista e devolver a msg de exclusao para o front-end
const deleteVaga = (req, res) => {
  const vagaExcluida = vagasService.deleteVaga(req.params.id);
  res.send(
    `A vaga ${vagaExcluida.oportunidade} da empresa ${vagaExcluida.empresa} excluida com sucesso.`
  );
};

// 14°) Exportando as funções para serem usadas nas rotas
module.exports = {
  getVagas,
  getVagasById,
  postVaga,
  putVaga,
  deleteVaga,
};
