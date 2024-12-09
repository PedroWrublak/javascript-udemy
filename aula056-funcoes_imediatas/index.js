// Funções imediatas (IIFE)

/*
(function() {

})();
*/

(function(idade, peso, altura) {
    
    const sobrenome = 'Wrublak'
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Pedro'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(30, 80, 1.70);

const nome = 'Qualquer coisa';