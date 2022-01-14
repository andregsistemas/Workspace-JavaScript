var listaFrutas = Array()

listaFrutas[0] = ('Banana')
listaFrutas[1] = ('Maçã')

//incluir elemento no final da pilha de array
listaFrutas.push('Uva')

//incluir elemento no inicio da pilha de array
listaFrutas.unshift('Morango')

//excluir elemento no final da pilha de array

/*
Não é necessário identificar o indice a ser excluido,
pois essa função pop vai exluir sempre o ultimo elemento da array.
*/
listaFrutas.pop()

//excluir elemento no inicio da pilha de array

/*
Não é necessário identificar o indice a ser excluido,
pois essa função shift vai exluir sempre o primeiro elemento da array.
*/
listaFrutas.shift()

console.log(listaFrutas)

/*Inclusão e exclusão em arrays multidimenssionais*/

var listaCoisas = Array()

listaCoisas['frutas'] = Array()
listaCoisas['pessoas'] = []

listaCoisas['frutas'].unshift('Banana')
listaCoisas['frutas'].push('Maçã')
listaCoisas['frutas'].push('Uva')
listaCoisas['frutas'].push('Morango')

listaCoisas['pessoas'].push('João')
listaCoisas['pessoas'].push('José')
listaCoisas['pessoas'].push('Maria')
listaCoisas['pessoas'].push('Roberto')

listaCoisas['pessoas'].pop()

console.log(listaCoisas)