let pessoa = {
    nome: 'Maria',
    idade: 25
}
console.log(pessoa)

//----------------------------------------------------------------

pessoa.sexo = 'Feminino'

console.log(pessoa)

pessoa.dizerOi = () => console.log('Olá, tudo bem com você?') //cria uma função (Arrow Finction).

pessoa.dizerOi()