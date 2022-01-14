/*

//Tabuada do 1 e do 2 utilizando laços de repetição simples;
//Codigos muito verboso

for(var x = 1; x <= 10; x++){
    document.write('1 x ' + x + '=' + (1 * x) + '<br>')
}

document.write('<hr>')

for(var x = 1; x <= 10; x++){
    document.write('2 x ' + x + '=' + (2 * x) + '<br>')
}

*/

for(var y = 1; y <= 10; y ++){
    
    for(var x = 1; x <= 10; x++){
        document.write(y + ' x ' + x + '=' + (y * x) + '<br>')
    }

    document.write('<hr>')

}