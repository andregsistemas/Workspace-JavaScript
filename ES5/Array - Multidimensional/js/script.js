//Arrays multidimmenssionais são Arrays que apontam para outro array

var listaCoisas = Array()

listaCoisas ['Frutas'] = Array()

listaCoisas ['Frutas'] [0] = 'Banana'
listaCoisas ['Frutas'] [1] = 'Maçã'
listaCoisas ['Frutas'] [2] = 'Morango'
listaCoisas ['Frutas'] [3] = 'Uva'

listaCoisas ['Pessoas'] = []

listaCoisas ['Pessoas'] [0] = 'João'
listaCoisas ['Pessoas'] [1] = 'José'
listaCoisas ['Pessoas'] [2] = 'Maria'

console.log(listaCoisas)

document.write(listaCoisas['Frutas'][3] + ' ' + listaCoisas['Pessoas'][1])