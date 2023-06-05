var vidas = 0

function adicionarVida() {  //Cogumelo
    vidas++
    DesenharVidas()
}

function perderVida() { // Bomba
    vidas--
    DesenharVidas()
}

function DesenharVidas() {
    if (vidas <= 0) {
        document.getElementById("vidas").innerHTML = '<img src="img/game-over.gif">'
    } else {
        document.getElementById("vidas").innerHTML = '<img src="img/mario (1).webp" class="mario">'
        for (var i = 1; i <= vidas; i++) {
            document.getElementById("vidas").innerHTML += '<img src="img/coracao.svg" class="coracao">'
        }
    }
}