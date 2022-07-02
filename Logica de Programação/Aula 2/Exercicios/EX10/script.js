let listaTemperaturas = []
let continuar = true
let menorTemperatura = 999
let maiorTemperatura = -100
let somaTemperaturas = 0

//adiciona as temperaturas na lista
while (continuar == true) {
   let temperatura = parseFloat(prompt('Digite uma temperatura'))
   listaTemperaturas.push(temperatura)
   continuar = confirm('Deseja continuar adicionando temperaturas?')
}

for (let i = 0; i < listaTemperaturas.length; i++) {
   if (listaTemperaturas[i] < menorTemperatura) {
      menorTemperatura = listaTemperaturas[i]
   }
   if (listaTemperaturas[i] > maiorTemperatura) {
      maiorTemperatura = listaTemperaturas[i]
   }
   somaTemperaturas += listaTemperaturas[i]
}

document.write(`MENOR TEMPERATURA: ${menorTemperatura}<br>
MAIOR TEMPERATURA: ${maiorTemperatura}<br>
MEDIA:  ${somaTemperaturas / listaTemperaturas.length}
`)
