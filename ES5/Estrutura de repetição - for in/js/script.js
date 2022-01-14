//var listaConvidados = ['Jorge', 'Jamilton', 'José', 'Ana', 'Maria']

var listaConvidados = Array()

listaConvidados[0] = 'Jorge'
listaConvidados[10] = 'Jamilton'
listaConvidados['zebra'] = 'José'
listaConvidados[-1] = 'Ana'
listaConvidados[true] = 'Maria'

console.log(listaConvidados)

for(var x in listaConvidados){
    console.log('Índice ' + x + ' valor ' + listaConvidados[x])
}