function verificar() {
    var num = document.getElementById('nota').value
    if (num < 0 || num > 10) {
        document.getElementById('res').innerText = ('Número inválido, tente novamente.')
    } 
    else if(num == 10) {
        document.getElementById('res').innerText = 'Parabéns! Nota Máxima, ' + num + ' Receba!'
    }
    else {
        document.getElementById('res').innerText = 'Sua nota é ' + num
    }
}