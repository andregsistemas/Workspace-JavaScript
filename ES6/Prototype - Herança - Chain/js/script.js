Object.prototype.atributo50 = 'Z' //Cuidado pois esta criando um atributo/Metodo global para a aplicação

let animal = {
    atributo1: 'a'
}
let vertebrado = {
    __proto__: animal, atributo2: 'b'
}
let ave = {
    __proto__: vertebrado, atributo3: 'c',  atributo2: 'x'
}

console.log(ave.atributo3, ave.atributo2, ave.atributo1, ave.atributo50)