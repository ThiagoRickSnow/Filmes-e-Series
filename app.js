// Seleciona o container onde os filmes serão exibidos
const resultadosFilmes = document.querySelector('.resultados-filmes');

// Função para criar os elementos de cada filme
function exibirFilmes(filmes) {
    resultadosFilmes.innerHTML = ''; // Limpa os resultados anteriores
    let contador = 0; // Inicializa um contador para gerar classes únicas
  
    filmes.forEach(filme => {
      // Cria um elemento div para o filme
      const filmeDiv = document.createElement('div');
      // Gera uma classe única usando o contador
      const classeUnica = `filme-${contador}`;
      filmeDiv.classList.add(classeUnica);
  
      // Insere o título, sinopse, gênero, link do trailer e ano
      filmeDiv.innerHTML = `
        <h2>${filme.titulo}</h2>
        <p><strong>Sinopse:</strong> ${filme.sinopse}</p>
        <p><strong>Gênero:</strong> ${filme.genero}</p>
        <p><strong>Ano:</strong> ${filme.ano}</p>
        <a href="${filme.trailer}" target="_blank">Assistir Trailer</a>
      `;
  
      resultadosFilmes.appendChild(filmeDiv);
      contador++;
    });
  }

// Seleciona o botão de pesquisa e o campo de pesquisa
const btnPesquisar = document.getElementById('btnPesquisar');
const campoPesquisa = document.getElementById('pesquisa');

// Função de pesquisa
function realizarPesquisa() {
    const pesquisa = campoPesquisa.value.toLowerCase().trim(); // Remove espaços extras e converte para minúsculas

    // Verifica se o campo está vazio
    if (pesquisa === "") {
        return []; // Se estiver vazio, retorna um array vazio
    }

    const filmesFiltrados = filmes.filter(filme => 
        Object.values(filme).some(valor => 
            typeof valor === 'string' && valor.toLowerCase().includes(pesquisa)
        )
    );

    return filmesFiltrados; // Retorna os filmes filtrados
}

// Adiciona o event listener ao botão de pesquisa
btnPesquisar.addEventListener('click', realizarPesquisa);

// Adiciona o event listener para o campo de pesquisa
campoPesquisa.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        realizarPesquisa();
    }
});
