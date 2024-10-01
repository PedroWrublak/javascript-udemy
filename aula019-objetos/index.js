// Objetos (básico)
 
const pessoa1 = {
    nome: 'Pedro',
    sobrenome: 'Wrublak',
    idade: 18,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

/*
function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Pedro', 'Wrublak', 18);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 23);
const pessoa3 = criaPessoa('Jorge', 'Machado', 54);
const pessoa4 = criaPessoa('Carlos', 'Cunha', 26);
const pessoa5 = criaPessoa('Roberto', 'Magno', 53);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);
*/

/*
const pessoa1 = {
    nome: 'Pedro',
    sobrenome: 'Wrublak',
    idade: 18
};

const pessoa2 = {
    nome: 'Amanda',
    sobrenome: 'Neves',
    idade: 27
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
*/
