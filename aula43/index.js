/*
Escreva uma função que recebe um número e retorne o seguinte:
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 e 5 = FizzBuzz
Número não é divisível por 3 e por 5 = Retorne o próprio número
Checar se o número é realmente um número = Retorna o próprio número
Use a função com número de 0 a 100
*/

const fizzBuzz = function (num) {
    if (typeof num !== 'number') return num;

    if (num % 3 === 0 && num % 5 === 0) return 'fizzBuzz';

    if (num % 3 === 0) return 'Fizz';

    if (num % 5 === 0) return 'Buzz';

    return num;
};

for (let i = 0; i <= 100; i++) {
    console.log(fizzBuzz(i));
}
