// Atribuição via desestruturação (Objetos)

const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Wrublak',
    idade: 30,
    endereco: {
        // rua: 'João Agostinho',
        numero: 738
    }
};

// Atribuição via desestruturação
const { nome, sobrenome, ...resto } = pessoa;
console.log(resto);
