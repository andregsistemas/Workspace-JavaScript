var listaFrutas = Array()

listaFrutas[0] = 'Banana'
listaFrutas[1] = 'Maça'
listaFrutas[2] = 'Morango'
listaFrutas[3] = 'Uva'

for(y = 0; y < listaFrutas.length; y++){
    document.write(listaFrutas[y] + '<br>')
}

document.write('<hr>')

/*Tabuada usando while*/

var x = 1
var y = 1

while(x <= 10){
   
    
    y = 1

    while(y <= 10){
        
        document.write(x + ' x ' + y + ' = ' + (x * y) + '<br>')

        y++
    }

    
    document.write('<hr>')

    x++
}





/*
for(var y = 1; y <= 10; y ++){
    
    for(var x = 1; x <= 10; x++){
        document.write(y + ' x ' + x + '=' + (y * x) + '<br>')
    }

    document.write('<hr>')

}
*/