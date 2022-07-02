function linhatabuada(tabuada,posicao) {
    return document.write(`${tabuada} X ${posicao} = ${tabuada * posicao} <br>`)
}

let numerotabuada = parseFloat(prompt("Digite o numero da tabuada"))

for (let i = 1; i <= 10; i++) {
    linhatabuada(numerotabuada,i)

}