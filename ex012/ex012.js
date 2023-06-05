var nrSorteado = parseInt(Math.random() * 100)
var nrTentativas = 0

function botaoChutar() {
    var chute = prompt(`Qual seu número`)
    nrTentativas++

    if (chute == nrSorteado) {
        document.getElementById("resul").innerHTML += `<b> Meus parabéns você ganhou em ${nrTentativas} tentativas </b> <br>`
    }
    else if (chute < nrSorteado) {
        document.getElementById("resul").innerHTML +=
            `<b> Você chutou o número ${chute} mas é menor do que o esperado</b> <br>`
    }
    else if (chute > nrSorteado) {
        document.getElementById("resul").innerHTML +=
            `<b> Você chutou o número ${chute} mas é maior do que o esperado </b> <br>`
    }
}
function botaoNovo() {
    document.getElementById("resul").innerHTML = ""
}