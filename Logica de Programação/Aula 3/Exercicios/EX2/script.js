let listanotas = []
let continuar = true


//media = listanotas/listanotas.leig

while (continuar == true) {
    let nota = parseFloat(prompt("Quais são suas notas?"))
    listanotas.push(nota)
    continuar = confirm("Possui mais alguma nota?")
}
function CalculoMedia() {
    let somanotas = 0
    for (let i = 0; i < listanotas.length; i++) {
        somanotas += listanotas[i];
    }
    return somanotas / listanotas.length
}


document.write("O calculo da media é igual a " + CalculoMedia())


