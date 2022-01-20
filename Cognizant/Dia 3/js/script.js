/*
    var time = ['Kaue', 'Larissy', 'João', 'João','Paulo', 'Caroline', 'Giulia']


    function Time(){
        for(var i = 0; i < time.length; i++){
            console.log(time[i])
        }
    }
    console.log(Time())


    var soma = Array(10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110,
        120, 130, 140, 150, 160, 170, 180, 190, 200, 300, 400, 500, 800, 900, 1000)
        
        function Soma(){
            for(var i = 0; i < soma.length; i++){
                console.log(soma[i] + 2)
            }
        }
        console.log(Soma())



    var time = ['Kaue', 'Larissy', 'João', 'João','Paulo', 'Caroline', 'Giulia']

    time.forEach(function(pessoa, index){
        console.log(pessoa + ' ' + index)
    })


    var soma = Array(10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110,
        120, 130, 140, 150, 160, 170, 180, 190, 200, 300, 400, 500, 800, 900, 1000)
        
        function Soma(){

            soma.forEach(function(posicao){
                console.log(posicao + 2)
            })
            
        }
        console.log(Soma())


    var numeros1 = Array(10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110,
    120, 130, 140, 150, 160, 170, 180, 190, 200, 300, 400, 500, 800, 900, 1000)

    var numeros2 = Array()

    numeros1.forEach(function(a){
        
    numeros2.push(a + 2)
    
    })

    console.log(numeros2)


    var numeros1 = Array(10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110,
        120, 130, 140, 150, 160, 170, 180, 190, 200, 300, 400, 500, 800, 900, 1000)

    var numeros2 = []

    function somaepush(array){

        numeros1.forEach(function(a){
            
            numeros2.push(a + 2)
            
        })

        return numeros2
    }

    console.log (somaepush())

    })

    document.getElementById('.texto')
    document.getElementByClassName('texto')
    document.getElementsByTagName('texto')

    document.querySelector('#id')


    document.querySelector().innerText = 'Novo texto' //alterar texto de site

    document.querySelector("#kyd2ac6m")

    document.addEventListener('click', function(e){
    console.log(e.target)

    ocument.querySelector('.classe .classeBotaoSite').addEventListener('click', function(){
    console.log(addEventListener('.classeDoTextoSite'). innerText)
    
    })

    e.target.innerText = "OBA"
    
    
    window.addEventListener('DOMContentLoaded', function(){ //Espera a pagina html

            var imagem_ligado =  'https://www.w3schools.com/js/pic_bulbon.gif'
            var imagem_desligado = 'https://www.w3schools.com/js/pic_bulboff.gif'
        
            document.querySelector("#botao").addEventListener('click', function(e){

            if(e.target.innerText == 'Acenda a luz'){
                document.querySelector('#myImage').src = imagem_ligado

                e.target.innerText = 'Apague a luz'
            }else{
                document.querySelector('#myImage').src = imagem_desligado

                e.target.innerText = 'Acenda a luz'
            }
        })
    })


    //Lê todos os botões da classe .add_to_cart_button'

    https://pomaje.us.instawp.xyz/?product_cat=hoodies

    document.querySelectorAll('.add_to_cart_button').forEach(function(botao){
        botao.addEventListener('click', function(){
            console.log('cliquei')
        })
    })

*/