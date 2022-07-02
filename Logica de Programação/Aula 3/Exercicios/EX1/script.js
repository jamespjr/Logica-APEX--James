let n = parseFloat(prompt("Escolha um numero para resolver: "))
let n2 = parseFloat(prompt("Escolha um outro numero: "))



function calculadora(n,n2,operacao) {

    if(operacao == "+"){
        
        document.write(`A soma é igual a: ${n + n2} <br>`)
    
    }  else if(operacao == "-"){
        document.write(`A subtração é igual a: ${n - n2}<br>`)
    
    }  else if(operacao == "/"){
        document.write(`A divisão é igual a: ${n / n2}<br>`)
    
    }  else if(operacao == "*"){
        document.write(`A multiplicação é igual a: ${n * n2}<br>`)
    }
}
    
    calculadora(n,n2,"+")
    calculadora(n,n2,"-")
    calculadora(n,n2,"/")
    calculadora(n,n2,"*")
    