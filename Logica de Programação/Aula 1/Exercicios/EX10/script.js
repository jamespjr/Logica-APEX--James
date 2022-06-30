let sexo =prompt("Qual o seu genêro? Masculino ou feminino?")
let alt = parseFloat(prompt("Qual é a sua altura"))

if(sexo == "Feminino "){
    document.write("O seu peso ideal é igual a " + ((62.1*alt)-58))
}
else if(sexo == "Masculino" ){
    document.write("O seu peso Ideal é igual a " + ((72.7*alt)-44.7))
}