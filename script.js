/* 
Faça um programa JavaScript em que o usuário informará 3 números e o programa calculará a média aritmética desses números.
*/

let primeiroNumero = parseInt(prompt('Digite aqui o primeiro número'))
let segundoNumero = parseInt(prompt('Digite aqui o segundo número'))
let terceiroNumero = parseInt(prompt('Digite aqui o terceiro número'))

let media = (primeiroNumero + segundoNumero + terceiroNumero)/3

alert(`A média dos três números informados é ${media}`)