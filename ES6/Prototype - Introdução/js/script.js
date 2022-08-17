//aviao
//Atributos = cor, modelo e levantarVoo

//objeto literal
let a1 = {

    cor: 'Branco',
    Modelo: 'Airbus A380',
    levantarVoo: function(){
        console.log('levantar Voo')
    }

}

//função construtora
let AviaoF = function(){
    this.cor = 'Azul',
    this.modelo = 'Boeing 787'
    this.levantarVoo = function(){
        console.log('Levantar Voo')
    }
}

let a2 = new AviaoF()

//Classe
class AviaoC{
    constructor(){
        this.cor = 'Vermelho',
        this.modelo = 'Embraer E-Jets'
        
    }
    
    levantarVoo = function(){
        console.log('Levantar Voo')
    }
}
let a3 = new AviaoC

console.log(a1)
console.log(a2)
console.log(a3)