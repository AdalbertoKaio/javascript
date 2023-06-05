function botaoCalcular(){
    var nome = document.getElementById("nome").value
    var numero2 = document.getElementById("numero2").value
    var numero3 = document.getElementById("numero3").value
   
    var media = (Number(numero2) + Number(numero3)) / 2

if (Number(numero2) > 10) {
    alert ("Nota 1 não pode ser maior que 10 ")
    exit 
}
if (Number(numero3) > 10) {
    alert ("Nota 2 não pode ser maior que 10")
    exit
}

if (media >= 7) {
    document.getElementById("passou").innerHTML += `Passou de ano`
    document.getElementById('resultados').innerHTML += `<br> O aluno ${nome} tirou nota ${numero2} e ${numero3} sua média foi ${media}`
}
else {
    document.getElementById("passou").innerHTML += `Reprovou de ano`
    document.getElementById('resultados').innerHTML += `<br> O aluno ${nome} tirou nota ${numero2} e ${numero3} sua média foi ${media}`

}
}