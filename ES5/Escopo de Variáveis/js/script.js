//Existem 3 escopos no JavaScript: Global, função e o bloco
//Funcões e Blocos de códigos tem acesso as variaveis globais, sofrem um hoisting(elevação)
//Variaveis locais em escopo de bloco podem declaradas e serem acessadas pelo bloco glabal
//Variaveis locais em escopo de função não podem ser acessadas pelo escopo global.

var serie = 'Friends'

//escopo de bloco
if(true){
    var serie2 = 'Game of Thrones'
    document.write(serie)
}

document.write(serie2)
document.write('<br>')

function x(){
    var serie3 = 'The Walking Dead'
    document.write(serie)
    document.write(serie2)
}

x()

document.write('<br>')
document.write(serie2)