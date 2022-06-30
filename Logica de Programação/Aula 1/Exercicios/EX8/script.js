let pedido = prompt("Disponiveis no nosso cardapio\n1 - Pizza\n2 - Pão de Queijo\n3 - Macarrão\n4 - Pastel")
let din = parseFloat(prompt("Quanto o senhor estará dando ao caixa?"))


if (pedido == '1'){
    if(din < 12.00){
        alert("Você não possui dinheiro suficiente para comprar a Pizza")
    
    }else if(din == 12.00){
        alert("Boa pizza e um bom dia")
    
    }else{
        alert("Seu troco é igual a " + (din - 12.00).toFixed(2) + " reais")

    }}
if (pedido == '2'){
        if(din < 4.00){

            alert("Você não possui dinheiro suficiente para comprar o Pão de Queijo")
        }else if(din == 4.00){

            alert("Aproveite o seu Pão de Queijo e um bom dia")
        
        }else{alert("Seu troco é igual a " + (din - 4.00).toFixed(2) + " reais")
    
        }}
    
if (pedido == '3'){
        if(din < 16.00){
            alert("Você não possui dinheiro suficiente para comprar o Macarrão")
        }else if(din == 16.00){
            alert("Aproveite o seu macarrão e um bom dia")
        }else{alert("Seu troco é igual a " + (din - 16.00).toFixed(2) + " reais")
    
        }}
    
if (pedido == '4'){
        if(din < 4.50){
            alert("Você não possui dinheiro suficiente para comprar o Pastel")
        }else if(din == 4.50){
            alert("Bom pastel e um bom dia")
        }else{alert("Seu troco é igual a " + (din - 4.50).toFixed(2) + " reais")
    
        }}
    