//Objeto criado com base em uma classe

class Produto{
    constructor(descricao, preco){
        this.descricao = descricao
        this.preco = preco
    }
    verDescricao(){
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

let produto = new Produto('Notebook', 2200)
produto.verDescricao()

//Objeto literal

let produtoLiteral = {
    descricao: 'Geladeira',
    preco: 1800,
    verDescricao: function(){
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

produtoLiteral.verDescricao()

//Melhorias de notação em objetos Literais

//ES5
let nome = 'Jorge'
let idade = 29
let sexo = 'Masculino'
let profissao = 'Programador'

let objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function(){
        console.log(`${this.nome}, ${this.idade}, ${this.sexo}, ${this.profissao}`)
    }
}
console.log(objeto)
objeto.exibirResumo()

let objeto2 = {
    nome,
    idade,
    sexo,
    profissao,
    exibirResumo(){
        console.log(`${this.nome}, ${this.idade}, ${this.sexo}, ${this.profissao}`)
    }
}

console.log(objeto2)
objeto2.exibirResumo()

//Modificando valores
let pessoa = {
    nome: 'José',
    idade: 45
}
console.log(pessoa.nome, pessoa.idade)

pessoa.nome = 'Fernanda'
pessoa.idade = '32'

console.log(pessoa.nome, pessoa.idade)