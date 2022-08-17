//Array
/*
let arr = [10, 20, 30, 40]

let [a, ...resto] = arr

console.log(a)
console.log(resto)
*/

//objeto

let obj = {
    a:10, b:20 ,c:30 ,d:40
}

let{a, ...z} = obj
console.log(a)
console.log(z)