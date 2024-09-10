//exercicio 1 
/* e uma funcao simple chamada 'minhaFuncao' que reseve um parametro 'variavel'
e retorna o valor desse parametro multiplicado por '5'
se a funcao 'minhaFuncao' anterior 'console.log'removidas a funcao
ainda sera realizada mas o resultado nao sera impreso no sonsole
em vez disso o resultado da funcao seria retornado para o locar da chamada da funcao  */
/*function minhaFuncao(variavel){
    return variavel * 5
}
console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
*/

//exercicio 2
/*O código JavaScript solicita ao que insira um texto através da função prompt()e armazena o valor
na variável do usuário textoDoUsuario.
Em seguida, ele define uma função outraFuncaoque recebe o texto como argumento e
 retorna truese o texto contém a palavra "cenoura"
(em minúsculas) e falsecaso contrário.
A função outraFuncaoutiliza o método toLowerCase()
para converter o texto para minúsculas e o método includes()para verificar se a palavra "cenoura" está presente.
Por fim, o código chama a função outraFuncaocom o texto fornecido pelo usuário e armazena o resultado na variável resposta.
Ele então imprima o valor de respostanenhum console usando console.log().
Saídas para as entradas:
eu. "Eu gosto de cenoura" -> true ii. “CENOURA é bom pra vista” -> true iii. "Cenouras crescendo na terra" ->true
Em todos os casos, o código retornará trueporque todas as entradas 
contêm a palavra "cenoura", embora em algumas entradas a palavra esteja em letras guardadas. 
A função t
toLowerCase()garante que a verificação seja feita em minúsculas, independentemente do caso da entrada.*/ 
/*let textoDoUsuario = prompt("Insira um texto");
const outraFuncao = function(texto){
    return texto.toLowerCase().includes('cenora')
}
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)*/

//exercicio 3
/*function sobreMim() {
    console.log("Eu sou Freliannys, tenho 16 anos, moro em São leopordo e eu sou estudante.");
  }
  
  sobreMim();*/

  //exercicio 4
  // a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função,
// faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no
// console o resultado.
/*
function somaDoisNumeros(a, b) {
    return a + b;
  }
  
  let resultado = somaDoisNumeros(10, 5);
  console.log("O resultado da soma é:", resultado);
  
  // b) Faça uma função que recebe 2 números e retorne um booleano que informa se o
  // primeiro número é maior ou igual ao segundo.
  
  function primeiroMaiorOuIgualAoSegundo(a, b) {
    return a >= b;
  }
  
  console.log("O primeiro número é maior ou igual ao segundo?", primeiroMaiorOuIgualAoSegundo(10, 5));
  
  // c) Escreva uma função que receba um número e devolva um booleano indicando se
  // ele é par ou não
  
  function ehPar(numero) {
    return numero % 2 === 0;
  }
  
  console.log("O número é par?", ehPar(10));
  
  // d) Faça uma função que recebe uma mensagem(string) como parâmetro e imprima o
  // tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
  
  function imprimirMensagem(mensagem) {
    let tamanho = mensagem.length;
    let mensagemMaiuscula = mensagem.toUpperCase();
    console.log('O tamanho da mensagem é', $(tamanho), 'e em maiúsculas fica:', $(mensagemMaiuscula));
  }
  
  imprimirMensagem("Olá, mundo!");*/
 
 
  //exercicio 5
/*  function soma(a, b) {
    return a + b;
  }
  
  function subtracao(a, b) {
    return a - b;
  }
  
  function multiplicacao(a, b) {
    return a * b;
  }
  
  function divisao(a, b) {
    return a / b;
  }
  
  // Obter os números do usuário
  let numero1 = parseFloat(prompt("Digite o primeiro número:"));
  let numero2 = parseFloat(prompt("Digite o segundo número:"));
  
  // Chamar as funções e exibir os resultados
  console.log("Números inseridos:", numero1, "e", numero2);
  console.log("Soma:", soma(numero1, numero2));
  console.log("Diferença:", subtracao(numero1, numero2));
  console.log("Multiplicação:", multiplicacao(numero1, numero2));
  console.log("Divisão:", divisao(numero1, numero2));
  */

//desafio 1
/*
const imprimir = (valor) => {
    console.log(valor);
  };
  
  const somar = (valor1, valor2) => {
    const soma = valor1 + valor2;
    imprimir(soma);
  };*/
  
//desafio 2
//eu nao consegui mas eu faco em casa




