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

class Avestruz extends Passaro{
    constructor(){
        super('Grande', 'Branco e preto', 250, 15000)
    }
    enterrarCabeca(){
        console.log('Enterrar a Cabeça')
    }
    voar(){
        console.log('Não sabe voar')
    }
}

let papagaio = new Papagaio(true, 'Verde', '25', '350')
console.log(papagaio)

papagaio.voar()

let avestruz = new Avestruz()
avestruz.enterrarCabeca()
avestruz.voar()