// For in - Estrutura de repetição
// lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Wrublak',
    idade: 18
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

/*
//               0       1       2
const frutas = ['Pera', 'Maçã', 'Uva'];

for (let index in frutas) {
    console.log(index);
}
    */

// for (let i = 0; i < frutas.lenght; i++) {
//     console.log(frutas[i]);
// }