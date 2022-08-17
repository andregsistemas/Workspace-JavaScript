let Bicicleta1 = {
    cor: 'Branco',
    marcha: 'Única',
    aro: 12,
    pedalar(){
        console.log('Método pedalar executado')
    }
}

let Bicicleta2 = {
    cor: 'Vermelha',
    marcha: '18',
    aro: 26,
    pedalar(){
        console.log('Método pedalar executado')
    }
}

console.log(Bicicleta1)
console.log(Bicicleta2)

let bicicletaFactory = function(cor, marcha, aro, tipoPedal){
    return{
        cor,
        marcha,
        aro,
        tipoPedal,
        pedalar(){
            console.log('Método pedalar executado')
        }
    }
}

let Bicicleta3 = bicicletaFactory('Vermelha', '18', 26, 'Alumínio')
console.log(Bicicleta3)

let Bicicleta4 = bicicletaFactory('Preta', '21', 29, 'Plástico')
console.log(Bicicleta4)