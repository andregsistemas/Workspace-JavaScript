/*var CampoVerde = []
  
console.log(botoes)

window.addEventListener('DOMContentLoaded', function(){

  var pagina = document.querySelector('#values').innerText;
  var valor = document.querySelector('#values').innerText.split('\n');
  var click = document.querySelectorAll('#buttons a');
  
  if (window.location.pathname.includes('index')) { 
    console.log(pagina)

    click[0].addEventListener('click', function() {
      console.log(valor[0])
    })

    click[1].addEventListener('click', function() {
      console.log(valor[1])
    })

    click[2].addEventListener('click', function() {
      console.log(valor[2])
    })

    click[3].addEventListener('click', function() {
      console.log(valor[3])
    })

    click[4].addEventListener('click', function() {
      console.log(valor[4])
    })
  }

})

*/

//Correção

window.addEventListener('DOMContentLoaded', function(){

  var campoVerdes = []
  var textos = document.querySelectorAll('#values span')

  document.querySelectorAll('#buttons a').forEach(function(btn, pos){

       campoVerdes.push(textos[pos].innerText)

       btn.addEventListener('click', function(){
            console.log(textos[pos].innerText)
      })
  })
  console.log(campoVerdes)
})
