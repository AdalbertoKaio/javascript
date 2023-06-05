var filmes = []
var imagem = []

function gerar(){
    var nome = document.getElementById("nome").value
    var img = document.getElementById("img").value
    filmes.push(nome)
    imagem.push(img)
    document.getElementById('resultado').innerHTML= ''

    for (var i = 0; i < filmes.length ; i++) {
        document.getElementById('resultado').innerHTML += ` <img src= '${imagem [i]}' > <br> ${filmes[i]} <br>`
    }
}
