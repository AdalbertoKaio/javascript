function botaoTabuada(){

    for (var cont = 1; cont <= 20; cont++){
        if (cont % 2 == 1){
            document.getElementById("resultado").innerHTML += `${cont} <br> `
        }
    }
}