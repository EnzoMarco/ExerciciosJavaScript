function calcular() {
    let impares = ''
    for(var num = 1; num <= 50; num++)
    if(num % 2 !== 0) {
        impares += num + " "
    }
    document.getElementById('res').innerText = impares
}