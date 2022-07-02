let senha
let usuario

do{
    usuario = prompt('Digite seu usuario: ')
    senha = prompt("Digite sua senha: ")
    
    if(usuario == senha){
        alert("Senha ou Usuario incorretos, por favor, tente novamente")
    }else{
        break
    }

}while (true) {
    alert("Seja Bem Vindo")
}
