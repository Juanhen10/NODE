const path = require("path")

// path absoluto
console.log(path.resolve('teste.txt'))

// formar path
const midfolder = "relatorios"
const fileName = "juan.txt"

const finalPath = path.join("/", 'arquivos', midfolder, fileName)

console.log(finalPath)