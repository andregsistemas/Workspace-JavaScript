function calcular(tipo, valor){
    //Verifica qual tipo estasendo utilizado, se é ação ou valor
    
    if(tipo === 'acao'){

        if(valor === 'c'){
            //limpar o visor (id="resultado")
            document.getElementById('resultado').value = ''
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/'){
           
            var contem = document.getElementById('resultado').value
            /*Valida se o operador + , -, * ou / já foram digitados na
            expressão da calculadora através da função include() atraves da variavel contem*/
            if(contem.includes('+') || contem.includes('-') || contem.includes('*') || contem.includes('/')){
                return document.getElementById('resultado').value
            }else{
                document.getElementById('resultado').value += valor
            }
            
        }
        if(valor === '.'){
            var contem = document.getElementById('resultado').value
            contem.includes('.') ? document.getElementById('resultado').value : document.getElementById('resultado').value += valor

        }

        if(valor === '='){
            //var valor_campo = eval(document.getElementById('resultado').value)
            //pode-se converter com eval() direto na declaração da variavel
            var valor_campo = document.getElementById('resultado').value
            document.getElementById('resultado').value = eval(valor_campo) //pode alterar a variavel direto no input resultado
        }

    }else if(tipo === 'valor'){
        
        //var valor_campo = document.getElementById('resultado').value
        //document.getElementById('resultado').value = valor_campo + valor
        
        //Concatena o valor armazenado na var com o valor digitado.
        document.getElementById('resultado').value += valor
    }

}