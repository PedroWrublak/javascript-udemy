// Escopo léxico

const nome = 'Pedro';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Wrublak';
    falaNome();
}
usaFalaNome();