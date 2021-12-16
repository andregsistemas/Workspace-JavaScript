function calcularAreaTerreno ( x, y ) {

    //lógica
    var area = x * y

    return area

}
var largura = prompt("Digite a largura do terreno em metros")
var comprimento = prompt("Digite o comprimento do terreno em metros")

var area = calcularAreaTerreno(largura, comprimento)

document.write('O terreno possui ' + area + ' metros quadrados')