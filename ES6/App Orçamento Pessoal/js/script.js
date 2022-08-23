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
        localStorage.setItem(id, JSON.stringify(d)) //converte um objet em strinng sando a biblioteca JSON
        localStorage.setItem('id', id)
    }

    recuperarTodosRegistros(){ //Metodo para recuperar registros
        
        //Array de despesas
        let despesas = Array()
        
        let id = localStorage.getItem('id')

        //Recuperar todas as despesas cadastradas em localStorage
        for(let i = 1; i <= id; i++){
            
            //recuperar Despesas
            let despesa = JSON.parse(localStorage.getItem(i))

            //verificar se existe a possibilidade de haver indices que foram plados ou removidos, nestes casos nós vmos pular esses índices
            if(despesa === null){
                continue// quando identificado pelo interpretdor dentro de uma estrutra de laço faz com que o ele avançe para ineração seguinte desconsiderndo tdo que estiver abaixo. 
            }

            despesas.push(despesa)
        }

        return despesas
    }

    pesquisar(despesa){
        
        let despesasFiltradas = Array()

        despesasFiltradas = this.recuperarTodosRegistros()

        
        console.log(despesa)

        console.log(despesasFiltradas)

        //Filtro de campos
        
        //ano
        if(despesa.ano != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano)
        }
        
        //mes
        if(despesa.mes != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes)
        }

        //dia
        if(despesa.dia != ''){
           despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia)
        }

        //tipo
        if(despesa.tipo != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo) 
        }

        //descricao
        if(despesa.descricao != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao)
        }

        //valor
         if(despesa.valor != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor)
        }

        console.log(despesasFiltradas)
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

        //dialogo de sucesso
        $('#modalRegistroDespesa').modal('show')
        
        //limpar campos de inserção
        ano.value = ''
        mes.value = ''
        dia.value = ''
        tipo.value = ''
        valor.value = ''

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

function carregaListaDespesas() {
    let despesas = Array()

    despesas = bd.recuperarTodosRegistros()

    //Selecionado o elemento tbody da tabela
    var listaDespesas = document.getElementById('listaDespesas')
    /*<tr>
                <td>15/03/2018</td>
                <td>Alimentação</td>
                <td>Compras do mês</td>
                <td>444.75</td>
        </tr>
    */

    //Percorrer o array despesas, listando cada despesa de forma dinâmica
    despesas.forEach(function(d){

        //criando a linha da tabela(tr)
        let linha = listaDespesas.insertRow()

        //Criando as colunas(td)
        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`  
        
        //ajustar o tipo
        switch(d.tipo){
            case'1': d.tipo = "Alimentação"
                break
            case'2': d.tipo = "Educação"
                break
            case'3': d.tipo = "Lazer"
                break
            case'4': d.tipo = "Saúde"
                break
            case'5': d.tipo = "transporte"
                break
        }

        linha.insertCell(1).innerHTML = d.tipo
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = d.valor

    })
    
}

function pesquisarDespesa(){
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value

    let despesa = new Despesa(ano, mes, dia,tipo, descricao, valor)

    bd.pesquisar(despesa)
}