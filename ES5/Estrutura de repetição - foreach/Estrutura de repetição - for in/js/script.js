//var listaFuncionarios = ['Viviane', 'Rosangela', 'Miguel', 'Lucas', 'Fernanda']

/*
forech trabalha apenas com indices númericos,
quando acha algum valor de string ou boolean ele
ignora e passa para o próximo item
*/

var listaFuncionarios = Array()

listaFuncionarios['x'] = 'Viviane'
listaFuncionarios[false] = 'Rosangela'
listaFuncionarios[3] = 'Miguel'
listaFuncionarios[27] = 'Lucas'
listaFuncionarios[-12] = 'Fernanda'

//Funções podem ser atribuidas a variáveis em JS
var f = function (valor, indice){
  
    console.log(valor, indice)
    document.write(valor + ' ' + indice + '<br>')
}

//função inteira ficou encapsulada em uma única variavel (técnica der wrapper)
listaFuncionarios.forEach(f) 



/*
console.log(listaFuncionarios)
document.write(listaFuncionarios[3])

listaFuncionarios.forEach(function(valor, indice, array){
    
    //lógica
    console.log('Indice: ' + indice + ' | Valor: ' + valor)

    if(valor == 'Lucas'){ //substitui Lucas por André
        array[indice] = 'André'
    }

}) //function(valor, indice, array) como os parametros das funções se comportam como variáveis,
   //não é necessário declaratodas as três.
    
console.log(listaFuncionarios)
document.write('<br>' + listaFuncionarios[3])
*/