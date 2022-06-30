let n1 = parseFloat(prompt("Qual sua primeira nota"))
let n2 = parseFloat(prompt("Qual sua segunda nota"))
let n3 = parseFloat(prompt("Qual sua terceira nota"))
let media = (n1 + n2 + n3)/3
let faltas = parseInt(prompt("Qual seu numero de faltas"))

if(media >= 7 && faltas < 50){
    alert("VOCÊ FOI APROVADO!PARABENS!!")
}
else(alert("Você está em recuperação, boa sorte nas provas finais"))