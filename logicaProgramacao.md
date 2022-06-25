# Aula 01

# O que é Logica de programação?

- É um conjunto de regras e passos que são aplicadas a um programa para poder resolver algum problema.
- São tecnicas que casualmente são aplicadas a vida real. Porém agora nã programação

### Exemplo Fazer um café:

- Pegar café
- Fazer café
- Colocar café no copo

---

# Algoritimos

- O nome algoritmos pode até dar um certo medo, mas não se preocupe, pois é bem fácil de entender. A utilização de um algoritmo facilita na interpretação da lógica, ele é responsável pelo passo a passo de sua aplicação.

- Podemos desenvolver um algoritmo de várias maneiras, podendo ser por desenhos, textos, linguagens de desenvolvimento, entre outras opções.

- Cada um possui uma lógica, chegar em um resultado significa que você conseguiu atingir objetivo, porém lembre-se que podemos aprimorar nossa lógica aprendendo as outras pessoas. Criar um algoritmo auxilia outras pessoas a compreenderem sua lógica e darem palpites para melhorar a estrutura do sistema.

- Um conceito muito utilizado é para poder entender o que é um algoritimo, é o uso de um fluxograma.

---

# Configurando o ambiente

- Verificar o Visual Studio Code
   - Verificar extensão `Live Server`
   - Verificar extensão `Error Lens`
   - Verificar extensão `Auto Rename Tag`
   - Verificar extensão `Bracket Highlighter`
   - Verificar extensão `Material Icon Theme`

---

# Linguagens utilizadas

- Para marcação (Corpo do website) `HTML`
- Para estilização (Estilos) `CSS`
- Para programação (JavaScript) `JavaScript`

---

# Conceitos Básicos

### Estrutura HTML

  - ```html 
    <!DOCTYPE html> Define que o documento é um HTML
    ``` 

  - ```html 
    <html></html> Define que o documento é um HTML
    ```

  - ```html 
    <head></head> Cabeçalho do site
    ```

  - ```html 
    <meta charset="UTF-8"> Responsável pelos caracteres especiais: ç.
    ```

  - ```html
    <meta name="viewport"> Responsável pelo conteudo responsivo
    ```
  - ```html
    <title> </title> Título do site, que ficará na aba do navegador
    ```
  - ```html
    <body> </body> Local onde serão exibidos os elementos da página
    ```

### Estrutura JavaScript

```html
<script>
   Código javascript
</script>

<script src="caminho do arquivo"></script>
```

---

# Exibindo mensagens e criando comentários

Para exibirmos um texto na tela, utilizamos o comando `alert` de forma bem simples

Dentro da tag `script` adicionar o comando

```javascript
// o comando alert ira mostrar um alerta na tela do usuario 
// com o texto informado entre as aspas

alert("Aprendendo JavaScript na Apex");
```
---

# Perguntando dados ao usuário

O comando prompt ira mostrar um caixa na tela do usuario com um espaço para ele escrever

```js
var nome = prompt("Qual o seu nome?");
```


# Escrevendo na tela do usuário

Para escrever na tela do usuário, utilizamos o comando `document.write`

```js
// Escreve na tela do usuário

document.write("Escrevendo na tela com JavaScript na Apex");
```
---

# Variáveis e constantes

Nas linguagens de programação é muito comum você utilizar variáveis para armazenar valores, e constantes para armazenar valores que não serão alterados. Assim deixando seu programa de forma dinâmica.

Onde o processo que irá ocorrer é sempre o mesmo porém com diferentes valores.

```js
// Para declarar uma variavel em JavaScript utilizamos a seguinte sintaxe;

var aluno = "João";
var idade = 20;

let curso = "JavaScript";
let valor = 2500.88;


// Lembrando que podemos escrever ou mostrar um alerta com o valor da variavel
alert(aluno);
document.write(idade);

// O valor sempre será o mesmo não podemos alterar o valor
const centro_treinamento = "Apex Ensinos";
```
---

# Tipos de valores

Dentro da programação, cada linguagem de programação possui alguns tipos em comum e alguns tipos unicos da sua linguagem.

