let votoLula = 0
let votoBolsonaro = 0
let votoCiro = 0
let votonulo = 0

let quantidadeeleitores = parseInt(prompt('Digite a quantidade de eleitores:'))

for (let i = 0; i < quantidadeeleitores; i++) {
        
        let voto = prompt("1 - Lula\n2 - Bolsonaro\n3 - Ciro Gomes")
        
        if (voto == "1") {
                votoLula++
        
        }else if (voto == "2") {
                votoBolsonaro++
        
        }else if(voto == "3"){
                votoCiro++
        
        }else{
                votonulo++
        }
}

document.write("A quantidade de votos para cada candidato foi de:<br>")
document.write('---------------------------------------------------<br>')
document.write(`O numero de votos de Lula é: ${votoLula}<br>`)
document.write(`O numero de votos de Bolsonaro é: ${votoBolsonaro}<br>`)
document.write(`O numero de votos de Ciro Gomes é: ${votoCiro}<br>`)