//class representa o modelo da entidade(Objeto)
class ContaBancaria {
    //agencia
    //numeroConta
    //saldo
    //limite

    //Método construtor
    constructor(){
        this.agencia = 1075
        this.numeroConta = 8351125
        this.saldo = 50
        this.limite = 450
    }

    depositar(valorDeposito){
        this.saldo += valorDeposito
    }

    sacar(valorSaque){
        this.saldo -= valorSaque
    }

    consultarSaldo(){
        return this.saldo
    }

}

let x = new ContaBancaria() //inicia a Entidade x em um objeto
let y = new ContaBancaria()//inicia a Entidade y em um objeto

console.log(`Saldo anterior é ${x.consultarSaldo()}`)
x.depositar(450)
console.log(`Saldo atual é ${x.consultarSaldo()}`)
x.sacar(200)
console.log(`Sacado 200, seu saldo atual é ${x.consultarSaldo()}`)

console.log(y.consultarSaldo())