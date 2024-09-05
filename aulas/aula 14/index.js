//exercicio 
/*let numero = [0]
for(let i = 1; i <=10; i++){
    console.log(i)
}*/
//contadores de pares
/*let numeroPares = 0
for(let i = 1; i <=20; i++){
    if(i % 2 ===0){
        console.log(i)
    }
}*/
//tabuada
/*const numero = Number(prompt('digite um numero'))
for(let i = 1; i<= 10 ; i++){
    console.log(numero)
}*/

//soma de numero
/*let soma = 0
for(let i = 1; i <=5; i++){
    const numero = Number(prompt('digite o ${i} numero'))
   soma += numero
}
console.log('a soma dos 5 numero e:' , soma)*/
//media alunos
  /*  let notas = []
    let soma = 0
    for(let i = 0; i<=5; i++){
        let nota = Number(prompt('digite a nota do aluno:',$(i+ 1)))
        notas.push(nota)
        soma += nota
    }
    let mediaNotas = soma 
    console.log('a media das notas e:', mediaNotas)*/
/*
  let palavras = ["abacaxi", "banana", "cereja", "maçã"];
  let palavra = palavras[Math.floor(Math.random() * palavras.length)];
  let letrasAdivinhadas = [];
  let letrasPalavra = palavra.split('');
  let palavraMostrada = [];
  for (let i = 0; i < palavra.length; i++) {
    palavraMostrada.push('_');
  }
  let tentativas = 6;

  while (tentativas > 0) {

    console.log('Palavra:', palavraMostrada);

    let letra = prompt('Adivinhe uma letra:');

    if (letrasAdivinhadas.includes(letra)) {
      console.log('Você já adivinhou essa letra.');
    } else {
    
      letrasAdivinhadas.push(letra);

      if (letrasPalavra.includes(letra)) {
        
        for (let i = 0; i < letrasPalavra.length; i++) {
          if (letrasPalavra[i] === letra) {
            palavraMostrada[i] = letra;
          }
        }

        if (palavraMostrada.join('') === palavra) {
          console.log('Parabéns! Você adivinhou a palavra:' );
          break;
        }
      } else {
        console.log('Essa letra não está na palavra.');
        tentativas--;
      }
    }
  }

  if (tentativas === 0) {
    console.log('Você perdeu! A palavra era:' ,palavra);
  }*/
//eu vi um video e eles explicarom assim 


//caixa eletronico
/*let valorSague = Number(prompt('digite o valor de saque'))
console.log('notas para entregue')
let notas = [100,50,20,10,5,2,1]
for(let nota of notas){
    let quantidade = Math.floor(valorSague / nota)
    if (quantidade > 0) {  
        console.log('${quantidade} nota(s) de R$${nota}')  
        saque -= quantidade * nota  
    }
}*/

//validador de CPF
/*let cpf = prompt('Digite um CPF (somente números):')  
if (cpf.length === 11) {  
    console.log('CPF válido')  
} else {
    console.log('CPF inválido')  
}*/

//ordenacao array
/*
function ordenarArray(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
    return array;
  }
  let entrada = prompt("Digite uma lista de números separados por vírgulas:");
  let numeros = entrada.split(",").map(Number);
  let arrayOrdenado = ordenarArray(numeros);
  console.log("Array ordenado:", arrayOrdenado);

//eu vi um video que mostrou como isso se poderia ser feito sem usar (como sort())*/

