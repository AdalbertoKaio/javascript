function gerar() {
     var coracao = Number(document.getElementById("vezes").value)

    for (let i = 1; i <= coracao; i++) {
        document.getElementById("resultado").innerHTML += '<img class="ts" src="img/Heart_corazón.svg.png"> </img>'
    }
}