```js

var nome = "João"; //String = Texto
var idade = 20; //Number = Número
var ehMaiorDeIdade = true; //Boolean = Verdadeiro ou Falso  true | false

```
---


# Concatenação ou junção de textos

```js

var nome = "João";
var idade = 20;

document.write("Olá " + nome + " você tem " + idade + " anos");
```
---

# Cálculos na programação

Um desenvolvedor de sistemas trabalha constantemente com operações
matemáticas, sendo assim é necessários fazermos uma breve explicação sobre o que podemos fazer em uma linguagem de programação.

- Adição `+`
- Subtração `-`
- Multiplicação `*`
- Divisão `/`
- Resto da Divisão `%`

```js

// Adição
document.write(10 + 5); // retorna 15

// Subtração
document.write(10 - 5); // retorna 5

// Multiplicação
document.write(10 * 5); // retorna 50

// Divisão
document.write(10 / 5); // retorna 2

// Resto da divisão
document.write(6 % 2); // retorna 0
```

---

# Operadores de Atribuição

- `=` - Atribuição    //igual a
- `+=` - Adição       //adicionar um numero a variavel, EX: numero +=2   var+2
- `-=` - Subtração
- `*=` - Multiplicação
- `/=` - Divisão
- `%=` - Resto da divisão
- `++` - Incremento //aumenta 1
- `--` - Decremento //diminui 1
---

# Operadores Relacionais ou de Comparação

Provavelmente você já os viu nas aulas de matemática, os operadores relacionais servem para realizarmos comparativos entre valores, podendo ser informações do tipo textuais, numéricas ou lógicos. 

- Maior `>`
- Menor `<`
- Maior ou Igual `>=`
- Menor ou Igual `<=`
- Igual `==`
- Diferente `!=`

---

# Operadores Lógicos

Os operadores lógicos possuem uma característica interessante para
verificarmos dois ou mais valores ou negar alguma informação por exemplo.

- `&&` - E //ver se mais de uma informação é verdadeira na mesma linha
- `||` - Ou //uma das duas informações pode ser verdadeira
- `!` - Não //se não é, o que fazer?

---

# Estruturas de condição

Uma estrutura de condição serve para deixar o seu programa `"Inteligente"`, com uma estrutura de condição você pode escolher quando alguma parte do seu programa deve ou não executar dependendo da condição.

### Condicional Simples
   - A estrutura de uma condicional simples realiza uma ação quando uma verificação for verdadeira.
```js

var idade = 20;

if (idade >= 18) //condição para seguir {                                         //if : se 
    document.write("Você é maior de idade")//resposta se a condição for verdadeira;
}
```

### Condicional Composta
   - A estrutura de uma condicional composta realiza diferente da condição simples possui o caminho para quando for atendida e outra para quando não for atendida

```js
var idade = 20;

if (idade >= 18) {
    document.write("Você é maior de idade");
} else {
    document.write("Você é menor de idade"); //se não for o if, escreverá isso na tela
}
```

### Condicional Aninhada
   - A estrutura de condição aninhada nos permite fazer multiplas checagens e se nenhuma delas forem atendidas o programa ira executar a ação `else`

```js

var idade = 20;

if (idade > 18) {
   document.write("Você é maior de idade");

}else if (idade == 18) {
   document.write("Você tem 18 anos"); //mais de dois if

} else{
   document.write("Você é menor de idade");
}
```

### Condicional com operador Lógico

   - A estrutura de condição com operador lógico nos permite fazer multiplas checagens em uma unica linha utilizando os operadores `E` `OU` `NÃO`


```js
var media = 8.5;
var faltas = 5;

if (media >= 7 && faltas <= 10) { //media maior ou igual a sete &&(e) e faltas menor ou igual a 10
   document.write("Aprovado");// se for igual
}else{
   document.write("Reprovado");//se for diferente
}
```

```js
var prova1 = 8.5;
var prova2 = 5;

if (prova1 >= 7 || prova2 <= 7) {
   document.write("Aprovado");
}else{
   document.write("Reprovado");
}
```
---

<br>

---
# Aula 02 - Exercícios condicionais
---
<br>

# Aula 03

