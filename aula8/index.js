/* Lyzzandro Dualamo tem 19 anos, pesa 55 kg
tem 1.7 de altura e seu IMC é de 19.031141868512112
Lyzzandro nasceu em 2003. */

const nome = 'Lyzzandro';
const sobrenome = 'Dualamo';
const idade = 19;
const peso = 55;
const alturaEmM = 1.70;
let indiceMassaCorporal; // peso /(altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento =  2022 - idade;

//template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);