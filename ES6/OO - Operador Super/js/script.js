class Animal{
    constructor(cor, tamanho, peso){

        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso

    }
    dormir(){
        console.log('Dormir')
    }
}


class Passaro extends Animal{
    constructor(bicoTamanho, cor, tamanho, peso){
        super(cor, tamanho, peso)
        this.bico = bicoTamanho
    }

    voar(){
        console.log('Voar')
    }
    
}

class Papagaio extends Passaro{
    constructor(sabeFalar, cor, tamanho, peso){
        super('Medio', cor, tamanho, peso,)
        this.saberFalar = sabeFalar
    }

    falar(){
        console.log('Falar')
    }
}

let papagaio = new Papagaio(true, 'Verde', '25', '350')
console.log(papagaio)

let papagaioFilhote = new Papagaio(false, 'Branco', '10', '80')
console.log(papagaioFilhote)