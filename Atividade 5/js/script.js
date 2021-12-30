var objetos = Array('Cadeira', "impressora", 'Garfo')

function adicionarObjetos() {

    //recupera o valor inserido no campo id objetos para
    var objeto = document.getElementById('objeto').value

    //Caso possua algum valor preenchido
    if (objeto != ''){

        /*
            Verifica se o valor já não foi inserido anteriormente
            se sim, informa que o valor já existe, se não insere novo valor
        */
       if(objetos.indexOf(objeto) !== -1){
           alert('Objeto já foi adicionado!')
       }else{
           objetos.push(objeto)
           console.log(objetos)
           document.getElementById('objeto').value = ''
       }

    }else{
        alert('Informe um objeto válido!')
    }
}

function ordenarObjetos(){
    objetos.sort()
    console.log(objetos)
}