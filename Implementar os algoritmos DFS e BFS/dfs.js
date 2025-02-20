// DFS - Versão "Iterativa" com pilha explícita
function criarGrafoDFS() {
    const listaAdjacencia = {};

    const adicionarVertice = vertice => {
        listaAdjacencia[vertice] = listaAdjacencia[vertice] || [];
    };

    const adicionarAresta = (vertice1, vertice2) => {
        listaAdjacencia[vertice1].push(vertice2);
        listaAdjacencia[vertice2].push(vertice1);
    };

    const dfs = inicio => {
        const visitados = new Set();
        const pilha = [inicio];
        const resultado = [];

        while (pilha.length) {
            const vertice = pilha.pop();

            if (!visitados.has(vertice)) {
                visitados.add(vertice);
                resultado.push(vertice);
                const vizinhos = listaAdjacencia[vertice] || [];

                for (let i = vizinhos.length - 1; i >= 0; i--) {
                    const vizinho = vizinhos[i];
                    if (!visitados.has(vizinho)) {
                        pilha.push(vizinho);
                    }
                }

            }
        }

        console.log(resultado.join(', '));
    };

    return { adicionarVertice, adicionarAresta, dfs };
}

module.exports = criarGrafoDFS; // Exporta a função construtora