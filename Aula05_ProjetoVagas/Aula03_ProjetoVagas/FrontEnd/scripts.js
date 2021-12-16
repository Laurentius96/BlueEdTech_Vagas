// 12°) Salvar a url do backend em uma variavel para ser ultiliza depois na hora da chamada da api
const apiUrl = "http://localhost:3000";

/// 7°)
let modoEdicao = false;

/// 8°)
let idEdicao = 0;

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
                <td>
                <button class="btn btn-primary" onclick="editaVaga(${vaga.id})">Editar</button>
                <button class="btn btn-danger" onclick="deleteVaga(${vaga.id})">Deletar</button>
                </td>
            </tr>
        `
    );
  });
};

getVagas();

/// 6°)
const escolherVaga = async () => {
  /// Buscando o que o usuario digitou no input
  const idDigitado = document.getElementById("idVaga").value;
  /// Fazendo a chamdada para a api /vagas/{id} para pegar a vaga individual
  const response = await fetch(`${apiUrl}/vagas/${idDigitado}`);
  /// Salvo o objeto retornado pelo backend;
  const vaga = await response.json();

  /// Mapeando a tabela do html e inserindo uma vaga dentro
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

/// 3°) Ele mapeia os dados do formulario que o usuario digitou e envia o objeto criado para a sua funcao responsavel (seja edicao ou cadastro
const submitForm = async () => {
  /// mapear os inputs com os dados que o usuario digitou idependente se é edicao ou cadastro
  const empresa = document.getElementById("empresa").value;
  const oportunidade = document.getElementById("oportunidade").value;
  const tipo = document.getElementById("tipo").value;
  const salario = document.getElementById("salario").value;
  console.log(empresa, oportunidade, tipo, salario);

  /// monta o objeto para ser enviado para o backend
  const vaga = {
    empresa,
    oportunidade,
    tipo,
    salario,
  };
  console.log(vaga);

  /// JSON Stringfy = transforma um objeto/array js em um JSON string
  if (modoEdicao) {
    putVaga(vaga);
  } else {
    postVaga(vaga);
  }
};

/// 9°) [POST] http://localhost:3000/vagas/add - Recebe o objeto transforma em JSON e envia para a api atraves do metodo post
const postVaga = async (vaga) => {
  const response = await fetch(`${apiUrl}/vagas/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vaga),
  });
  const data = await response.json();
  alert(data.message);
  // faz a chamada para a api com algumas configuracoes****
  lista.innerHTML = "";
  getVagas();
  limpaCampos();
};

/// 10°)http://localhost:3000/vagas/edit/{id} - recebe o objeto transforma em json e envia para a api juntamente com o seu id para que possa ser edidato
const putVaga = async (vaga) => {
  const response = await fetch(`${apiUrl}/vagas/edit/${idEdicao}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vaga),
  });
  const data = await response.json();
  alert(data.message);
  // faz a chamada para a api com algumas configuracoes****
  lista.innerHTML = "";
  getVagas();
  limpaCampos();

  modoEdicao = false;
  idEdicao = 0;
};

/// 5°) Preenche os dados do formulario de acordo com a vaga encontrada no backend pelo seu id
const editaVaga = async (id) => {
  modoEdicao = true;
  idEdicao = id;

  /// Receber o id e atraves do id fazer uma chamdada para a api para buscar os dados de uma vaga por id
  const vaga = await getById(id);

  /// Popular os inputs com os valores recebidos da chamada
  document.getElementById("empresa").value = vaga.empresa;
  document.getElementById("oportunidade").value = vaga.oportunidade;
  document.getElementById("tipo").value = vaga.tipo;
  document.getElementById("salario").value = vaga.salario;
};

/// 6°) recebe um id e faz a chamada para a api e retorna o objeto encontrado
const getById = async (id) => {
  const response = await fetch(`${apiUrl}/vagas/${id}`);
  const vaga = await response.json();
  return vaga;
};

/// 4°) Função para limpar o texto digitado no campo de cadastro
const limpaCampos = () => {
  document.getElementById("empresa").value = " ";
  document.getElementById("oportunidade").value = " ";
  document.getElementById("tipo").value = " ";
  document.getElementById("salario").value = " ";
};
