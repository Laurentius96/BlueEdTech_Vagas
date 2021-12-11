// 12°) Salvar a url do backend em uma variavel para ser ultiliza depois na hora da chamada da api
const apiUrl = "http://localhost:3000";

// 14°) Estou mapeando o elemento lista (<table></table>) do html.
const lista = document.getElementById("lista");

// 13°) Crio uma funcao onde é possivel realizar uma requisicao [GET] para a api
const getVagas = async () => {
  // FETCH - É usado para se comunicar via requisicao http (GET, POST, PUT, PATCH, DELETE);
  // Response - é a resposta se a chamada da api foi feita com sucesso (status 200);
  // FETCH quando nao passada configuracao e apenas a url ele faz uma chamada do tipo [GET];
  // const chamadaApi = fetch(`${apiUrl}/vagas`)
  // chamadaApi.then((response) => {
  //     console.log('RESPOSTA REQUISICAO', response);
  //     return response.json();
  // })
  // .then((vagas) => {
  //     console.log('RESPOSTA DADOS JSON', vagas);
  // })

  const response = await fetch(`${apiUrl}/vagas`);
  const vagas = await response.json();

  vagas.map((vaga) => {
    lista.insertAdjacentHTML(
      "beforeend",
      `
            <tr>  
                <th scope="row">${vaga.id}</td>
                <td>${vaga.empresa}</td>
                <td>${vaga.oportunidade}</td>
                <td>${vaga.tipo}</td>
                <td>${vaga.salario}</td>
            </tr>
        `
    );
  });
};

getVagas();

// 16°)
const escolherVaga = async () => {
  // Buscando o que o usuario digitou no input
  const idDigitado = document.getElementById("idVaga").value;
  // Fazendo a chamdada para a api /vagas/{id} para pegar a vaga individual
  const response = await fetch(`${apiUrl}/vagas/${idDigitado}`);
  // Salvo o objeto retornado pelo backend;
  const vaga = await response.json();

  // Mapeando a tabela do html e inserindo uma vaga dentro
  document.getElementById("vaga").insertAdjacentHTML(
    "beforeend",
    `
        <tr>
            <th scope="row">${vaga.id}</td>
            <td>${vaga.empresa}</td>
            <td>${vaga.oportunidade}</td>
            <td>${vaga.tipo}</td>
            <td>${vaga.salario}</td>
        </tr>
    `
  );
};

// 3°) [POST] que vai enviar os dados do front-ent para o backend
const postVaga = async () => {
  // mapear os imputs com os dados que o usuário digitou
  const empresa = document.getElementById("empresa").value;
  const oportunidade = document.getElementById("oportunidade").value;
  const tipo = document.getElementById("tipo").value;
  const salario = document.getElementById("salario").value;
  console.log(empresa, oportunidade, tipo, salario);

  const vaga = {
    empresa,
    oportunidade,
    tipo,
    salario,
  };

  console.log(vaga);

  // Faz a chamada para a api com alguma configurações...
  const response = await fetch(`${apiUrl}/vagas/add`, {
    method: "POST",
    //
    headers: {
      "Content-Type": "application/json",
    },
    // JSON stringify = transforma um objeto/array JS em um JSON string...
    body: JSON.stringify(vaga),
  });
  const data = await response.json();
  alert(data.message);

  lista.innerHTML = " ";
  getVagas();
  limpaCampos();
 
};

// 4°) Função para limpar o texto digitado no campo de cadastro
const limpaCampos = () => {
  document.getElementById("empresa").value = " ";
  document.getElementById("oportunidade").value = " ";
  document.getElementById("tipo").value = " ";
  document.getElementById("salario").value = " ";
};