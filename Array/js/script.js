//Array com manipulação de indices

var listaFrutas = Array()

listaFrutas[0] = 'Banana'
listaFrutas[1] = 'Maçã'
listaFrutas[2] = 'Morango' //Pode utilizar outros indices para array
listaFrutas[3] = 'Uva'


//Outra forma de declarar uma array

var listaCarros = []

listaCarros[4] = 'Uno'
listaCarros[5] = 'Ka'
listaCarros[6] = 'Onix'
listaCarros[7] = 'HB20'

//Array onde não se pode declarar os indices manualmente

//O javaScript nomeia automaticamente um indice para cada item do Array
var listaDeCompras = Array('Arroz','Feijão','Alface','Tomate') 

var listaDepartamentos = ['RH','Diretoria','TI','Manutenção']

console.log(listaFrutas)

console.log(listaCarros[5])

//A primeira posição do indice nomeado automaticamente sempre começará com zero
console.log(listaDeCompras[0])

console.log(listaDepartamentos[3])

