function botaoSortear(){
    var nome = document.getElementById("nome").value
    var mes = parseInt(Math.random() * 12) + 1
switch (mes) {
    case 1:
        document.getElementById("result").innerHTML = `<b> ${nome}, você vai se casar no mês de Janeiro <img class="d" src="casamento1.jpg" alt="">`
        console.log("Janeiro")
            break  
    case 2:
        document.getElementById("result").innerHTML = `<b> ${nome}, você vai se casar no mês de Fevereiro <img class="d" src="casamento1.jpg" alt="">`
        console.log("Fevereiro")
            break  
    case 3:
        document.getElementById("result").innerHTML = `<b> ${nome}, você vai se casar no mês de Março <img class="d" src="casamento1.jpg" alt="">`
        console.log("Março")
            break  
    case 4:
        document.getElementById("result").innerHTML = `<b> ${nome}, você vai se casar no mês de Abril <img class="d" src="casamento1.jpg" alt="">`
        console.log("Abril")
            break
    case 5:
        document.getElementById("result").innerHTML = `<b> ${nome}, você vai se casar no mês de Maio <img class="d" src="casamento1.jpg" alt="">`
        console.log("Maio")
            break
    case 6:
        document.getElementById("result").innerHTML = `<b> ${nome}, você vai se casar no mês de Junho <img class="d" src="casamento1.jpg" alt="">`
        console.log("Junho")
            break
    case 7:
        document.getElementById("result").innerHTML = `<b> ${nome}, você vai se casar no mês de Julho <img class="d" src="casamento1.jpg" alt="">`
        console.log("Julho")
            break
     case 8:
        document.getElementById("result").innerHTML = `<b> ${nome}, você vai se casar no mês de Agosto <img class="d" src="casamento1.jpg" alt="">`
        console.log("Agosto")
            break
    case 9:
        document.getElementById("result").innerHTML = `<b> ${nome}, você vai se casar no mês de Setembro <img class="d" src="casamento1.jpg" alt="">`
        console.log("Setembro")
            break
    case 10:
        document.getElementById("result").innerHTML = `<b> ${nome}, você vai se casar no mês de Outubro <img class="d" src="casamento1.jpg" alt="">`
        console.log("Outubro")
            break
    case 11:
        document.getElementById("result").innerHTML = `<b> ${nome}, você vai se casar no mês de Novembro <img class="d" src="casamento1.jpg" alt="">`
        console.log("Novembro")
            break
    case 12:
        document.getElementById("result").innerHTML = `<b> ${nome}, você vai se casar no mês de Dezembro <img class="d" src="casamento1.jpg" alt="">`
        console.log("Dezembro")
            break
    default:
        console.log("Dia inválido").innerHTML = `<b> `
}
}
