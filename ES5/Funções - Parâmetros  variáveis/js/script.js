/*

function soma(a, b) {
    return a + b
}

console.log(soma(7, 7))
console.log(soma(7, 7, 9, 15)) //desconsidera os parâmetros adicionais
console.log(soma(7))
console.log(soma())

*/

function soma() {
    var resultado = 0

    for(var i in arguments){
        resultado += arguments[i] //soma cada indice do array
    }

    return resultado

    /*
    
    arguments é uma instrução que existe para todas as funções JS que
    retorna algo muito pareciso com um array constendo a relação de
    parametros passados para a função
    
    */
}

console.log(soma(7, 5, 3.2, 0.8, ' Texto'))