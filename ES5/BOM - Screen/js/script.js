var altura = window.screen.availHeight
var largura = window.screen.availWidth

document.write('A altura do navegador é de ' + altura + ' pixels.' + '<br>')
document.write('A largura do navegador é de ' + largura + ' pixels.' + '<br>')

if (largura < 500){
    document.write('Lógica para impressão do menu versão mobile')
}else{
    document.write('Lógica para impressão do menu versão web')
}