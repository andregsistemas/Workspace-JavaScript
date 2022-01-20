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