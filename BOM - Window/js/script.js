var janela

function abrirPopUp(){
    janela = window.open('http://www.google.com', 'nova_janela', 'width=200, height=100') //Espera 4 parametros, mas todos não são obrigatórios. Ver documentação 
}

function fecharPopUp(){
    janela.close()
}