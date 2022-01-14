//Ordenação de listas com textos alfa numéricos de stings utilizando o método sort

var listaFrutas = Array()

listaFrutas[0] = 'Maçâ'
listaFrutas[1] = 'Uva'
listaFrutas[2] = 'Banana'
listaFrutas[3] = 'Morango'

console.log(listaFrutas.sort())

var listaNumeros = []

//Ordenação de listas com numeros ou string de números utilizando metodo sort 

listaNumeros[0] = 12
listaNumeros[1] = 40
listaNumeros[2] = 3
listaNumeros[3] = 7
listaNumeros[4] = 19
listaNumeros[5] = 1

console.log(listaNumeros.sort(ordenaNumeros))

function ordenaNumeros(a, b){
    return a - b
}