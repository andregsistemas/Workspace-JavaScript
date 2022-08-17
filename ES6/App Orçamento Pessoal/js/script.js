class Despesa { //classe Despesa
    constructor(a, m, d, tp, des, val){
        this.ano = a
        this.mes = m
        this.dia = d
        this.tipo = tp
        this.descricao = des
        this.valor = val
    }

    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] == '' || this[i] == null){
                return false
            }
        }
        return true
    }

}

class BD{
    constructor(){
        let id = localStorage.getItem('id')
        
        if(id === null){
            localStorage.setItem('id', 0)
        }
    }
    getProximoId(){
        let proximoId = localStorage.getItem('id') //null
        return parseInt(proximoId) + 1
    }

    gravar(d){ //Metodo despesa
       // localStorage.setItem('despesa', JSON.stringify(d))
       let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
    }
}

let bd = new BD()

function cadastrarDespesa(){
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    )

    if(despesa.validarDados()){
        bd.gravar(despesa)

        //controle modal para sucesso
        document.getElementById('modal_titulo').innerHTML='Registro inserido com sucesso!'
        document.getElementById('modal_titulo_div').className = 'modal-header text-success'
        document.getElementById('modal_conteudo').innerHTML = 'Despesa foi cadastrada com sucesso!'
        document.getElementById('modal_btn').innerHTML = 'voltar'
        document.getElementById('modal_btn').className = 'btn btn-success'

        //dialogo de suceesso
        $('#modalRegistroDespesa').modal('show')
    }else{
        //controle modal para erro
        document.getElementById('modal_titulo').innerHTML='Erro na inclusão do Registro!'
        document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
        document.getElementById('modal_conteudo').innerHTML = 'Erro na gravação, verifiqe se todos os campos foram preenchidos corretamente!'
        document.getElementById('modal_btn').innerHTML = 'voltar e corrigir'
        document.getElementById('modal_btn').className = 'btn btn-danger'

        //dialogo de erro
       $('#modalRegistroDespesa').modal('show')
    }

}