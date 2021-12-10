/**
 * Arquivo: Responsável pelo tratamento das informações, lidando com regras de negócio e contato com o banco de dados ( no nosso caso um array de objetos) .
 *
 */

// 19°)
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

// 20°)
const getVagasService = () => blueVagas;

// OU

// const getVagasService = () => {
//   return blueVagas;
// };

// 21°) Versão reduzida pois só possui um retorno
const getVagasByIdService = (idParam) => {
  return blueVagas.find((vaga) => vaga.id == idParam);
};

// OU

// const getVagasByIdService = (idParam) => {
//   return blueVagas.find((vaga) => {
//     return vaga.id == idParam;
//   });
// };

// 23°) Cadastra uma nova vaga(obj) na lista blueVagas
const addVaga = (newVaga) => {
  // Monto um id falso para a minha nova vaga
  const newId = blueVagas.length + 1;
  newVaga.id = newId;
  console.log(newVaga);
  // Add essa nova vaga no array
  blueVagas.push(newVaga);
  return newVaga;
};

// 27°) Vai procurar um objeto de acordo com seu id e trocar os seus valores
const putVaga = (idParam, vagaEdit) => {
  // // Criamos o campo id dentro do objeto para ser substituid
  // vagaEdit["id"] = parseInt(id);
  // const index = id - 1;
  // // Busco o item na lista de acordo com o seu index
  // blueVagas[index] = vagaEdit;
  // return vagaEdit;

  // Busco o indece da vaga que ele acha com id que estou passando
  const index = blueVagas.findIndex((vaga) => vaga.id == idParam);
  // Verifico se realmente encontrou um indice valido na lista
  if (index >= 0) {
    // SPREAD OPERATOR ...
    // Faz um espelho da vaga na lista e um espelho da vaga editada e junta as duas trocando apenas o que é necessario
    blueVagas[index] = {
      ...blueVagas[index],
      ...vagaEdit,
    };
    // Retornamos um boleano true para o controller podet saber que a edição foi feita com sucesso.
    return true;
  } else {
    console.log("Não existe vaga com esse ID");
    // Retornamos um boleano false para o controller podet saber que a edição teve um erro.
    return false;
  }
};

// 29°)
const deleteVaga = (idParam) => {
  const index = blueVagas.findIndex((vaga) => vaga.id == idParam);
  // startnumber = qual a posição que deve ser iniciada a exclusao
  // deleCount = quantidade de items para ser excluido
  const vagaExcluida = blueVagas[index];
  blueVagas.splice(index, 1);
  return vagaExcluida;
};

// 18°)
module.exports = {
  getVagasService,
  getVagasByIdService,
  addVaga,
  putVaga,
  deleteVaga,
};
