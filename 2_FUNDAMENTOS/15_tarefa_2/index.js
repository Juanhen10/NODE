const inquirer = require("inquirer")
const chalk = require("chalk")

inquirer.prompt([
{
    name: "nome",
    message: "Qual seu nome? "
},
{
    name: "idade",
    message: "Qual sua idade? "
}
     
]).then((awswers) => {
    console.log(awswers)
    console.log(chalk.bgBlack.yellow(`Seu nome é ${awswers.nome} e sua idade: ${awswers.idade} `))
}).catch(err => console.log(err))

    
    