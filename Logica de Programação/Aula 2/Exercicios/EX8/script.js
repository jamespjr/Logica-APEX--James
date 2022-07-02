let continuar = true
let listanotas = []


//adicionar na lista
while(continuar == true){
    
    let nota = parseFloat(prompt("Digite uma nota:"))

    listanotas.push(nota)

    continuar = confirm(`Clique em OK para continuar informando as notas`) //corfirmar se é pra continuar ou não.
}


//calcular media
let somanotas = 0

for (let i = 0; i < listanotas.length; i++) {
    somanotas += listanotas[i]
}

document.write("A media é: " + (somanotas/listanotas.length))