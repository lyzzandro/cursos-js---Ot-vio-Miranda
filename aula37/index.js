const nomes = ['Lyzzandro', 'Mateus'];

// For clássico - geralmente com iteráveis (arrays ou string)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

console.log('----------------------------------------');

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('----------------------------------------');

for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('----------------------------------------');

for (let valor of nomes) {
    console.log(valor);
}

console.log('----------------------------------------');

nomes.forEach(function (element, indice, array) {
    console.log(element, indice, array);
});
