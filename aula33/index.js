let pessoa = {
    nome: 'Lyzzandro',
    // sobrenome: 'Dualamo',
    // idade: 20,
    // endereco: {
    //     rua: 'Adilmar',
    //     numero: 06,
    // },
};

//atribuoção via desestruturação
let { nome } = pessoa;

nome = 'Ives';

let { nome: nome2 } = pessoa;

console.log(nome, nome2);
