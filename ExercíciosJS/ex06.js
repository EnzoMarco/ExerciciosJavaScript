function numeros() {
    var resultado = ""
    for(var num = 1; num <= 20; num++) {
        resultado += num + "<br>"
    } 
    document.getElementById('res').innerHTML = resultado

}