/*let numeros = [1,2,3,4,5];
let soma = 0; 

for(let i = 0; i<numeros.length; i++){
    soma += numeros[i];
}

console.log(soma)

*/
/*
function fatorial(n){
    let resultado = 1;
    for(let i = n; i>0 ; i--){
        resultado *= i;
    }
    return resultado
}
console.log(fatorial(5)) 

*/

let numeros=[1,2,3,4,5];
let soma = 0;

for(let i =0; i<numeros.length; i++){
    console.log('i: ${i}, numeros[i]: ${numeros[i]}, soma antes: ${soma}'),
    soma += numeros[i],
    console.log('soma despois')
}