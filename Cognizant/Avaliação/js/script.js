
window.addEventListener('DOMContentLoaded', function(){ 

    var teste = Array()

    teste = document.querySelector('#buttons')

    console.log(teste)

    for(var i = 0; i < teste.length; i++){
        console.log(teste)
   }


    /*
    document.querySelector('#buttons').addEventListener('click',function(){ 

        console.log(document.querySelector('#buttons')) 
    
    })


    var soma = Array(10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110,
        120, 130, 140, 150, 160, 170, 180, 190, 200, 300, 400, 500, 800, 900, 1000)
        
        function Soma(){
            for(var i = 0; i < soma.length; i++){
                console.log(soma[i] + 2)
            }
        }
        console.log(Soma())

    */

})
document.querySelector("#buttons > button:nth-child(1)")