let n1 = parseFloat(prompt("Digite um Numero:"))
let n2 = parseFloat(prompt("Digite outro Numero:"))
let opcao = prompt("Operação Desejada:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n")

if (opcao == "1"){ 
    document.write("Soma igual a: " + (n1 + n2))
}
else if (opcao == "2"){
    document.write("Subtração igual a: " + (n1 - n2))
}

else if (opcao == "3"){
    document.write("Multiplicação igual a: " + (n1 * n2))
}

else if (opcao == "4"){
    document.write("Divisão igual a " + (n1 / n2))
}