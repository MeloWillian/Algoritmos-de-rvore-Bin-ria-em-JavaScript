// BFS
const criarGrafoBFS = () => {
    let listaAdjacencia = new Map();
  
    const adicionarVertice = vertice => {
      listaAdjacencia.set(vertice, listaAdjacencia.get(vertice) || []);
      return listaAdjacencia; 
    };
  
    const adicionarAresta = (v1, v2) => {
        const novaListaAdjacencia = new Map(listaAdjacencia);
        novaListaAdjacencia.get(v1).push(v2);
        novaListaAdjacencia.get(v2).push(v1);
        return novaListaAdjacencia;
    }
  
  
    const bfs = (inicio, grafo = listaAdjacencia) => {
      const visitados = new Set();
      const fila = [inicio];
      visitados.add(inicio);
      const resultado = [];
  
      while (fila.length) {
        const vertice = fila.shift();
        resultado.push(vertice);
  
        (grafo.get(vertice) || []).forEach(vizinho => {
          if (!visitados.has(vizinho)) {
            visitados.add(vizinho);
            fila.push(vizinho);
          }
        });
      }
      console.log(resultado.join(', '));
    };
  
    return { adicionarVertice, adicionarAresta, bfs };
  };
  
  module.exports = criarGrafoBFS; // Exporta a função construtora