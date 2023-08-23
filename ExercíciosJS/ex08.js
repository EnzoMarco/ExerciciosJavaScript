function calcular() {
    var z = parseFloat(document.getElementById('a').value)
    var x = parseFloat(document.getElementById('b').value)
    var v = parseFloat(document.getElementById('c').value)
    var n = parseFloat(document.getElementById('d').value)
    var m = parseFloat(document.getElementById('e').value)
    var media = (z+x+v+n+m) / 5
    document.getElementById('res').innerText = media
}