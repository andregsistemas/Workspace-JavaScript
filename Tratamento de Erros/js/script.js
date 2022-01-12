var video = Array()

video[1] = Array()
video[1]['nome'] = 'Dragon Ball Z'
video[1]['categoria'] = 'Anime'



function getVideo(video){
    

    try{

    //logica
    //http
    console.log(video[0]['nome'])
    }catch(e){
        tratarErro(e)
        console.log('Agora sim podemos tratar esse erro')
        throw new Error('Houve um erro, mas não se preocupe, estamos trabalhando nisso agora!!!')//força o erro e a parada da aplicação
    }finally{
        console.log('Sempre passa por aqui (try / catch)')
    }

    console.log('A aplicação não morreu')
}

function tratarErro(e){
    //Lógica para registrar o erro no servidor
    console.log(e)
}

getVideo(video)