//For in -> lê os índeces ou chaves do objeto

const pessoa = {
    nome: 'Lyzzandro',
    sobrenome: 'Dualamo',
    idade: 20,
};

console.log(pessoa.nome);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// const frutas = ['Pera', 'Maça', 'Uva'];

// for (let index in frutas) {
//     console.log(frutas[index]);
// }
