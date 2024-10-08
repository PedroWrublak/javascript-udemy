
function enviar() {
    const form = document.querySelector('#form');

    form.addEventListener('submit', function(e) { // e -> event
        e.preventDefault();
    })

    function imc () {
        
        const pesoBase = document.querySelector('#ipeso').value;
        const alturaBase = document.querySelector('#ialtura').value;

        const peso = Number(pesoBase);
        const altura = Number(alturaBase);

        const resp = document.querySelector('#iresp');

        function calculo() {

            const imc = peso / (altura * altura)
            resp.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;

            if (imc < 18.5) {
                resp.innerHTML += ' (Abaixo do peso)';
                resp.style.backgroundColor = 'red';
            } else if (imc >= 18.5 && imc <= 24.9) {
                resp.innerHTML += ' (Peso Normal)';
                resp.style.backgroundColor = 'green';
            } else if (imc >= 25 && imc <= 29.9) {
                resp.innerHTML += ' (Sobrepeso)';
                resp.style.backgroundColor = 'red';
            } else if (imc >= 30 && imc <= 34.9) {
                resp.innerHTML += ' (Obesidade grau 1)';
                resp.style.backgroundColor = 'red';
            } else if (imc >= 35 && imc <= 39.9) {
                resp.innerHTML += ' (Obesidade grau 2)';
                resp.style.backgroundColor = 'red';
            } else if (imc > 40) {
                resp.innerHTML += ' (Obesidade grau 3)';
                resp.style.backgroundColor = 'red';
            } else {
                resp.innerHTMl +- ' Insira um valor válido'
            }
            }

        calculo()
    
    };

    form.addEventListener('submit', imc);
}

enviar();