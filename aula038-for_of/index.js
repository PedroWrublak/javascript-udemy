// For of - Estrutura de repetição

//            01234 56...
const nome = ['Pedro', 'Wrublak', 'Vinicius'];

// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis)

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('###');

for (let i in nome) {
    console.log(nome[i]);
}

console.log('###');

for (let valor of nome) {
    console.log(valor);
}

console.log('###');

nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});

const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Wrublak'
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
};

// for of não funciona com objetos por não serem iteráveis