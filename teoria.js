/*
        Comentários em 
        multiplas linhas
        */
       //comentário em uma única linha 
       //O alert é utilizado para exibir uma mensagem em popup 
       alert("Olá mundo!!!")

        //Criando uma função chamada quando clicamos no botão
        console.log ("Olá mundo!!!") 
        function BotãoTeste() {
            alert("Você clicou no botão")
        }
        //Tipo de exibição de mensagens no console
        console.error("Esta é uma mensagem de erro")
        console.warn("Esta é uma mensagem de alerta")
        console.info("Esta é uma mensagem de informação")
        //Declarando variaveis
        //String - Conjunto de caracteres - Declarar com "" ou ''
        var nome = "Kaio"
        var sobrenome = "Albuquerque"
        //Number - Todo número em 35 é do tipo number - Declarar sem " "
        var idade = 35
        //Boolean - Somente recebe true ou false
        var aprovado = true

        console.log (typeof nome) //Comando typeof para saber o tipo de dado

        console.log (nome + '' + sobrenome) //Concatenando strings com o + se utilizarmos o + com string ele concatena se utilizar com number soma
        var n1 = 10
        var n2 = 25
        console.log(n1 + n2) //Irá somar as 2 variaveis number (35)
        var n3 = "10"
        var n4 = "25"
        console.log(n3 + n4) //Irá concatenar "juntar" as 2 variaveis ("1025")

        n1 = n2//Uma variavel pode receber o valor de outra variavel
        console.log("n1 = " + n1 + ' e o n2 = ' + n2)

        var salario = 1290.85//Para atribuir um valor decimal utilizar . não ,
        salario = salario + 200 //Posso também somar a variavel com ela mesmo 
        console.log(salario)
        salario += 200 //Representação mais simplificada da expressão acima
        console.log(salario)
        
        //Antigamente para juntar texto e variaveis faziamos assim 
        console.log('Olá, ' + nome + ' você tem ' + idade + 'anos e recebe R$' + salario)
        //Hoje utilizamos o TemplatesString forma mais simples
        console.log(`Olá, ${nome} você tem ${idade} anos e recebe R$ ${salario}`)

        function BotaoNome() {
            var nome2 = prompt('Qual é o seu nome?')
            confirm(`Olá ${nome2}, entendeu JS`)
        }
        function BotaoSomar(){
            //Recebendo valor1 de um prompt
            var valor1 = prompt ('Informe o valor 1')
            //Recebendo valor2 de um prompt
            var valor2 = prompt ('Informe o valor 2')
            //Variavel soma receber valor1 + valor2
            var soma = Number (valor1) + Number (valor2)
            //Exibir em um alert o valor de soma
            //alert (`Soma igual a: ` + soma) 
            document.getElementById("resultadoSoma").innerHTML  += `<br> A soma dos números ${valor1} e ${valor2} é = ${soma}` 
        } 
        function botaoCidade() {
            var nomeCidade = document.getElementById("cidade").value
            document.getElementById("resultadoCidade").innerHTML = nomeCidade
        }
        //Operadores Aritméticos e Ordem de procedência
        //Operador de soma +
        var opSoma = 5+2 //Operador de soma +
        console.log(opSoma)
        var opSoma = 5-2 //Operador de subtração -
        console.log(opSubtracao)
        var opSoma = 5*2 //Operador de multiplicação *
        console.log(opMultiplicacao) 
        var opSoma = 5/2 //Operador de divisão /
        console.log(opDivisao) 

        var opExponenciacao = 5**2 //Operador de exponenciação ** 
        console.log(opExponenciacao)
        var opResto = 5%2 //Operador de resto na divisão % 
        console.log(opExponenciacao)

        //Ordem de precedencia
        var ordemPrecedencial = 5 + 3 / 2
        console.log(ordemPrecedencial)
        var ordemPrecedencial2 = (5 + 3) / 2 
        console.log(ordemPrecedencial2)
        /* 1° ()
           2° **
           3° * /
           4° %
           5° + - 
        */
           //Constantes
           const pi = 3.14
           //pi = 3 - Se o valor for alterado dará erro no Javascript

        //Operadores Relacionais
        var n1 = 5
        var n2 = 6
        console.log (n1 > n2) // Maior que
        console.log (n1 < n2) // Menor que 
        console.log (n1 >= n2) // Maior ou igual que
        console.log (n1 <= n2) // Menor ou igual que
        console.log (n1 == n2) // Igual
        console.log (n1 != n2) // != Não igual - Diferente

        //Estruturas condicionais 
        if (n1>n2){            //Verificando a condição entre parenteses 
            //Se a condição for verdadeira "entra" nesse bloco
            console.log ("O n1 é maior que o n2")
        } else {
            //Se a condiçãon NÃO for verdadeira "entra" nesse bloco ELSE
            console.log ("O n1 não é maior que o n2")
        }
        //Exemplo de condição
        var minhaIdade = 15
        if (minhaIdade >= 16) {
            console.log ("Você pode votar")
        } else {
            console.log ("Você não pode votar")
        }
        //Operadores logísticos 
        //&& representam o E
        var login = "adm"
        var senha = "123"
        //Para entrar na condição TRUE as 2 condições precisam ser verdadeiras
        if (login == "adm" && senha =="123") {
            //Executa esse bloco quando as condições são TRUE 
        } else {
            //Executa esse bloco se pelo menos 1 condição for FALSE 
        }

        var media = 6
        //Operador OU -> || (pipe)
        //Para entrar na condição TRUE pelo menos 1 condição precisa ser verdadeira 
        if (media == 6 || media == 5){
            //Executar esse bloco quando 1 condição é TRUE pelo menos 
        } else {
            //Aqui entra se todas as condições forem falsas
        }

        //Estruturas condicionais encadeadas
        if (media >=7){
            console.log("APROVADO")
        } else if(media>=5) { //Podemos fazer um novo if junto com o else
            console.log ("RECUPERAÇÃO")
        } else if (media < 5) {
            console.log("REPROVADO")
        }

        //Para sortearmos um valor aleatório utilizamos o Math.random()
        //o Math.random retorna um número decimal e precisamos multiplicar
        //pelo nr máximo que desejamos e somar 1 quando necessário 
        //o parseInt utilizamos para obter apenas a parte inteira do número
        var nrSorteado = parseInt(Math.random() * 100) + 1
        console.log (nrSorteado) 

        //Switch Case 
        //É como se fosse vários if else de forma mais simples 
        var diaSemana = 3
        switch (diaSemana) {
            case 1:
                console.log("Hoje é: domingo")
                break  //para o switch case e não verifica as outras opções
            case 2:
                console.log("Hoje é: segunda")
                break  
            case 3:
                    console.log("Hoje é: terça")
                     break  
            case 4:
                    console.log("Hoje é: quarta")
                    break
            case 5:
                    console.log("Hoje é: quinta")
                    break
            case 6:
                    console.log("Hoje é: sexta")
                    break
            case 7:
                    console.log("Hoje é: sabado")
                    break
            default:
                    console.log("Dia inválido")
        }
        
        //Laços de repetição WHILE (que quer dizer enquanto)
        //while (condição)
        //enquanto a condição do parenteses for verdadeira
        //continua repetindo o código do bloco
        var nrVidas = 5
        while (nrVidas > 0) {
            console.log (`você ainda tem ${nrVidas} `)
            nrVidas--
        }

        //Verificando se número é par com while
        var contador = 1 //iniciando o contador de vezes que irá executar 
        while (contador <= 10) { //Enquanto a condição for verdadeira
            if (contador % 2 == 0){ //Condição para o contador for par
                console.log (`${contador} é par`)
            } else{
                console.log (`${contador} é impar`)
            }
            contador++ //Adicionamos +1 ao contador para não ficar em loop infinito
        }

        var cont = 1
        while (cont <= 5){
            console.log (cont)
            cont ++ 
        }
        
        for (var cont = 1; cont <=5; cont++){
            console.log(cont)
        }
        //For - Laço de repetição
        //1ª Expressão var i = 1
        //(Aqui eu inicio o controle de vezes)
        //2ª Expressão i <=10
        //(Aqui nós verificamos a condição para se
        //manter no loop)
        //3ª expressão i++
        //(Aqui acrescentamos na variável +1 vez)
        //Exibindo
        for (let i = 1; i <=10; 1++) {
            console.log(i)
        }