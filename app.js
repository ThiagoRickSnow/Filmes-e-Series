// Seleciona o container onde os filmes serão exibidos
const resultadosFilmes = document.querySelector('.resultados-filmes');

// Função para criar os elementos de cada filme
function exibirFilmes(filmes) {
    resultadosFilmes.innerHTML = ''; // Limpa os resultados anteriores
    if (filmes.length === 0) {
        resultadosFilmes.innerHTML = '<p class="no-results">Nenhum filme encontrado.</p>; 
// Mensagem caso não haja resultados
        return;
    }

    let contador = 0; // Inicializa um contador para gerar classes únicas
    filmes.forEach(filme => {
      const filmeDiv = document.createElement('div');
      const classeUnica = `filme-${contador}`;
      filmeDiv.classList.add(classeUnica);

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
    const pesquisa = campoPesquisa.value.toLowerCase().trim();

    // Verifica se a pesquisa contém apenas letras, números ou espaços
    const regex = /^[a-z0-9\s]{3,50}$/i;
    if (!regex.test(pesquisa)) {
        exibirFilmes([]); // Se o valor não for válido, exibe um array vazio
        return;
    }

    const filmesFiltrados = filmes.filter(filme => 
        Object.values(filme).some(valor => 
            typeof valor === 'string' && valor.toLowerCase().includes(pesquisa)
        )
    );

    exibirFilmes(filmesFiltrados); // Exibe os filmes filtrados
}

// Adiciona o event listener ao botão de pesquisa
btnPesquisar.addEventListener('click', function() {
    realizarPesquisa();
});

// Adiciona o event listener para o campo de pesquisa
campoPesquisa.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        realizarPesquisa();
    }
});