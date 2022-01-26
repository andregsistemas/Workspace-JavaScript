//Valores das funções podem ser atribuidos como default. Caso não ser atribuido nenhum valor, ele irá iniciar acom o valor default. 
function contarUmaHistoria(personagem = 'Fubá', atividade = 'correr no parque', nome_dono = 'André'){
    document.write(`Era uma vez um cachorro chamado ${personagem}, ele adorava ${atividade},
    seu dono era o ${nome_dono} e eles viveram felizes para sempre.`)
}

contarUmaHistoria('Repolho', 'enterrar ossos', 'Pedro')