# 🎬 Projeto Filmes

Este é um projeto simples de listagem e busca de filmes feito com **HTML**, **CSS** e **JavaScript**. Ele exibe uma lista de filmes com imagem, título, duração e sinopse, e permite pesquisar por nome. Ao clicar em um filme, o trailer ou vídeo é aberto em uma nova aba.

## 📸 Prévia

https://darwingaz.github.io/films-list/

## ⚙ Funcionalidades

- Listagem dinâmica de filmes usando JavaScript
- Busca em tempo real pelo nome do filme
- Abertura de trailers ou vídeos em nova aba
- Layout responsivo e moderno
- Mensagem "Nenhum filme encontrado" se a busca não retornar resultados

## 🛠 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Google Fonts


## 🧠 Como funciona

- Os dados dos filmes estão em um array `filmesJson` dentro do arquivo `filmes.js`.
- Cada item do array é usado para clonar um modelo de filme e preencher com os dados.
- O campo de busca filtra dinamicamente os filmes exibidos.
- O clique no item abre o vídeo em uma nova aba.

### Exemplo de estrutura do `filmesJson`:

```js
const filmesJson = [
  {
    titulo: "Matrix",
    duracao: "2h 30min",
    sinopse: "Um hacker descobre a verdade sobre sua realidade.",
    imagem: "caminho/para/imagem.jpg",
    video: "https://link-do-video.com"
  },
  // outros filmes...
];
