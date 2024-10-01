// Valores primitivos e valores por referência

/* 
Primiticos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passador por referência
*/

// Referência
const a = {
    nome: 'Pedro',
    sobrenome: 'Wrublak'
};

const b = a; // const b = {...a};

a.nome = 'João';

console.log(a);
console.log(b);

/* Referência
let a = [1, 2, 3];
let b = a; // let b = [...a];
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

console.log(c);

a.push('Pedro');
console.log(c);
*/