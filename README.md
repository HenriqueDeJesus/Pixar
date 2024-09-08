# Mundo Pixar

Bem-vindo ao **Mundo Pixar**, uma aplicação web interativa que permite aos usuários explorar e descobrir informações sobre alguns dos filmes mais populares da Pixar e seus personagens icônicos.

## Descrição do Projeto

Este projeto é uma página web que apresenta uma seleção de filmes da Pixar, permitindo aos usuários visualizar detalhes sobre esses filmes e personagens relacionados. A aplicação conta com uma funcionalidade de pesquisa que facilita a busca por filmes ou personagens específicos.

## Funcionalidades

- **Exibição de Filmes da Pixar**: A aplicação exibe uma lista de filmes da Pixar, incluindo informações como título, descrição e imagem.
- **Exibição de Personagens**: Junto com os filmes, os personagens relacionados a esses filmes também são mostrados, cada um com seu nome e uma breve descrição.
- **Pesquisa Interativa**: Há uma barra de pesquisa na qual o usuário pode buscar por filmes ou personagens. Ao digitar, a aplicação filtrará e mostrará os resultados correspondentes.

## Como Utilizar

1. **Pesquisa**: Para pesquisar um filme ou personagem, basta digitar o nome na barra de pesquisa e clicar no botão "Pesquisar". Se o filme ou personagem existir no banco de dados, ele será mostrado na página.
2. **Navegação de Filmes e Personagens**: Use os botões de seta nas seções de "Filmes" e "Personagens" para rolar as opções horizontalmente e visualizar mais itens.
3. **Exploração**: Role a página para ver a lista completa de filmes e personagens e clique para obter mais informações.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da aplicação web.
- **CSS3**: Estilização e layout da página.
- **JavaScript**: Manipulação da DOM, pesquisa e funcionalidades interativas.
- **JSON**: Utilizado no `dados.js` para armazenar as informações dos filmes e personagens.

## Como Executar

Para visualizar a aplicação:

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/mundo-pixar.git

2. Abra o arquivo `index.html` em seu navegador.

3. Mo seu navegador devera aparecer essa tela que é a aplicação funcionando.
#
![filmes do projeto](/img_aplicacao/filmes.png)
#
![personagens do projeto](/img_aplicacao/personagens.png)
#
## Estrutura de Dados

### Filmes
Os filmes são armazenados no array `dados` dentro do arquivo `dados.js`. Cada filme tem as seguintes propriedades:

- **título**: Nome do filme.
- **descrição**: Resumo da história.
- **link**: URL de referência.
- **tags**: Gêneros e categorias associadas ao filme.
- **imagem**: Caminho da imagem do filme.

### Personagens
Os personagens estão no array `personagens` em `dados.js`, e cada personagem possui:

- **nome**: Nome do personagem.
- **descrição**: Uma breve descrição do personagem.
- **filme**: Filme ao qual o personagem pertence.
- **imagem**: Caminho da imagem do personagem.
