function gerar() {
    var filmes = ['Homem Formiga', 'Terrifier', 'Annabelle', 'Barbie']

for (var i = 0; i < filmes.length; i++){
    document.getElementById('posicoes').innerHTML +=
    `Posição no vetor ${i} - Filme ${filmes[i]} <br>`
}
}