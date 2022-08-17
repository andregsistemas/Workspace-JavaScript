let produto = {
    descricao: 'Notebook',
    preco: 1800,
    detalhes:{
        fabricante: 'abc',
        modelo: 'xyz'
    }
}

//Para extrair destructuring de uma Array utiliza-se [] e para extrair de um  objeto utiliza-se {}

//let { descricao, preco} = produto
//console.log(descricao, preco)

//let { descricao: d, preco: p} = produto
//console.log(d, p)

//let { descricao: d, preco: p, desconto} = produto
//console.log(d, p, desconto)

//let { descricao: d, preco: p = 1000, desconto = 5} = produto
//console.log(d, p, desconto)

let{detalhes: {fabricante: f, modelo: m}} = produto
console.log(f, m)