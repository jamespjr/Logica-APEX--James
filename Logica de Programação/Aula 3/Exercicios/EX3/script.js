let listaidade = []
let continuar = true
let maior18 = 0
let menor18 = 0

while (continuar ==  true) {
    let idade = parseInt(prompt("Qual sua idade?"))
    listaidade.push(idade)
    continuar = confirm("Deseja digitar mais alguma idade?")
}
function verificar(idade) {
    if (idade < 18) {
        menor18++
    }   else{
        maior18++
    }
}
for (let i = 0; i < listaidade.length; i++) {
    verificar(listaidade[i])
    
}
document.write("MENORES DE IDADE: " + menor18 + "<br>" )
document.write("MAIORES DE IDADE: " + maior18 + "<br>" )


