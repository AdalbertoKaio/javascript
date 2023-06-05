function botaoCalcular() {
    var valor1 = document.getElementById("numero").value
    var dobro = valor1*2
    var metade = valor1/2
    document.getElementById("resultadoSoma").innerHTML  += `<br> O dobro de ${valor1} é igual a ${dobro} e a metade é ${metade}` 
    }
function botaoLimpar () {
    document.getElementById("resultadoSoma").innerHTML  += ""
}   