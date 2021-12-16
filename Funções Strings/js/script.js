//Propriedade (Atributo) lenght retorna a quantidade de caracteres de uma strings

var nome = 'André Gonçalves'

document.write('<h2> Atriburo lenght </h2>')
document.write(nome.length)
document.write('<br>')

//Metodo charAt retorna um caractere especifico de um indice
document.write('<h2> Método CharAt </h2>')
document.write(nome.charAt(4))
document.write('<br>')

//Metodo indexOf retorna a posição de um caractere especifico da string
document.write('<h2> Método indexOf </h2>')
document.write(nome.indexOf('d'))
document.write('<br>')

//Metodo replace procura um valor especifico em uma strgin e substitui por outra string
document.write('<h2> Método replace </h2>')
document.write(nome.replace('André Gonçalves' , 'André Alves Gonçalves'))
document.write('<br>')

//Metodo substr procura um valor especifico em uma strings e substitui por outra string
document.write('<h2> Método substr </h2>')
document.write(nome.substr(0, 7))
document.write('<br>')

//Metodo toLowerCase converte todos os caracteres de uma string em minusculo
document.write('<h2> Método toLowerCase </h2>')
document.write(nome.toLowerCase())
document.write('<br>')

//Metodo toUpperCase converte todos os caracteres de uma string em maiusculo
document.write('<h2> Método toUpperCase </h2>')
document.write(nome.toUpperCase())
document.write('<br>')

//Metodo trim remove os espaços em brancos das extremidades da string
document.write('<h2> Método trim </h2>')
document.write('- ' + nome.trim() + ' -')
document.write('<br>')