function acionaCampo(){
    document.getElementById('campo').style.backgroundColor = "yellow"
}

function validaCampo(){
    
    var valorCampo = document.getElementById('campo').value

    if(valorCampo.length < 3){

        document.getElementById('campo').style.backgroundColor = "red"
    
    }else{
        document.getElementById('campo').style.backgroundColor = "green"
    }

}