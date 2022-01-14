//3 escopos: global, função e bloco
/*
var serie = 'Friends' //Variavel global pode ser enxergada por todos os blocos

function x (){

    var serie = 'Games Of Thrones' 

    console.log('Acessa variável dentro da função: ' + serie)

    if(true){
        console.log('Acessa dentro do bloco if da função: ' + serie)
    }

}

x()//chama a função

if(true){
    console.log('Acessa dentro do bloco if global: ' + serie)
}

//window.serie no console retorna o nome da váriavel

function x (){
    console.log(serie)

    if(true){
        
    }

}

if(true){
    var serie = 'The Walking Dead'
    console.log(serie)
    x()//chama a função
    /*  
        Variaveis declaradas dentro de um if global
        sofrem elevação e podem se acessadas de forma
        global.
    */
/*
}
console.log(serie)

*/

if(true){
    let serie = 'Friends' //Variavel declarada localmente
    console.log(serie)      
}

console.log(serie)
/*
    Devido a variavel estar declarada
    localmente utilizando o let, ela não pode ser
    acessada globalmente.
*/
