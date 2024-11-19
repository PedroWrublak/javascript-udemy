// Parâmetros da função

// Arguments -> sustenta todos os argumentos enviados

function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5, 6, 7);

function funcao1(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao1(1, 2, 3);

//VALOR PADRÃO
function funcao2(a, b = 0, c = 4) { //assume os valores caso não sejam encontrados
    console.log(a + b + c);
}
funcao2(1, 3);

//DESESTRUTURAÇÃO
function funcao3 ({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
let obj = { nome: 'Pedro', sobrenome: 'Wrublak', idade: 19};
funcao3(obj);

//REST OPERATOR
const conta = function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);

const conta1 = (...args) => {
    console.log(args);
};
conta1('+', 1, 20, 30, 40, 50);