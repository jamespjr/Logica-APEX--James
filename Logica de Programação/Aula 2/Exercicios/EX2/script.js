let nota

do{
    nota = parseFloat(prompt("Digite um numero"))
    
    if(nota < 0 || nota > 10){
        alert("Numero invalido, tente novamente")
    }else{
        break
    }
}while(true)

alert("Numero esta dentro dos pedidos: " + nota)
