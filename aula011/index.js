// Operadores aritméticos, de atribuição e incremento

/* Aritméticos
* + Adição / Concatenação
* - / * 
* ** Pontenciação
* % Resto da divisão
*/

/*
()
**
* / %
+ -
*/

/*
Incremento = ++
Decremento = --
*/

// Operações
const num1 = 5;
const num2 = 2;
const num3 = 10;
//console.log(num1 * num2 / num3);

//Incremento e Decremento
let contador = 1;
++contador; //2 pode ser usado após e pré variável
contador++; //3
contador--; //2
//console.log(contador++, contador);

// Operadores de atribuição
let contador1 = 2;
contador1 *= 2;
contador1 += 2;
contador1 **= 2;
//console.log(contador1);

/* 
NaN - Not a number
const num10 = 10;
const num20 = 'Pedro'
console.log(num10 * num20)
*/

const num11 = 10;
const num12 = parseInt('5.2'); //Float - converte para decimal
//Number - converte automaticamente, para inteiro ou decimal
console.log(num11 + num12);
console.log(typeof num12)