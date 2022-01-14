var num1 = prompt('digite o primeiro número')
var operacao = prompt("Digite a operação")
var num2 = prompt('digite o segundo número')


function calc(num1, num2, operacao){

    num1 = parseInt(num1)
    num2 = parseInt(num2)

    var resultado = 0;

    switch(operacao){
        case 'soma':
            resultado = num1 + num2
            break
    
        case 'subtração':
            resultado = num1 - num2
            break
    }
    

    return resultado
    
}
document.write('O resultado é: ' +  calc(num1, num2, operacao))