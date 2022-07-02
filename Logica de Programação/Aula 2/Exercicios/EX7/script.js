let numero
let par = 0
let impar = 0

for (let i = 1; i <= 10; i++) {
    numero = parseInt(prompt("Escolha um numero"))
    if(numero % 2 == 0){
        par++
    }else
    impar++

} 

document.write(`A quantidade de numeros pares é ${par}<br>`)
document.write(`A quantidade de numeros impares é ${impar}`)