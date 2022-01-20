
/*

var bt = document.querySelector('#buttons').innerText.split(' ')
var resultado = document.querySelector('#buttons').innerText
var bt2 = document.querySelectorAll('#buttons button')


if (document.body.innerText.includes('Faça um array')) {
  console.log(resultado)
};
bt2[0].addEventListener('click', function() {
  console.log(bt[0])
})

bt2[1].addEventListener('click', function() {
  console.log(bt[1])
})

bt2[2].addEventListener('click', function() {
  console.log(bt[2])
})

bt2[3].addEventListener('click', function() {
  console.log(bt[3])
})

bt2[4].addEventListener('click', function() {
  console.log(bt[4])
})

*/

//Resolução


    var botoes = []

    document.querySelectorAll('#buttons button').forEach(function(btn){

        botoes.push(btn.innerText)

        btn.addEventListener('click', function(){
            console.log(btn.innerText)
        })

    })

    console.log(botoes)

var b1 = document.querySelectorAll(".ajax_add_to_cart")
var b2 = document.querySelectorAll(".silgle_add_to_cart_bbutton")

b1.forEach(function(btn){

  btn.addEventListener('click', function(){
    
  gtag('event', 'conversion', {'send_to': 'AW-10839633196/YLoTCNONm5EDEKza3rAo'});

  })
})

b2.forEach(function(btn){

  btn.addEventListener('click', function(){
    
  gtag('event', 'conversion', {'send_to': 'AW-10839633196/YLoTCNONm5EDEKza3rAo'});

  })
})
<script>

window.addEventListener('DOMContentLoaded', function(){

    var b1 = document.querySelectorAll(".ajax_add_to_cart")
		var b2 = document.querySelectorAll(".single_add_to_cart_button")

		b1.forEach(function(btn){

		btn.addEventListener('click', function(){

      gtag('event', 'conversion', {'send_to': 'AW-10839668501/tcWECI7pzJEDEJXu4LAo'});

		})

	})

		b2.forEach(function(btn){

	  	btn.addEventListener('click', function(){

        gtag('event', 'conversion', {'send_to': 'AW-10839668501/tcWECI7pzJEDEJXu4LAo'});

	  })

  })

})

</script>


window.addEventListener('DOMContentLoaded', function(){
		 
    document.querySelectorAll("[class*='add_to_cart']").forEach(function(btn){ // [class*='add_to_cart'] Busca qualquer classe contendo o nome especificado.

      btn.addEventListener("click", function(){

        gtag('event', 'conversion', {'send_to': 'AW-10839633196/L7NLCLWCzpEDEKza3rAo'});
     
      })
  
    })

})
	 

