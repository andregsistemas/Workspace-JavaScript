// Destructuring tira valores de dentro de uma estrutura, essa pode ser um array ou um object

let frutas = ['Abacaxi', 'Uva', 'Pera', 'Mamão']

//let [a, b,,c] = frutas // com o espaço entre as virgulas pode se pular um indice
let [a, b, c, d, e = 'Banana'] = frutas

//console.log(a, b, c, d, e)
let coisas = [['Abacaxi', 'Uva', 'Pera', 'Mamão'], ['Jose', 'Maria']]
let [,[, n2]] = coisas

console.log(n2)