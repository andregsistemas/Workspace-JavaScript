/*
    Template Strings são strings que permitem expressões embutidas.
    Você pode utilizar string multi-linhas e interpolação de string com elas.

    Template strings são envolvidas por (acentos graves) (` `) em vez de
    aspas simples ou duplas. Template strings podem possuir placeholders.
    Estes são indicados por um cifrão seguido de chaves (${expression}).
    As expressões nos placeholders, bem como o texto em volta delas são
    passados a uma função. A função padrão apenas concatena as partes em
    uma string única. Se existir uma expressão precedendo a template string
    (função tag exemplo), a template string é definida como "tagged template string".
    No caso, a expressão tag (geralmente uma função) é chamada pela template string
    processada, que você pode manipular antes de produzir o resultado.
*/

let nome = "André"

//console.log('Oi ' + nome + ', tudo bem?')
console.log(`Oi ${nome}, tudo bem?`)
console.log(`7 + 7 = ${7 + 7}`)

function calcular(x, y){
    return x * y
}
console.log(`A multiplicação de 8 x 8 é igual a ${calcular(8, 8)}`)