var nome = prompt('Me diga qual o seu nome?')
var altura = prompt('Me fala, qual é a sua altura em centimetros?')
var peso = prompt('Agora me fala qual é o seu peso?')
var M
var classificacao

altura = parseFloat(altura)
peso = parseFloat(peso)

altura = altura / 100

M = peso / (Math.pow(altura, 2)) // A função (Math.pow(altura, 2)) serve para calcular um numero com expoente.
M = M.toFixed(2) //A função toFixed(2) serve para mostrar a quantidade de casas decimais depois da vírgula

if(M <= 16){
    classificacao = 'baixo peso, muito grave!'
}else if( M >= 16 && M <= 16.99){
    classificacao = 'baixo peso, grave!'
}else if( M >= 17 && M <= 18.44){
    classificacao = 'baixo peso!'
}else if( M >= 18.50 && M <= 24.99){
    classificacao = 'Peso normal!'
}else if( M >= 25 && M <= 29.99){
    classificacao = 'Sobre peso!'
}else if( M >= 30 && M <= 34.99){
    classificacao = 'Obesidade grau I'
}else if( M >= 35 && M <= 39.99){
    classificacao = 'Obesidade grau II'
}else if( M >= 40){
    classificacao = 'Obesidade grau III'
}

document.write(nome + ', você possui índice de massa corporal igual a ' + M + ', sendo classificado como: ' + classificacao)