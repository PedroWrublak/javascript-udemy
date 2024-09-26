// Mais sobre numbers
// IEEE 754-2008

let num1 = 1500; // number
let num2 = 2.5; // number
let num3 = 10.57982438243728;

// console.log(num1.toString() + num2);
// num1 = num1.toString();
// console.log(num1.toString(2));
// console.log(num3.toFixed(2));
// console.log(Number.isInteger(num1));

// let temp = num1 * '5';
// console.log(Number.isNaN(temp));

let num4 = 0.7;
let num5 = 0.1;

// num4 += num5; // 0.8
// num4 += num5; // 0.9
// num4 += num5; // 1.0

// num4 = parseFloat(num4.toFixed(2)); // pode ser usado 'number'

num4 = ((num4 * 100) + (num5 * 100)) / 100; // 0.8
num4 = ((num4 * 100) + (num5 * 100)) / 100; // 0.9
num4 = ((num4 * 100) + (num5 * 100)) / 100; // 1.0

console.log(num4);
console.log(Number.isInteger(num4));


