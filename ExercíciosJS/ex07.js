function verificar() {
    var numa = parseFloat(document.getElementById('a').value);
    var numb = parseFloat(document.getElementById('b').value);
    var numc = parseFloat(document.getElementById('c').value);
    var numd = parseFloat(document.getElementById('d').value);
    var nume = parseFloat(document.getElementById('e').value);
    let num = [numa,numb,numc,numd,nume];
    if (numa > numb && numa > numc && numa > numd && numa > nume) {
        document.getElementById('res').innerHTML = numa;
    }
    else if (numb > numa && numb > numc && numb > numd && numb > nume) {
        document.getElementById('res').innerHTML = numb;
    }
    else if (numc > numa && numc > numb && numc > numd && numc > nume) {
        document.getElementById('res').innerHTML = numc;
    }
    else if (numd > numa && numd > numb && numd > numc && numd > nume) {
        document.getElementById('res').innerHTML = numd;
    }
    else if (nume > numa && nume > numb && nume > numd && nume > numc) {
        document.getElementById('res').innerHTML = nume;
}
}