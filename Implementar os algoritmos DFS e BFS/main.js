const criarGrafoBFS = require('./bfs');
const criarGrafoDFS = require('./dfs');

const cidades = [
  "João Pessoa", "Campina Grande", "Santa Rita", "Patos", "Bayeux", "Sousa", "Cabedelo", "Cajazeiras", "Guarabira",
  "Sapé", "Mamanguape", "Queimadas", "São Bento", "Monteiro", "Pombal", "Catolé do Rocha", "Alagoa Grande",
  "Pedras de Fogo", "Lagoa Seca", "Itabaiana", "Solânea", "Mari", "Araruna", "Princesa Isabel", "Conde", "Areia",
  "Bananeiras", "Alhandra", "Cuité", "Rio Tinto", "Picuí", "São João do Rio do Peixe", "Taperoá", "Juripiranga",
  "Teixeira", "Remígio", "Belém", "Nova Floresta", "Boqueirão", "Esperança"
];

// --- Grafo BFS
const grafoBFS = criarGrafoBFS();
cidades.forEach(cidade => grafoBFS.adicionarVertice(cidade));
let grafoAtualBFS = grafoBFS.adicionarAresta("João Pessoa", "Campina Grande");
grafoAtualBFS = grafoBFS.adicionarAresta("Campina Grande", "Queimadas", grafoAtualBFS);
grafoAtualBFS = grafoBFS.adicionarAresta("João Pessoa", "Bayeux", grafoAtualBFS);


grafoBFS.bfs("Esperança", grafoAtualBFS);


// --- Grafo DFS
const grafoDFS = criarGrafoDFS();
cidades.forEach(cidade => grafoDFS.adicionarVertice(cidade));

grafoDFS.adicionarAresta("João Pessoa", "Campina Grande");
grafoDFS.adicionarAresta("Campina Grande", "Queimadas");
grafoDFS.adicionarAresta("João Pessoa", "Bayeux");

grafoDFS.dfs("Esperança");