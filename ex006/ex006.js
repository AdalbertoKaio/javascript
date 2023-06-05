function botaoCalcular(){
   var valor1 = document.getElementById("numero").value
   var valor2 = document.getElementById("numero2").value
   
   var soma = valor1 + valor2
   var subtracao = valor1 - valor2
   var multiplicacao = valor1 * valor2
   var divisao = valor1/valor2
   var resto = valor1 % valor2
   var exponenciação = valor1 ** valor2

   document.getElementById('resultados').innerHTML = 
        `<br> ${valor1} + ${valor2} é = ${soma} 
        <br>  ${valor1} - ${valor2} é = ${subtracao}
        <br> ${valor1} * ${valor2} é = ${multiplicacao}
        <br>  ${valor1} / ${valor2} é = ${divisao}
        <br>  ${valor1} % ${valor2} é = ${resto}
        <br> ${valor1} ** ${valor2} é = ${exponenciação}
        ` 
}