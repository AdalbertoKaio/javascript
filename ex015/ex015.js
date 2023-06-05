function botaoTabuada() {
    let nr = Number(document.getElementById("nome").value)
    document.getElementById("resultado").innerHTML = `Tabuada do ${nr} <br> <br> `

    let cont = 1
    while (cont <=10) {
        res = cont * nr
        document.getElementById("resultado").innerHTML += ` ${nr} x ${cont} = ${res} <br> `

        cont++
    }
}
