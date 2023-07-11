const url = require('url')
const address = 'https://www.meusite.com.br/catalg?produtos=cadeira'
const parsedUrls = new url.URL(address)

console.log(parsedUrls.host)
console.log(parsedUrls.hostname)
console.log(parsedUrls.search)
console.log(parsedUrls.searchParams)
console.log(parsedUrls.searchParams.get('produtos'))