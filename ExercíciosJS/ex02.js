function verificar() {
    var usuario = document.getElementById('user').value;
    var senha = document.getElementById('password').value;
    if(usuario == senha){
        document.getElementById('res').innerText = 'A senha não pode ser igual ao nome de usuário. Tente novamente.'
    }
    else {
        document.getElementById('res').innerText = 'Login realizado com sucesso!'
    }
}