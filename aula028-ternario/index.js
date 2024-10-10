// Operação ternária
// (condição)? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacapUsuario = 999;
const nivelUsuario = pontuacapUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);

/*
if (pontuacapUsuario >= 100) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}
*/

