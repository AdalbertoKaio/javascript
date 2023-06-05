function botaoCalcular() {
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value 

if (idade >= 18 && idade <= 65) {
    document.getElementById("result").innerHTML =
    `<b class="verde">${nome}, você é obrigado a votar </b>`
} else if (idade >= 16 || idade > 65){
    document.getElementById("result").innerHTML =
    `<b class="azul">${nome}, você não é obrigado a votar </b>`
} else if (idade < 16) {
    document.getElementById("result").innerHTML =
    `<b class="vermelho">${nome}, você não pode votar </b>`
}
}