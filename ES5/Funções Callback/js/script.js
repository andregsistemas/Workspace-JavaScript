function exibirArtigo(id, callbackSucesso, callbackErro){
    //lógica: Recuperar o ID via requisição do http
    if(true){
        callbackSucesso('Funções de callback em Js', 'Funções de callback são muito utilizadas....')
    }else{
        callbackErro('Erro ao recuperar os dados!')
    }
}

var callbackSucesso = function(titulo, descricao){
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr>')
    document.write('<p>' + descricao + '</p>')
}
var callbackErro = function(erro){
    document.write('<p><b>Erro: </b>' + erro + '</h1>')
}

exibirArtigo(1, callbackSucesso, callbackErro)