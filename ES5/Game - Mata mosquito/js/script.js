var altura = 0
var largura = 0
var vidas = 1 //Variavel global que controla a quantidade de vida.
var tempo = 15
var criaMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    criaMoscaTempo = 1500
}else if(nivel === 'dificil'){
    criaMoscaTempo = 1000
}else if(nivel === 'chucknorris'){
    criaMoscaTempo = 750
}

function redimencionaJanela(){
    altura = window.innerHeight
    largura = window.innerWidth
}

redimencionaJanela()

var cronometro = setInterval(function(){
    //Decremento do cronometro do jogo
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro) //limpa a função cronometro da memória
        clearInterval(criaMosca) //limpa a variavel criaMosca da memória (Esta dentro do html)
        window.location.href = 'vitoria.html'
    }else{
        /*
            O atributo innerHTML recupera valor entre as tags.
            ID recuperado do Span dentro do HTML.
        */
        document.getElementById('cronometro').innerHTML = tempo
    }
    
    
},1000)

function posicaoRandomica(){
   
   //remover o mosquito anteriro (caso exista)
    var idMosca = document.getElementById('mosquito')
    
    if(idMosca){
        idMosca.remove()

        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('v' + vidas).src="../img/coracao_vazio.png"

            vidas++
        }
        
    }

    var posicaoX = Math.floor((Math.random() * largura) - 90)
    var posicaoY = Math.floor((Math.random() * altura) - 90)
    
    //Operador ternário para que a imagem não fique com a posição menor que 0 em X e Y
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)
    
    //Seção de criação elementos programáticos html utilizando DOM
    var mosquito = document.createElement('img')
    mosquito.src = '../img/mosca.png'
    /*
        Há necessidade de se colocar um espaço entra a concatenação
        da chamada das funções para que o javaScript identifique que
        são elementos diferentes.
    */
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() 
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){ //caso seja clicado o elemento mosquito é removido.
        this.remove()
    }

    document.body.appendChild(mosquito)
    
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    console.log(classe)
    /*
        Switch verifica qual elemento esta armazenado na váriavel
        classe e acessa atraves do DOM a função posicaoRandomica no HTML
        e assim seleciona as classes dentro do style.css contendo
        diferentes tamanhos.
    */
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    console.log(classe)
    /*
        Switch verifica qual elemento esta armazenado na váriavel
        classe e acessa atraves do DOM a função posicaoRandomica no HTML
        e assim seleciona as classes dentro do style.css contendo
        diferentes tamanhos.
    */
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}