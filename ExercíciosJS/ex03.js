function verificar() {
    var nome = document.getElementById('name').value
    var idade = document.getElementById('age').value
    var salario = parseFloat(document.getElementById('money').value)
    if (nome.length <= 3) {
        document.getElementById('res').innerText = 'O nome precisa ter no mínimo 3 letras'
    }
    else if (idade < 0 || idade > 150 || !idade) {
        document.getElementById('res').innerText = 'Idade inválida, tente novamente.'
    }
    else if (salario < 0 || !salario) {
        document.getElementById('res').innerText = 'Salário inválido, tente novamente.'
    }
    else {
        document.getElementById('res').innerText = 'Tudo certo!'
    }
}