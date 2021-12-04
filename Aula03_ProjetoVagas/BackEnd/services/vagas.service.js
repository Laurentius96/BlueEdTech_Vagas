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

// 18°)
module.exports = {
  getVagasService,
  getVagasByIdService,
};
