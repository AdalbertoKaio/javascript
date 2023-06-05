function botaoCalcular(){
    var nome = document.getElementById("nome").value
    var numero = document.getElementById("numero").value

if (nome == "adm" && numero == "123") {
    document.getElementById('result').innerHTML += ` <br> Login aceito <br> `
} else{
    document.getElementById('result').innerHTML += ` <br> Login negado <br> `

}
}