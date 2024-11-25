// Closures

// Global
function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Pedro');
const funcao2 = retornaFuncao('José');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());