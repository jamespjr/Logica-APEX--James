let l1 = parseInt(prompt("Tamanho do primeiro lado"))
let l2 = parseInt(prompt("Tamanho do segundo lado"))
let l3 = parseInt(prompt("Tamanho do terceiro lado"))

if (l1 == l2 && l1 == l3){
    document.writeln("O triangulo é do tipo Equilatero")}
else if (l1!=l2 && l1!=l3) {
    document.write("O triangulo é do tipo Escaleno")
}
else{document.write("O triangulo é do tipo Isosceles")}