# Estrutura de Escolha

Dentro das linguanges de programação temos uma estrutura de escolha chamada de `switch - case` onde é uma maneira mais elegante para chegarmos as condições de forma simples.

```js

var diaDaSemana = 'Domingo';

switch (diaDaSemana) {
   case 'Domingo':
      document.write("Hoje é domingo");
      break;
   case 'Segunda':
      document.write("Hoje é segunda");
      break;
   case 'Terça':
      document.write("Hoje é terça");
      break;
   case 'Quarta':
      document.write("Hoje é quarta");
      break;
   case 'Quinta':
      document.write("Hoje é quinta");
      break;
   case 'Sexta':
      document.write("Hoje é sexta");
      break;
   case 'Sábado':
      document.write("Hoje é sábado");
      break;
   default:
      document.write("Dia inválido");
      break;
}
```
---

# Laços de Repetição ou Loop

Dentro dos laços de repetição temos diversas formas de atingir um resultado esperado.

- `while` - `enquanto`
- `do while` - `faça enquanto`
- `for` - `para cada item faca`

Melhores usos para cada um

- `While` quando você não sabe quantas vezes terá que rodar a estrutura

- `Do While` quando você não sabe quantas vezes terá que rodar a estrutura porém precisa garantir que pelo menos 1 vez rode

- `For` quando você sabe quantas vezes terá que rodar a estrutura.

```js

var indice = 1;

while (indice <= 10) {
   // Exite o valor do indice 
   document.write(indice);

   // Aumenta o valor do indice em 1 ex  (1 + 1) = 2;
   indice++;
}
```

```js
var nome;

do {

   nome = prompt("Digite seu nome");

} while (nome == "");
```

```js
for (var indice = 1; indice <= 10; indice++) {
   document.write(indice);
}
```
---

# Exercicios da aula 03 Loops
---

# Aula 04

# Vetores ou Arrays ou listas

- Vetor ou array é uma variável que possibilita armazenar um grande número de dados do mesmo tipo.

No javascript para `criar` uma lista temos duas formas

```js
var listaFrutas = []
var listaFrutas = ['Maça', 'Abacaxi', 'Morango', 'Pêra']
//                   0         1          2        3
```

Como saber quantos itens temos dentro da lista?

```js
var quantidade = listaFrutas.length()  // 4 itens
```

Como eu posso acessar algum item em específico?

```js
var item = listaFrutas[2] // Morango
```

E Como adicionamos mais itens a nossa lista?

```js
listaFrutas.push('Goiaba')

var listaFrutas = ['Maça', 'Abacaxi', 'Morango', 'Pêra','Goiaba']
//                  0         1          2        3        4
```

E como eu posso alterar algum item em especifico?

```js
var listaFrutas = ['Maça', 'Abacaxi', 'Morango', 'Pêra','Goiaba']
//                  0         1          2        3        4

listaFrutas[2] = 'Abacaxi'

var listaFrutas = ['Maça', 'Abacaxi', 'Abacaxi', 'Pêra','Goiaba']
//                  0         1          2        3        4
```


E como podemos remover itens da lista?

```js
var listaFrutas = ['Maça', 'Abacaxi', 'Morango', 'Pêra','Goiaba']
//                  0         1          2        3        4

listaFrutas.splice(2,1) // remove o item da posição 2 e 1 item

var listaFrutas = ['Maça', 'Abacaxi', 'Pêra','Goiaba']
//                   0         1         2      3
```

E como podemos percorrer a lista passar em cada um dos itens e fazer alguma coisa? Neste caso iremos percorrer a lista e imprimir o valor de cada item por exemplo.

```js
for (var i = 0; i < listaFrutas.length; i++) {
   document.write(listaFrutas[i]);
}

Maça
Abacaxi
Pêra
Goiaba
```

---

# Funções

A utilização de funções facilita o desenvolvedor a separar as funcionalidades de um sistema, além de poder reutilizar ações, evitando os códigos repetitivos.

```js
function mensagem() {
   alert("Utilizando Funções");
}

function somar(numero1, numero2) {
   return numero1 + numero2;
}

somar(1,2) // Resultado 3
```