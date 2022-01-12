

setInterval(function(){
    document.write('Teste' + '<br>')
}, 2000)



var i = 5

var x = setInterval(function(){
    document.write((i) + '<br>')
    i--

    if(i === 0){
        clearInterval(x) //interrompe contagem do setInterval
    }

}, 1000)



