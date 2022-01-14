var listaFrutas = Array();

listaFrutas[0] = 'Banana'
listaFrutas[1] = 'Maçã'
listaFrutas[2] = 'Morango'
listaFrutas[3] = 'Uva'

console.log(listaFrutas.indexOf('Morango')) //Retornará o número do indice onde a string Morango esta armazenado
console.log(listaFrutas.indexOf('Abacaxi')) //Retorna -1 quando não existe a string dentro do indice.

//tratando indices negativos

/*
if(listaFrutas.indexOf('Uva') === -1){
    console.log('Elemento não existe dentro da lista')
}else{
    console.log('Elemento existe e esta na posição, ' + listaFrutas.indexOf('Uva'))
}
*/

//Criar uma variavel auxiliar para não deixar o código muito verboso

var aux = listaFrutas.indexOf('Banana')

if(aux === -1){
    console.log('Elemento não existe dentro da lista')
}else{
    console.log('Elemento existe e esta na posição, ' + aux)
}