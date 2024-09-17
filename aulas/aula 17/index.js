/*const professor = {
    nome : 'lucas',
    idade : 32,
    altura : 1.75,
    email: 'lucas@gmail.com',
    tarefa : ['Dar aula', 'responder duvida', 'ler texto'],
    contarPiadas:function(){
        console.log('e pa ve ou pa comer')
    }
}

console.log(professor.nome)
console.log(professor.idade)
console.log(professor.altura)
console.log(professor['email'])

professor.nome = 'leo'
professor.email = 'leo@gmail.com'
console.log(professor.nome)
console.log(professor['email'])
console.log(professor.tarefa[1])*/

/*
const filme ={
    nome: 'E assim que acaba',
    nomeDirector: 'Justin Baldoni',
    anoDeLancamento: 2024, 
    elenco: ['Blake Lively', 'Justin Baldoni' , 'Brandon Sklenar' , 'Jenny Slate',
    'Isabela Ferrer' , 'Alex Neustaedter'    
    ],
    voceViu:function(){
        console.log('sim')
    }
}

console.log(filme.nome)
console.log(filme.nomeDirector)
console.log(filme['anoDeLancamento'])
console.log(filme['elenco'])
console.log(filme['voceViu'])
filme['nomeDoPersonages']= ['Lily Bloom', 'Ryle Kincaid', 'Atlas Corrigan', 'Allysa', 'Young Lily Bloom', 'Young Atlas Corrigan']
console.log(filme.nomeDoPersonages)
filme.elenco[0]= 'xuxa'
console.log(filme.elenco)*/

/*
const pessoa ={
    nome: 'genesis',
    idade: 16,
    generoMusical: 'K-pop'
}
console.log('o nome da pessoa e', (pessoa.nome), 'ela tem', (pessoa.idade), 'anos e gosta muito de', (pessoa.generoMusical))

/*

const donoDoPet ={
    nome: 'lucas',
    idade: 32,
    pet:{
        nome : 'daenerys',
        raca: 'vira-leta',
        idade: 7

    }
}
console.log(donoDoPet.pet.nome)
*/
/*
const curso = {
    nome :'front end noctuno',
    linguagem : ['js','css','html']
}
console.log(curso.linguagem[1])
curso.numeroEstudantes = 50
curso['numeroProfessores']= 10
console.log(curso.numeroEstudantes)
console.log(curso.numeroProfessores)

/*
const professores = [
    {Nome: 'lucas', idade: 32, modulo :1},
    {Nome: "Leo" , idade: 29 , modulo: 2},
    {Nome: 'Mita', idade: 29, modulo: 3}
]
console.log(professores[0].Nome)
*/
/*
const usuario={
    nome: 'Prof',
    idade: 25,
    email: 'prof@senac.br.com',
    ciudade: 'São Leopordo'
}
const novoUsuario={
    ...usuario,
    nome: 'Lucas',
    idade: 32,
    ciudade: 'Canoa'
}
console.log(novoUsuario)


const nomaProf= ['lucas', 'leo' ,'mita']

const novaLista = {...nomaProf}
console.log(novaLista)
console.log('o nome do prof e:',novaLista[1])
*/
/*
function criarObjetoPessoaComDetalhes(pessoa) {
    const { nome, idade } = pessoa;
    const comidasPreferidas = ["pizza", "hamburguer", "sushi"]; // Exemplo de comidas preferidas
    const melhorAmigo = { nome: "João", idade: 25 }; // Exemplo de melhor amigo
  
    const pessoaCompleta = {
      nome,
      idade,
      comidasPreferidas,
      melhorAmigo,
    };
  
    console.log(
      `O nome da pessoa é ${pessoaCompleta.nome} e suas comidas preferidas são ${pessoaCompleta.comidasPreferidas.join(
        ", "
      )}. E seu melhor amigo se chama ${pessoaCompleta.melhorAmigo.nome} e tem ${pessoaCompleta.melhorAmigo.idade} anos.`
    );
  
    return pessoaCompleta;
  }
  
  
  criarObjetoPessoaComDetalhes(pessoa);*/

/*

  const personagens = [{
   nome: 'Naruto Uzumaki',
   idade: 17 ,
   estilo: 'ninjutsu',
   jutsus: ['rasengan', 'shadow clode jutsu']
   },{
     nome: 'Sasuke Uchima', 
     idade: 17 ,
     estilo: 'ninjutsu',
     jutsus: ['chidori' , 'Sharingan']
   },{
    nome: 'Sukura Huruno',
    idade: 17 ,
    estilo: '',
    jutsus: ['strength', 'medical ninjutsu']
   }
]

function adicionarPersonagem*/