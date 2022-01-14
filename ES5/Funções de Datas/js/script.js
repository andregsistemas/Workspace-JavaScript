var data = new Date()

document.write(data.getDate() + '/' + data.getMonth() + '/' + data.getFullYear() + '<br>')
document.write('<br>')
document.write(data.getHours() + ':' + (data.getMinutes()) + ':' + (data.getSeconds()))
document.write('<br> <hr>')

document.write('<h3> Adicionar ou remover dias </h3> <br> <hr>')

document.write(data.toString())
data.setDate(data.getDate() +720)
document.write('<hr>')
document.write(data.toString())
document.write('<hr><br>')

document.write('<h3> Adicionar ou remover meses </h3> <br> <hr>')

document.write(data.toString())
data.setMonth(data.getMonth() +1)
document.write('<hr>')
document.write(data.toString())
document.write('<hr><br>')

document.write('<h3> Adicionar ou remover anos </h3> <br> <hr>')

document.write(data.toString())
data.setFullYear(data.getFullYear() -1)
document.write('<hr>')
document.write(data.toString())

document.write('<h3> Quandos dias há de diferente entre 15/01/2017 e 23/02/2017? </h3> <br> <hr>')

var data1 = new Date(2017, 0, 15)
var data2 = new Date(2017, 1, 23)

document.write(data1.toString())
document.write('<hr>')
document.write(data2.toString())

document.write('<hr> <br> <hr>')

document.write('<h3> Convertar as datas para um valor que possa ser calculado </h3> <br> <hr>')

document.write(data1.getTime())
document.write('<hr>')
document.write(data2.getTime())

document.write('<hr> <br> <hr>')
var milissegundos_entre_datas = Math.abs(data1.getTime() - data2.getTime())
document.write(milissegundos_entre_datas)

//1 de Janeiro de 1970


document.write('<h3> Encontrar a quantidade de milessgundos entre data1 e data2 </h3> <br>')
document.write('<h3> 1 dia tem 24 horas e cada hora tem 60 min e cada min tem 60 sec e cada sec 1000 milesegundos </h3> <br> <hr>')
document.write('<h3> Então quantos milessegundo existem em um dia </h3> <br>')

var milissegundos_por_dia = (1*24*60*60*1000)
document.write('1 dia tem ' + milissegundos_por_dia + ' milissegundos')
document.write('<hr> <br> <hr>')

document.write('A diferença entre data 1 e data 2 é de: ' + Math.ceil(milissegundos_entre_datas / milissegundos_por_dia) + ' dias')