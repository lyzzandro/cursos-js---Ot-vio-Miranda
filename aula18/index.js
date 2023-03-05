const pessoa1 = {
    nome: 'Lyzzandro',
    sobrenome: 'Dualamo',
    idade: 19, 

    fala (){
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();








/* function criaPessoa(nome, sobrenome, idade){
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Lyzzandro', 'Dualamo', 19);
const pessoa2 = criaPessoa('Ives', 'Furtado', 19);
const pessoa3 = criaPessoa('João', 'Alfredo', 19);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);
console.log(pessoa1.sobrenome, pessoa2.sobrenome, pessoa3.sobrenome);console.log(pessoa1.idade, pessoa2.idade, pessoa3.idade); */