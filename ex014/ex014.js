function botaoSortear(){
    document.getElementById("result").innerHTML = " "
    
var nrSorteados = 1
while (nrSorteados <= 6 ){
    var nrSorteado = parseInt(Math.random() * 60) + 1
    document.getElementById("result").innerHTML += `${nrSorteado} `
    nrSorteados++
}

}