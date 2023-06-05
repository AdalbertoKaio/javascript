//Declarando um array vazio
var meuVetor = []

//Criando vetores com dados 
var numeros = [4,1,8,2,7]
var nomes = ['Carla', 'Marcia', 'Denise']
var novoVetor = [20, 'SESI', true]

//Acessando os dados de um vetor
console.log(nomes[2])
console.log(novoVetor[0])

//Verificando o tamanho de um vetor
console.log (nomes.length)

//Indice
var frutas = ['Maça','Laranja','Pera','Morango','Uva' ]
for (var i=0; i < frutas.length; i++){
    console.log (frutas [i])
}

//Adicionando novo valor no FINAL do vetor
frutas.push ('Abacaxi')
frutas.log (frutas.length)
frutas.log (frutas)

var novaListaFrutas = []  // []
novaListaFrutas.push ('Limão')
console.log (novaListaFrutas) //['Limão']
novaListaFrutas.push ('Melancia')
console.log (novaListaFrutas)  //['Limão', 'Melância']

novaListaFrutas[0] = 'Melão'
console.log (novaListaFrutas)  //['Melão', 'Melância']
novaListaFrutas[1] ('Banana')
console.log (novaListaFrutas)  //['Melão', 'Banana']
novaListaFrutas.push ('Melância')
console.log (novaListaFrutas)  //['Limão', 'Banana', 'Melância']

for (var i=0; i < frutas.length; i++){
    console.log ( frutas[i] )
}

// for in -> não preciso inicializar uma variável de contador do loop
for (var i in novaListaFrutas){
    console.log (i + ' - ' + novaListaFrutas[i])
}

//O método forEach - significa para cada item do vetor dentro do parenteses colocamos a variável 
//que irá receber o conteúdo de cada linha do vetor e com o => informamos
// o bloco que irá executar para cada linha
frutas.forEach ( item => { 
    console.log ('Item pelo forEach ', item)
} )
//Quando precisamos do índice também o colocamos entre ()
//assim como no exemplo abaixo
frutas.forEach ( (item, pos) => {
    console.log ( 'Item pelo forEach com posição ', pos, item)
} )