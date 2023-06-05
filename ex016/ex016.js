function botaoTabuada() {
    let nr = Number(document.getElementById("nome").value)
    document.getElementById("resultado").innerHTML = ` Tabuada do ${nr} <br><br> `

    for (let i = 1; i <= 10; i++) {
        res = i * nr
        document.getElementById("resultado").innerHTML += ` ${nr} x ${i} = ${res} <br>`
    }
}