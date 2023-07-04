const x = "10"

// checar se x é um número
if(!Number.isInteger(x)) {
    throw new Error("o valor de X não é um número inteiro!")
}

console.log("Continuando o código...")

