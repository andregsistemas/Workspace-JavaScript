/* 
    var nome = 'André' //String
    var idade = 35 //Numerico
    var proPlayerDeValorant = true; //Boolean
    var jogosFavoritos = ['Valorant', 'Dark Souls'] //Array

    //Objeto
    
    var pessoa = {
    nome: 'Nicolas',
    idade: 24
    }

    document.write(nome)

    //Meu Script

    var nome = 'Rogicleison'
    var altura = 1.81
    var massa = 102
    var imc = 0

    var nome2 = 'Geralbina'
    var altura2 = 1.58
    var massa2 = 58
    var imc2 = 0

    var geralbinaMaior

    imc = massa / (altura * altura)
    imc2 = massa2 / (altura2 * altura2)

    if(imc2 > imc){
        geralbinaMaior = false
        console.log(geralbinaMaior)
    }else{
        geralbinaMaior = true
        console.log(geralbinaMaior)
    }


// Script do SM Matheus

    var geralbina = {
        massa: 65,
        altura: 1.5
    }

    var rogicleison = {
        massa: 97,
        altura: 1.9
    }

    var imcRogicleison = rogicleison.massa /
    (rogicleison.altura * rogicleison.altura)

    var imcGeralbina = geralbina.massa/
    (geralbina.altura * geralbina.altura)

    var geralbinaMaiorIMC = imcGeralbina > imcRogicleison

    console.log(geralbinaMaiorIMC)


    var corinthians = Array(32, 98, 72)
    var saoPaulo = Array(42, 88, 68)
    var somaCorinthians = 0 
    var somaSaoPaulo = 0

    for(var i = 0; i < corinthians.length; i++) {
        somaCorinthians += corinthians[i];
    }

    for(var i = 0; i < saoPaulo.length; i++) {
        somaSaoPaulo += saoPaulo[i];
    }

    somaCorinthians = somaCorinthians / 3
    somaSaoPaulo = somaSaoPaulo / 3

    if(somaCorinthians > somaSaoPaulo){
        console.log("Corinthians é o melhor")
    }else{
        console.log("São Paulo é o melhor")
    }



    var corinthians = Array(32, 98, 72)
    var saoPaulo = Array(42, 88, 68)
    var somaCorinthians = 0 
    var somaSaoPaulo = 0

    for(var i = 0; i < corinthians.length; i++) {
        somaCorinthians += corinthians[i];
    }

    for(var i = 0; i < saoPaulo.length; i++) {
        somaSaoPaulo += saoPaulo[i];
    }

    function calcularMedia(a, b){

        return a / b

    }

    somaCorinthians = calcularMedia(somaCorinthians, 3)
    somaSaoPaulo = calcularMedia(somaSaoPaulo, 3)

    if(somaCorinthians > somaSaoPaulo){
        console.log("Corinthians é o melhor!")
    }else{
        console.log("São Paulo é o melhor!")
    }

    var corinthians = Array(32, 98, 72)
    var saoPaulo = Array(42, 88, 68)

    for(var i = 0; i < corinthians.length; i++) {
        
        console.log('Corinthians = ' + corinthians[i])
    }

    console.log(' ')


    for(var i = 0; i < saoPaulo.length; i++) {
    
        console.log('São Paulo = ' + saoPaulo[i])
    }

*/