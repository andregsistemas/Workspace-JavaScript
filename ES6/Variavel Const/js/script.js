//Para nome de variaveis constantes por boa prática o melhor a se utlizar é tudo em caixa ALTA.

const SERIE = 'Friends' //Por ser uma contante não há possibilidade de posteriormente alterar o valor inserido na variavel

function x() {
    const SERIE = 'The Walking Dead'
    console.log('Dentro da função: ' + SERIE)
}

x()

console.log('Escopo Global: ' + SERIE)