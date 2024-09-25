// Tipos de dados primitivo

// String, number, undefined, null, boolean

const nome = 'Pedro'; //string
const nome1 = "Pedro"; //string
const nome2 = `Pedro`; //string
const num1 = 10; //number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta pra local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na memória
const aprovado = true; // Boolean = true, false (lógico)

console.log(typeof sobrenomeAluno, sobrenomeAluno);

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2

/*
const a = [1,2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);
*/
