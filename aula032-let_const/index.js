// Mais diferenças entre vat e let/const
const verdadeira = true;

// Let tem escoppo de blobo { ... bloco }
// Var só tem escopo de função

// let nome = 'Pedro'; // Criando
// var nome2 = 'Wrublak'; //Criando

// if (verdadeira) {
//     let nome = 'Vinicius'; //criando
//     var nome2 = 'Rogério' // Redeclarando
    
//     if (verdadeira) {
//         var nome2 = 'Ronaldo' // Redeclarando
//         let nome = 'José';
//     }
// }

// console.log(nome, nome2);


// function falaOi() {

//         if (verdadeira) {
//             let nome = 'Pedro';
//             var sobrenome = 'Wrublak'
//         }

//         console.log(sobrenome);

//     }

// falaOi();

let sobrenome = 'Wrublak';
console.log(sobrenome);