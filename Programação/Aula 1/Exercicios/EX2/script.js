let nota1 = parseFloat(prompt("Nota da primeira prova: "))
let nota2 = parseFloat(prompt("Nota da segunda prova: "))
let nota3 = parseFloat(prompt("Nota da terceira prova: "))
let nf = (nota1 + nota2 + nota3)/3

if (nf < 7) {
    document.write("Você foi reprovado" )
}
else if (nf == 7) {
    document.write("Voce passou com media igual a 7")
}
else {
    document.write("Passou com nota superior a 7")
}
