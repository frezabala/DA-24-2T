//interpretação de codigo
//ejercicio 1
/* define um objeto chamado filme que contem informacoes sobre um filme 
o ojeto filme possui as siguiente propiedades (nome , ano de lancamento , elenco e transmissoes) 
a) o codigo ira a imprimir 'Matheus Nachtergaele', 'Virginia Cavendish' , {canal: "Globo", horario: '14h'} */
/*const filme = {
    nome: 'auto da compadencia',
    ano: 2000 ,
    elenco: ['Matheus Nachtergaele', 'Selton Mello', 'Denise Fraga', 'Virginia Cavendish'],
    transmissoesHoje: [
        {canal: 'Telecine', horario:'21h'},
        {canal: 'Canal Brasil', horario: '19h'},
        {canal: 'Globo', horario: '14h'}
    ]
}
console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])*/

//ejercicio 2
/* O codigo demostra a utilizacao da sintaxe de clonagem de objetos para crear novos objetos com base em ja existentes
A) O codigoimprime 'cachoro' {nome:'juca', idade: 3 , raca: 'SRD'} "gato" {nome:'juba', idade: 3 , raca: 'SRD'} 
'tartaruga' {nome:'jubo', idade: 3 , raca: 'SRD'}
B) Os ter pontos ante do nome de um objeto e par clonar um ojeto e criar uno novo com as mesmas propiedades
 
const cachoro ={
    nome: 'juca',
    idade: 3 ,
    raca: 'SRD'
}
const gato ={...cachoro , nome: 'juba'}

const tartaruga= {...gato , nome: gato.nome.replaceAll("a" , "o")}
console.log(cachoro)
console.log(gato)
console.log(tartaruga)*/

//exercicio 3
/*O código JavaScript define uma função chamada minhaFuncaoque recebe um objeto e uma propriedade como argumentos.
Uma função retorna o valor da propriedade especificada no objeto.
No código principal, um objeto pessoaé criado com as propriedades 'nome', 'idade', 'backender'. Em seguida, a função 
'minhaFuncaoé' chamada duas vezes com pessoacomo objeto 'backender'e 'altura'como propriedades.
O código utiliza 'console.log' para imprimir os resultados da função 'minhaFuncao' no console
A) imprime no console "false" , "undefined"
B) O primeiro console imprime "false" Porque a propiedade 'backender' do objeto pessoa e false
o segundo console imprime "undefined" porque a propiedade 'altura' nao esta definida no objeto pessoa

function minhaFuncao(objeto , propiedade){
    return objeto[propiedade]
}
const pessoa ={
    nome: 'caio' ,
    idade: 23 ,
    backender: false
}

console.log(minhaFuncao(pessoa , "backender"))
console.log(minhaFuncao(pessoa , "altura"))   */


//escrita de codigo
//exercicio 1
/*
const pessoa = {
    nome: 'Luciana',
    apelidos: ['lu', 'luci', 'lulu']
}
function apresentacao(pessoa1){
     console.log('eu sou:' ,[pessoa.nome] , 'mas pode me chamar de:',[pessoa.apelidos])

}

apresentacao(pessoa)
 
const novaPessoa ={...pessoa , apelidos: ['lula', 'ana', 'cia']}
*/

//exercicio 2
/*
const pessoa1 = {
    nome: "João",
    idade: 30,
    profissão: "Programador",
  }
  
  const pessoa2 = {
    nome: "Maria",
    idade: 25,
    profissão: "Médica",
  }
  
  function obterInformacoes(objeto) {
    return [
      objeto.nome,
      objeto.nome.length,
      objeto.idade,
      objeto.profissão,
      objeto.profissão.length,
    ];
  }
  
  console.log(obterInformacoes(pessoa1)) 
  console.log(obterInformacoes(pessoa2)) */


  //exercicio 3
  /*
  let carrinho = []

  const fruta1= {nome: 'maca', disponibilidade: true}
  const fruta2= {nome: 'banana', disponibilidade: true}
  const fruta3= {nome: 'uva', disponibilidade: true}

  function AdicionarFruta(fruta){
    carrinho.push(fruta)
  }

  AdicionarFruta(fruta1)
  AdicionarFruta(fruta2)
  AdicionarFruta(fruta3)

  console.log(carrinho)
*/

//dasafio 1
/*
function criarUsuario(){
    const nome = prompt('digite seu nome:')
    const idade = prompt('digite sua idade:')
    const profissão = prompt('digite sua profissão:')

    const usuario = {
        nome: nome ,
        idade: idade ,
        profissão: profissão
    }
    console.log(usuario)
    console.log(typeof usuario)
}
criarUsuario()*/


//desafio 2
const filme1 ={ 
    ano: 2024 ,
    nome: 'O Lacrimejador'
}

const filme2 = {
    ano: 2007 ,
    nome: 'Táxi 4'
}

function conpararFilmes(filme1 , filme2){
    if(filme1.ano < filme2.ano){
        return 'O primeiro filme foi lançado antes do segundo?', true, 
        'primeiro filme foi lançado no mesmo ano do segundo?', false
    }
}

