//exercicio de fixaçao interpretaçao de codigo
/* 1)o codigo acima calcula basicamente a soma de todos os numero de '0' a '4'
que sera igual a 10, define uma variavel 'valor' com valor inicial
'0' a variavel 'i' e inicializada como '0' iterando a cada do laço , o valor 
actual de 'i' e adiciodano a 'valor'  o laço termina 'i' se torna '5' 
nesse momento o valor de 'valor' e impreso no console como '10'*/ 
/*let valor = 0
for(let i = 0; i < 5; i++){
    valor += i
}console.log(valor)*/


/* 2) o codigo itera por uma lista de numeros e imprime todos os
numeros maiores que '18' no console
a)os numeros maiores que 18 na lista serão impressos no console:
19,21,23,27,30
b)o 'for..of' loop nao funcona para acessar o indice de cada elemento de essa lista
'for..of' nao e suficiente   */ 
/*const lista = [10,11,12,15,18,19,21,23,25,27,30]
for (let numero of lista){
    if (numero > 18){
        console.log(numero)
    }
}*/
/*3)o codigo apresentado pede ao usuario que digite a quantidade de linha e 
estão imprima um numero de linha cada uma com um asterisco mais que a anterior
cuando o usuario digito '4' o resultado sera no console sera:
*
**
***
****   */ 
/*const quantidadeTotal = Number(prompt('digite a quantidade total de linhas:'))
let quantidadeActual = 0
while(quantidadeActual < quantidadeTotal){
    let linha = ""
    for(let astericos = 0; astericos < quantidadeActual + 1; astericos++ ){
    linha += "*"
    }
    console.log(linha)
    quantidadeActual++
}*/
//escrita de codigo
/*let quantidadeBichinhos = Number(prompt('quanto bichinhos  de estimaçao voce tem?'))
if (quantidadeBichinhos === 0){
    console.log('que pena! voce pode adortar um pet!')
}else{
    let nomeBichinhos = []
    for(let i = 0; i< quantidadeBichinhos; i++ ){
    let nomeBichinho=  prompt('digite o nome do seus bichinhos')
    console.log(nomeBichinho)
    }
    console.log( nomeBichinho )

}*/
/*
const arrayOriginal = [5, 12, 8, 3, 7, 15, 2];


console.log("Valores do array original:");
arrayOriginal.forEach(valor => {
  console.log(valor);
});


console.log("\nValores do array original divididos por 10:");
arrayOriginal.forEach(valor => {
  console.log(valor / 10);
});


const arrayPares = arrayOriginal.filter(valor => valor % 2 === 0);
console.log("\nArray contendo apenas números pares:");
console.log(arrayPares);


const arrayStrings = arrayOriginal.map((valor, index) => O elemento do índice ${index} é: ${valor});
console.log("\nArray contendo as strings formatadas:");
console.log(arrayStrings);
*/
/*
function jogarAdivinhação() {
   
    const numeroPensado = Number(prompt("Jogador 1: Digite o número em que você está pensando (não mostre para o outro jogador):"));
    
    
    if (isNaN(numeroPensado)) {
        console.log("Número inválido! O jogo será encerrado.");
        return;
    }
    
    console.log("Vamos jogar!");
    
    let numeroChutado;
    let tentativas = 0;

    
    do {
        numeroChutado = Number(prompt("Jogador 2: Chute um número:"));
        
        
        if (isNaN(numeroChutado)) {
            console.log("Entrada inválida! Por favor, digite um número.");
            continue; 
        }
        
        tentativas++;
        
        
        if (numeroChutado < numeroPensado) {
            console.log(O número chutado foi: ${numeroChutado}. Errrrrrrrou, o número escolhido é maior!);
        } else if (numeroChutado > numeroPensado) {
            console.log(O número chutado foi: ${numeroChutado}. Errrrrrrrou, o número escolhido é menor!);
        } else {
            console.log(O número chutado foi: ${numeroChutado}. Acertou!!);
            console.log(O número de tentativas foi: ${tentativas});
        }
        
    } while (numeroChutado !== numeroPensado);
}

jogarAdivinhação();
*/
//iniciarJogo();

/*
let vida = 1; 
let recursos = 0; 
let rodadas = 0; 


function explorar() {
  rodadas++; 
  let chance = Math.random(); 

  if (chance < 0.50) {
    
    recursos++;
    alert("Você encontrou um recurso. Recursos totais: " + recursos);
  } else if (chance < 0.75) {
    
    alert("Você encontrou um perigo. Cuidado!");
  } else {
    
    vida--;
    alert("Você encontrou um Gamemaker. Vida restante: " + vida);
  }
}


function descansar() {
  vida++; 
  alert("Você descansou. Vida atual: " + vida);
}


function jogar() {
  while (vida > 0 && recursos < 10) {
    let escolha = prompt("Escolha uma ação: 'explorar e o 1' ou 'descansar e o 2'");

    if (escolha === "1") {
      explorar();
    } else if (escolha === "2") {
      descansar();
    } else {
      alert("Escolha inválida.");
    }

    
    if (recursos >= 10) {
      alert("Parabéns! Você coletou todos os recursos necessários.");
      break;
    } else if (vida <= 0) {
      alert("Você perdeu todas as suas vidas. Fim de jogo.");
      break;
    }
  }

  
 alert("Total de recursos coletados: " + recursos);
  alert("Número total de rodadas exploradas: " + rodadas);
}


jogar();
*/
