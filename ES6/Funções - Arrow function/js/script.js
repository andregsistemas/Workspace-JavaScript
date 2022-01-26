/*
let quadrado = function(x){
    return x * x
}

document.write(quadrado(3))
*/

//se a Arrow da funcção tiver apenas um parâmetro, não é necessário o (parênteses).
//Se a arrow não tiver condicional ou outra tratativa como if/else, while etc não é preciso usar {chaves}
//Não precisa do return se tiver calculos simples.

/*
let quadrado = (x) => {
    return x * x
}


let quadrado = x => x * x // return implicito
document.write(quadrado(5))


//Par ou impar com function ES5
let parOuImpar = function(numero){

    if(numero % 2 === 0){
        return 'par'
    }else{
        return 'impar'
    }
}
document.write(parOuImpar(7))


//Par ou impar com function ES6
let parOuImpar = numero =>{

    if(numero % 2 === 0){
        return 'Par'
    }else{
        return 'Ímpar'
    }
}
document.write(parOuImpar(4))

*/

//Par ou impar com function ES6 e if ternário
let parOuImpar = numero => numero % 2 === 0 ? 'Par' : 'Ímpar' //retorno ímplicito

document.write(parOuImpar(0))