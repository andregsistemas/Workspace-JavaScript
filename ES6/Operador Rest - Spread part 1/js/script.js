//contexto spreads

//string
let tituloArtigo = 'Como utilizar o operador rest/spread'

console.log(tituloArtigo)
console.log(...tituloArtigo)
console.log([...tituloArtigo])

//Arrays
let listaCursos1 = ['NodeJS e MongoDB', 'ES6, TypeScript e Angular 4']
let listaCursos2 = ['Multiplaforma Android/IOS', 'Introdução ao GNU/Linux']
let listaCursoCompleto = ['Web Completo', 'Android Completo', ...listaCursos1, ...listaCursos2]

console.log(listaCursoCompleto)

//Objetos

let pessoa = {nome: 'João', idade: 27}
let clone = {endereco: 'Rua Abc', ...pessoa}

console.log(clone)