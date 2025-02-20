class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


/* 1. Definição de Árvore usando o conceito de Grafos:
    Uma árvore é um grafo conexo acíclico (sem ciclos) e não direcionado.
    Em uma árvore, há exatamente um caminho entre quaisquer dois nós.
    Uma árvore binária é uma árvore em que cada nó tem no máximo dois filhos,
    geralmente referidos como filho esquerdo e filho direito.
 */

// 2. Escreva uma função que conte o numero de nós de uma Árvore Binaria
function contarNos(raiz) {
    if (raiz === null) {
        return 0;
    }
    return 1 + contarNos(raiz.left) + contarNos(raiz.right);
}


/* 3. Escreva uma função que conte o numero de nós não folhas de uma Árvore Binaria */

function contarNosNaoFolhas(raiz) {
    if (raiz === null || (raiz.left === null && raiz.right === null)) {
        return 0;
    }
    return 1 + contarNosNaoFolhas(raiz.left) + contarNosNaoFolhas(raiz.right);
}

/* 
4. Escreva uma função que conte o numero de nós folhas de uma Árvore Binaria
*/
function contarNosFolhas(raiz) {
    if (raiz === null) {
        return 0;
    }
    if (raiz.left === null && raiz.right === null) {
        return 1;
    }
    return contarNosFolhas(raiz.left) + contarNosFolhas(raiz.right);
}

/* 
5. Escreva uma função que calcule a altura de uma Árvore Binaria
*/
function calcularAltura(raiz) {
    if (raiz === null) {
        return -1; // Altura de uma árvore vazia é -1
    }
    return 1 + Math.max(calcularAltura(raiz.left), calcularAltura(raiz.right));
}


/* 6. Escreva uma função que busque um numero impar em uma Árvore Binaria NÃO ORDENADA */

function buscarNumeroImpar(raiz) {
    if (raiz === null) {
        return null;
    }
    if (raiz.value % 2 !== 0) {
        return raiz.value;
    }
    let resultadoEsquerda = buscarNumeroImpar(raiz.left);
    if (resultadoEsquerda !== null) {
        return resultadoEsquerda;
    }
    return buscarNumeroImpar(raiz.right);
}


/* 
7. Escreva uma função que busque o MAIOR numero em uma Árvore Binaria NÃO ORDENADA
 */
function buscarMaiorNaoOrdenada(raiz) {
    if (raiz === null) {
        return Number.NEGATIVE_INFINITY;
    }
    return Math.max(raiz.value, buscarMaiorNaoOrdenada(raiz.left), buscarMaiorNaoOrdenada(raiz.right));
}

/* 
8. Escreva uma função que busque o MAIOR numero em uma Árvore Binaria
 */
function buscarMaior(raiz) {
    return buscarMaiorNaoOrdenada(raiz);
}


/* 9. Escreva uma função que retorne TRUE se for uma Árvore Binaria e FALSE, caso contrario */

function verificarArvoreBinaria(raiz) {
    if (raiz === null) {
        return true;
    }
    if ((raiz.left !== null && typeof raiz.left.value !== 'number') || (raiz.right !== null && typeof raiz.right.value !== 'number')) {
        return false;
    }
    return verificarArvoreBinaria(raiz.left) && verificarArvoreBinaria(raiz.right);
}

/* 
10. Escreva uma função que exclui todos os nós de uma árvore binária de busca com Valor par.
 */
function excluirNosPares(raiz) {
    if (raiz === null) {
        return null;
    }

    raiz.left = excluirNosPares(raiz.left);
    raiz.right = excluirNosPares(raiz.right);

    if (raiz.value % 2 === 0) {
        if (raiz.left === null && raiz.right === null) {
            return null;
        }
        if (raiz.left === null) {
            return raiz.right;
        }
        if (raiz.right === null) {
            return raiz.left;
        }

        let sucessor = encontrarMinimo(raiz.right);
        raiz.value = sucessor.value;
        raiz.right = excluirNosPares(raiz.right);
    }

    return raiz;
}

function encontrarMinimo(no) {
    while (no.left !== null) {
        no = no.left;
    }
    return no;
}
/* 
Exemplo de Uso: */

const raiz = new Node(10);
raiz.left = new Node(5);
raiz.right = new Node(12);
raiz.left.left = new Node(2);
raiz.left.right = new Node(7);
raiz.right.left = new Node(11);
raiz.right.right = new Node(14);

console.log("Número de nós:", contarNos(raiz));
console.log("Número de nós não-folhas:", contarNosNaoFolhas(raiz));
console.log("Número de nós folhas:", contarNosFolhas(raiz));
console.log("Altura da árvore:", calcularAltura(raiz));
console.log("Número ímpar encontrado:", buscarNumeroImpar(raiz));
console.log("Maior número:", buscarMaior(raiz));
console.log("É árvore binária?", verificarArvoreBinaria(raiz));

console.log("Árvore original:", JSON.stringify(raiz, null, 2));
excluirNosPares(raiz);
console.log("Árvore após exclusão de nós pares:", JSON.stringify(raiz, null, 2));