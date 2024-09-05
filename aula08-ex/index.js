/*
Pedro Wrublak tem 19 anos, pesa 67 kg
tem 1.73 de altura e seu IMC é de 22.386314277122523
Pedro Wrublak nasceu em 2005
*/

const nome = 'Pedro';
const sobrenome = 'Wrublak';
const idade = 19;
const peso = 67;
const alturaEmM = 1.73;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2024 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);