//Objetos á partir de funcções construtoras
let Carro = function(){

    this.cor = 'Amarelo'
    this.modelo = 'chevette'
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180
    
    //Métodos
    this.acelerar = function(){
        let velocidade = this.getVelocidadeAtual() + 50
        if(velocidade > this.velocidadeMaxima){
            velocidade = this.velocidadeMaxima
        }
        this.setvelocidadeAtual(velocidade)
    }
    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual
    }
    this.setvelocidadeAtual = function(velocidadeAtual){
        this.velocidadeAtual = velocidadeAtual
    }

}

let carro = new Carro()

console.log(carro.velocidadeAtual)
carro.acelerar()

console.log(carro.velocidadeAtual)
carro.acelerar()

console.log(carro.velocidadeAtual)
carro.acelerar()

console.log(carro.velocidadeAtual)
carro.acelerar()

console.log(carro.velocidadeAtual)
carro.acelerar()

carro.velocidadeMaxima = 280

carro.acelerar()
console.log(carro.velocidadeAtual)


let Carro2 = function(){

    var velocidadeMaxima = 180
    var quilometrosRodados = 0

    this.cor = 'Amarelo'
    this.modelo = 'chevette'
    this.velocidadeAtual = 0
    
    
    //Métodos
    this.acelerar = function(){
        let velocidade = this.getVelocidadeAtual() + 50
        if(velocidade > velocidadeMaxima){
            velocidade = velocidadeMaxima
        }
        this.setvelocidadeAtual(velocidade)

        setQuilometrosRodados(0.07)
        console.log(quilometrosRodados)
    }
    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual
    }
    this.setvelocidadeAtual = function(velocidadeAtual){
        this.velocidadeAtual = velocidadeAtual
    }

    var setQuilometrosRodados = function(q){
        quilometrosRodados += q
    }

}

let carro2 = new Carro2()

console.log('\n')

console.log(carro2.velocidadeAtual)
carro2.acelerar()

console.log(carro2.velocidadeAtual)
carro2.acelerar()

console.log(carro2.velocidadeAtual)
carro2.acelerar()

console.log(carro2.velocidadeAtual)
carro2.acelerar()

console.log(carro2.velocidadeAtual)
carro2.acelerar()

carro2.velocidadeMaxima = 280

carro2.acelerar()
console.log(carro2.velocidadeAtual)