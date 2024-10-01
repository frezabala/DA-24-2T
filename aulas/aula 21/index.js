//exercicio 1 interpretacao de codigo 
/* o codigo inprimira o numero 16 no console  
o codigo assede  a linha 2 e coluna 1
let matriz = [
    [2,4,6],
    [8,10,12],
    [14,16,18]
]
console.log(matriz[2][1]) 
*/

//exercicio 2 
/* o codigo imprimirao numeros '2, 4 e 6 um mod
let matriz=[
    [1,2],
    [3,4],
    [5,6,7]
];
for (let i =0; i< matriz.length; i++){
    for(let j =0; j< matriz[i].length; j++){
        if(matriz[i][j] % 2 === 0){
            console.log(matriz[i][j]);
        }
    }
}*/
 

//execicio 3
/* o valor final da variavel 'soma' sera a soma de todas os numeros da matriz 
portanto o valor final da 'soma' da variavel e 225 o cada interacao e somado o valor em cada pocicao a soma
let matriz = [
    [5, 10, 15],
    [20, 25, 30],
    [35, 40, 45]
  ];
  
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      soma += matriz[i][j]; 
    }
  }
  
  console.log(soma); */



  // exercicio 1 escrita de codigo 
  /*let matriz =[
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
]
for (let i = 0 ; i<matriz.length; i++){
  for(let j= 0; j< matriz.length; j++){
    matriz(i)(j)= Math.floor(Math.random()*3)
  }  
}console.log(matriz)

*/


//exercicio 2
/*
const matriz = [
    [10, 8, 12, 9], 
    [7, 15, 9, 11], 
    [12, 9, 10, 13]
  ];
  
  for (let i = 0; i < matriz.length; i++) {
    let pontuacaoTotal = 0;
    for (let j = 0; j < matriz[i].length; j++) {
      pontuacaoTotal += matriz[i][j];
    }
    console.log('Pontuação total do Jogador' );
  }
*/
//exercicio  3
/*function inverterLinhasMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      matriz[i].reverse(); 
    }
    return matriz;
  }
  

  let matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  
  let matrizInvertida = inverterLinhasMatriz(matriz);
  
  
  console.log(matrizInvertida);
*/



//desafio
function gerarIlha() {
  const tamanho = 10;
  const ilha = [];
  const elementos = ['grama', 'água', 'floresta', 'carnívoro', 'herbívoro'];

  for (let i = 0; i < tamanho; i++) {
    ilha[i] = [];
    for (let j = 0; j < tamanho; j++) {
      const elementoAleatorio = Math.floor(Math.random() * elementos.length);
      ilha[i][j] = elementoAleatorio; 
    }
  }

  return ilha;
}

function moverDinossauro(ilha, linhaDino, colunaDino, direcao) {
  const movimentos = {
    cima: [-1, 0],
    baixo: [1, 0],
    esquerda: [0, -1],
    direita: [0, 1],
  };

  const movimento = movimentos[direcao];
  const novaLinha = linhaDino + movimento[0];
  const novaColuna = colunaDino + movimento[1];

  if (
    novaLinha >= 0 &&
    novaLinha < ilha.length &&
    novaColuna >= 0 &&
    novaColuna < ilha[0].length
  ) {
  
    ilha[novaLinha][novaColuna] = ilha[linhaDino][colunaDino];
    ilha[linhaDino][colunaDino] = 0; 
    return [novaLinha, novaColuna]; 
  } else {
    return [linhaDino, colunaDino]; 
  }
}

function exibirIlha(ilha) {
  let contagemDinos = 0;
  for (let i = 0; i < ilha.length; i++) {
    let linha = '';
    for (let j = 0; j < ilha[i].length; j++) {
      const elemento = ilha[i][j];
      switch (elemento) {
        case 0:
          linha += '🟩 '; // Grama
          break;
        case 1:
          linha += '🟦 '; // Água
          break;
        case 2:
          linha += '🌲 '; // Floresta
          break;
        case 3:
        case 4:
          linha += '🦖 '; // Dinossauro (carnívoro ou herbívoro)
          contagemDinos++;
          break;
        default:
          linha += '❓ '; // Desconhecido
      }
    }
    console.log(linha);
  }
  console.log('Total de dinossauros:' + (contagemDinos));
}

// Exemplo de uso:
let minhaIlha = gerarIlha();
console.log("Ilha inicial:");
exibirIlha(minhaIlha);

let posicaoDino = [2, 3]; // Posição inicial do dinossauro (linha 2, coluna 3)

posicaoDino = moverDinossauro(minhaIlha, posicaoDino[0], posicaoDino[1], 'direita');
console.log("\nIlha após o movimento:");
exibirIlha(minhaIlha);