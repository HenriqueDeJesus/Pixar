// Função para exibir filmes
function exibirFilmes() {
    let filmesContainer = document.querySelector("#filmes .filmes-container");
    let filmesHTML = "";

    for (let filme of dados) {
        filmesHTML += `
            <div class="filme">
                <img src="${filme.imagem}" alt="${filme.titulo}">
                <h3>${filme.titulo}</h3>
                <p class="descricao">${filme.descricao}</p>
                <a href="${filme.link}" target="_blank">Mais informações</a>
            </div>
        `;
    }

    // Inserir os filmes na seção
    filmesContainer.innerHTML = filmesHTML;

    // Adicionar event listeners para os botões de rolagem
    document.getElementById('scroll-left').addEventListener('click', () => {
        filmesContainer.scrollBy({ left: -250, behavior: 'smooth' });
    });

    document.getElementById('scroll-right').addEventListener('click', () => {
        filmesContainer.scrollBy({ left: 250, behavior: 'smooth' });
    });
}

// Função para exibir personagens
function exibirPersonagens() {
    let personagensContainer = document.querySelector(".personagens-container");
    let personagensHTML = "";

    for (let personagem of personagens) {
        personagensHTML += `
            <div class="personagem">
                <img src="${personagem.imagem}" alt="${personagem.nome}">
                <h3>${personagem.nome}</h3>
                <p class="descricao">${personagem.descricao}</p>
            </div>
        `;
    }

    // Inserir os personagens na seção
    personagensContainer.innerHTML = personagensHTML;

    // Adicionar event listeners para os botões de rolagem
    document.getElementById('scroll-left-personagens').addEventListener('click', () => {
        personagensContainer.scrollBy({ left: -250, behavior: 'smooth' });
    });

    document.getElementById('scroll-right-personagens').addEventListener('click', () => {
        personagensContainer.scrollBy({ left: 250, behavior: 'smooth' });
    });
}

// Chamando a função de exibição de personagens
window.onload = function () {
    exibirFilmes();
    exibirPersonagens();
};

// Função de pesquisa
function pesquisar() {
    let query = document.getElementById("campo-pesquisa").value.toLowerCase(); // Obter o valor da pesquisa
    let filmesContainer = document.querySelector("#filmes .filmes-container");
    let personagensContainer = document.querySelector("#personagens .personagens-container");

    let filmesHTML = "";
    let personagensHTML = "";

    // Filtrar filmes
    for (let filme of dados) {
        if (filme.titulo.toLowerCase().includes(query) || filme.tags.toLowerCase().includes(query) || filme.descricao.toLowerCase().includes(query)) {
            filmesHTML += `
                <div class="filme">
                    <img src="${filme.imagem}" alt="${filme.titulo}">
                    <h3>${filme.titulo}</h3>
                    <p class="descricao">${filme.descricao}</p>
                    <a href="${filme.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    // Filtrar personagens
    for (let personagem of personagens) {
        if (personagem.nome.toLowerCase().includes(query) || personagem.filme.toLowerCase().includes(query) || personagem.descricao.toLowerCase().includes(query)) {
            personagensHTML += `
                <div class="personagem">
                    <img src="${personagem.imagem}" alt="${personagem.nome}">
                    <h3>${personagem.nome}</h3>
                    <p class="descricao">${personagem.descricao}</p>
                </div>
            `;
        }
    }

    // Exibir filmes e personagens filtrados
    filmesContainer.innerHTML = filmesHTML || "<p>Nenhum filme encontrado.</p>";
    personagensContainer.innerHTML = personagensHTML || "<p>Nenhum personagem encontrado.</p>";

    // Mostrar mensagem geral se ambos estiverem vazios
    if (!filmesHTML && !personagensHTML) {
        filmesContainer.innerHTML = "<p>Nenhum resultado encontrado.</p>";
        personagensContainer.innerHTML = "";
    }
}
