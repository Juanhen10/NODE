// mais de um valor
const x = 10
const y = "algum texto"
const z = [1, 2]

console.log(x,y,z)

// contagem de impressões
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

// variavel entre string
console.log("O nome é %s, ele é programdor", y)

// Limpar o console
setTimeout(() =>{
    console.clear()
},2000)