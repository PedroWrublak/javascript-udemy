// Exercício com variáveis
// Fazer com que os valores das variáveis sejam trocados

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let varATemp = varA;

varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);
