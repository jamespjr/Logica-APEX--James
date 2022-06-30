let n1 = parseInt(prompt("Digite o primeiro numero:"))
let n2 = parseInt(prompt("Digite o segundo numero"))
let n3 = parseInt(prompt("Digite o terceiro numero"))

if (n1 > n2 && n2 > n3){

 document.write(n1 +"<br>",n2 +"<br>",n3)

}else if(n1 > n2 && n2 < n3){
 
 document.write(n1 +"<br>",n3 +"<br>",n2)
}
else if (n2 > n1 && n1 > n3){

 document.write(n2 +"<br>", n1 +"<br>", n3)

}else if(n2 > n1 && n1 < n3){
 
 document.write(n2 +"<br>", n3 +"<br>", n1)
}
else if (n3 > n1 && n1 > n2){

 document.write(n3 +"<br>". n1 +"<br>", n2)

}else if(n3 > n1 && n1 < n2){
 
 document.write(n3 +"<br>", n2 +"<br>", n1)
}
