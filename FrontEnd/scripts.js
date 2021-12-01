// Salvar a URL do back-end em uma variavel para ser utilizada depois na hora da chamada da api
const apiUrl = "http://localhost:3000";

/// estou mapeando o elemento lista (<table></table>) do html.
const lista = document.getElementById("lista");

// Crio um função onde é possivel realizar uma requisição [GET] para a api
const getVagas = () => {
  // FETCH - É usado para se comunicar via requisição http (GET, POST, PUT, PACH, GELETE);
  // Response - é a resposta se a chamada da api foi feita com sucesso (status 200);
  // FETCH quando não passada configuração e apenas a url ele faz uma chamada do tipo [GET];

  //   const chamadaApi = fetch("${apiUrl}/vagas");
  //   chamadaApi.then((response) => {
  //     console.log("RESPOSTA REQUISICAO", response);
  //     return response.json;
  //   });
  //   .then((vagas)=>{
  //       console.log("RESPOSTA DADOS JSON",vagas);
  //   });

  const response = await fetch("${apiUrl}/vagas");
  const vagas = await response.json();
  vagas.map((vaga) => {
    lista.insertAdjacentHTML(
      "beforeend",
      `
    <tr>
        <td>${vaga.id}</td>
        <td>${vaga.empresa}</td>
        <td>${vaga.oportunidade}</td>
        <td>${vaga.tipo}/td>
        <td>${vaga.salario}</td>
    </tr>
  `
    );
  });
};

getVagas();

const escolherVaga = async () => {
  // Buscando o que o usuário digitou no input
  const idDigitado = document.getElementById("idVaga").value;
  // fazendo a chamada para a api /vagas/{id} para pegar a vaga individual
  const response = await fetch(`${apiUrl}/vagas/${idDigitado}`);
  //Salva o objeto retornado pelo back-end
  const vaga = await response.json();

  // mapeando a tabela do html e inserindo uma vaga dentro
  document.getElementById("vaga").insertAdjacentHTML(
    "beforeend",
    `
  <tr>
  <td>${vaga.id}</td>
  <td>${vaga.empresa}</td>
  <td>${vaga.oportunidade}</td>
  <td>${vaga.tipo}</td>
  <td>${vaga.salario}</td>
</tr>
`
  );
};
