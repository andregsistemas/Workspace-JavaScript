//Objetos á partir de funcções construtoras
let Carro = function(){

    this.cor = 'Amarelo'
    this.modelo = 'chevette'
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180
    
    //Métodos
    this.acelerar = function(){
        let velocidade = this.getVelocidadeAtual() + 10
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

console.log(`A velocidade atual é : ${carro.getVelocidadeAtual()}`)
carro.acelerar()
carro.acelerar()
carro.acelerar()
console.log(`A velocidade atual é : ${carro.getVelocidadeAtual()}`)