//um software de marcenaria
//cadeira e sofá

//paradigma procedural

//cadeira

/*
let qtde_pernas = 4
let giratoria = false
let cor = 'azul'
*/

/*
//array de cadeiras
let cadeiras = Array()

cadeiras[0] = Array()
cadeiras[0]['qtde_pernas'] = 4
cadeiras[0]['giratoria'] = false
cadeiras[0]['cor'] = 'azul'

cadeiras[1] = Array()
cadeiras[1]['qtde_pernas'] = 1
cadeiras[1]['giratoria'] = true
cadeiras[1]['cor'] = 'vermelha'

function gira_cadeira(i){
    if(cadeiras[i]['giratoria'] === true){
        console.log('Girou!')
    }else{
        console.log('Cadeira não é giratória!')
    }
}

function adicionar_cadeira(qt_pernas, gira, cor){
    let cadeira = Array()

    cadeira['qt_pernas'] = qt_pernas
    cadeira['gira'] = gira
    cadeira['cor'] = cor

    cadeiras.push(cadeira)
}

adicionar_cadeira(3, false, 'verde')

console.log(cadeiras)

//gira_cadeira(1)

*/

//paradigma orientação a objeto
class Cadeira{
 
    constructor(qtde_pernas, giratoria, cor){
        
        this.qtde_pernas = qtde_pernas
        this.giratoria = giratoria
        this.cor = cor
    
    }
   girarCadeira(){
       if(this.giratoria === true){
            console.log('Girou!')
       }else{
            console.log('Cadeira não é giratória!')
       }
   }
}

let cadeira = Array()

cadeira.push (new Cadeira(4, false, 'azul'))
cadeira.push (new Cadeira(1, true, 'vermelha'))


console.log(cadeira)
//cadeira.girarCadeira()