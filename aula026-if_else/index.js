// if, else if e else (pt2)

const numero = 10;

// Se isso (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
// Se não faça isso {código}

if (numero <= 10) { // Verdadeiro
    console.log('O número é menor ou igual a 10.')
}

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('o número está entre 6 e 8.');
} else if (numero >= 9 && numero <= 11) { // Verdadeiro
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número está entre 0 e 11.');
}

console.log('...Aqui vai o resto do código')