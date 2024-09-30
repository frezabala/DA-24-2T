/*let matriz= [
    [1,2,3],
    [4,5,6]
]

console.log(matriz[1][2])


let matriz2=[
    [10,20,30],
    [40,50,60],
    [70,80,90]
]
console.log(matriz2[0][1])//retorna 20
console.log(matriz2[1][2])//retorna 60
console.log(matriz2[1][0])//retorna 40

let matriz3=[]
matriz3[0]=[1,2,3]
matriz3[1]=[4,5,6]
matriz3[2]=[7,8,9]


let velha=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
velha[1][2]=1
console.log(velha)

/*
let n =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for(let i=0; i<n.length;i++){
for(let j=0; j<n[i].length;j++){
    console.log(n[i][j])
}
}
*/
/*
let n =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for(let i=0; i<n.length;i++){
for(let j=0; j<n[i].length;j++){
    soma +=n[i][j]
}
}

 console.log(soma)
*/
/*
let cafe = [
    [1, 2, 3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13, 14, 15,16]
]
function soma(n) {
    let valor = 0
    for (let i = 0; i < n.length; i++) {
        for (let j = 0; j < n[i].length; j++) {
            valor += n[i][j]
        }
    }
    console.log(valor)
}
soma(cafe)

let tabuleiro=[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]

]
function posisonarNavil(){
    tabuleiro[9][8]=1
    tabuleiro[5][9]=1
    tabuleiro[4][7]=1
    tabuleiro[1][6]=1

}
let soma =0
for (let i=0; i<tabuleiro.length; i++){
    for(let j=0; j<tabuleiro[i].length;j++)
        quantidade+=tabuleiro[i][j]
}
let escolha=Number(prompt("escolha linha"))
let segundaEscolha=Number(prompt("escolha coluna"))

function verificar(linha,coluna){
    
}
*/
