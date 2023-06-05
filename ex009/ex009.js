function botaoCalcular(){
    var nome = document.getElementById("nome").value
    var numero = document.getElementById("numero").value

if (numero >= 18) {
    document.getElementById('resul').innerHTML += 
    `<br> Parabens ${nome}, você pode tirar CNH <br>`
}else{
    document.getElementById('resul').innerHTML += 
    `<br> ${nome}, você não pode tirar CNH <br>
    <img src="cnh-cassada.jpg">`
}
}