// Avaliação de Short-Circuit
// Em JS tudo pode ser avaliado em true ou false

/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY:
false
0
'' "" ``
null / undefined
NaN
*/

//AND
// console.log('Pedro Wrublak' && true && 'Maria'); // Retorna o valor da última expressão verdadeira

// console.log('Pedro' && NaN && 'Maria');

/*
function falaOi () {
    return 'Oi';
}

let vaiExecutar = 'Jorge';

console.log(vaiExecutar && falaOi());
*/

// OR
//console.log (0 || false || null || 'Pedro Wrublak' || true);

/*
const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);
*/

/*
const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
*/