var altura = 0
var largura = 0
var vidas = 1 //Variavel global que controla a quantidade de vida.


function redimencionaJanela(){
    altura = window.innerHeight
    largura = window.innerWidth
}

redimencionaJanela()

function posicaoRandomica(){
   
   //remover o mosquito anteriro (caso exista)
    var idMosca = document.getElementById('mosquito')
    
    if(idMosca){
        idMosca.remove()

        if(vidas > 3){
            alert('Game Over!')
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