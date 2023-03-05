/*
Primitivo(Imutáaveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/ 

const a = {
    nome: 'Lyzzandro',
    sobrenome: 'Dualamo'
};

const b = a;

a.nome= 'João';
console.log(a);
console.log(b);