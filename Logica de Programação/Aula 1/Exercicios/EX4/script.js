let n1 = parseFloat(prompt("Primeiro numero: "))
let n2 = parseFloat(prompt("Segundo numero: "))
let n3 = parseFloat(prompt("Terceiro numero: "))

if(n1 > n2 && n1 > n3){
    document.write("O numero " + n1 + " é o maior numero entre os 3")
}
else if(n2 > n1 && n2 > n3){
    document.write("O numero " + n2 + " é o maior numero entre os 3")
}
else if(n3 > n1 && n3 > n2){
    document.write("O numero " + n3 + " é o maior numero entre os 3")
}



