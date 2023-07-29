var nome = window.prompt("Qual é seu nome?")
window.alert("É um grande prazer te conhecer, " + nome)

var n1 = Number.parseFloat(window.prompt("Digite um n1: "))
var n2 = Number.parseFloat(window.prompt("Digite um n2: ")) /* Number.parseFloat trata o dado, ou seja, uma String agora é um dado do tipo Float, podemos usar tbm só Number*/

var media = n1 + n2

window.alert(`A soma de ${n1} + ${n2} = ${media}`)




