// replace
// Substitui o que for indicado

//               01234567
let umaString = "Um texto";

console.log(umaString.replace('Um', 'Outra'));
console.log(umaString.replace(/Um/, 'Outra'));

let umTexto = 'O rato roeu a roupa do rei de roma.'

console.log(umTexto.replace(/r/g, '#'))