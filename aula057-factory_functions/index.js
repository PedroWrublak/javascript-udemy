// Funções fábrica (Factory Functions)

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto = 'falando sobre NADA.') {
            return `${this.nome} está ${assunto}`;
        },

        altura: altura,
        peso: peso,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Pedro', 'Wrublak', 1.7, 70);
const p2 = criaPessoa('João', 'Wrublak', 1.5, 80);
const p3 = criaPessoa('José', 'Wrublak', 1.5, 90);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

/*
p1.nomeCompleto = 'José dos Campos';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());
*/

/*
const p2 = criaPessoa('José', 'Alberto', 1.6, 60);
console.log(p2.fala('falando sobre JS.'));
console.log(p2.imc());
*/