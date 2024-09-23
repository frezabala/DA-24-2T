function criarPersonagem(nome, classe, nivel, hp, habilidades) {
    return {
        nome: nome,
        classe: classe,
        nivel: nivel,
        hp: hp,
        habilidades: habilidades,
        historicoAcoes: [],

        atacar: function() {
            this.historicoAcoes.push('Atacou');
            console.log(nome + ' atacou!');
        },

        defender: function() {
            this.historicoAcoes.push('Defendeu');
            console.log(nome + ' defendeu!');
        },

        usarHabilidade: function(habilidade) {
            if (habilidades.indexOf(habilidade) !== -1) {
                this.historicoAcoes.push('Usou habilidade: ' + habilidade);
                console.log(nome + ' usou a habilidade ' + habilidade + '!');
            } else {
                console.log(nome + ' não tem a habilidade ' + habilidade + '.');
            }
        },

        verificarStatus: function() {
            console.log('Nome: ' + nome);
            console.log('Classe: ' + classe);
            console.log('Nível: ' + nivel);
            console.log('HP: ' + hp);
            console.log('Habilidades: ' + habilidades.sort().toString()); // Ordena as habilidades
            console.log('Histórico de Ações: ' + this.historicoAcoes.sort().toString()); // Ordena o histórico de ações
        }
    };
}

// Array para armazenar todos os personagens
const personagens = [];

// Função para cadastrar um novo personagem
function cadastrarPersonagem(nome, classe, nivel, hp, habilidades) {
    const novoPersonagem = criarPersonagem(nome, classe, nivel, hp, habilidades);
    personagens.push(novoPersonagem);
}

// Função para buscar um personagem pelo nome
function buscarPersonagemPorNome(nome) {
    for (let i = 0; i < personagens.length; i++) {
        if (personagens[i].nome === nome) {
            return personagens[i];
        }
    }
    return null;
}

// Função para excluir um personagem pelo nome
function excluirPersonagem(nome) {
    for (let i = 0; i < personagens.length; i++) {
        if (personagens[i].nome === nome) {
            personagens.splice(i, 1); // Remove o personagem do array
            console.log('Personagem ' + nome + ' excluído.');
            return;
        }
    }
    console.log('Personagem ' + nome + ' não encontrado.');
}

// Função para listar todos os personagens ordenados alfabeticamente
function listarTodosPersonagens() {
    const personagensOrdenados = personagens.slice().sort(function(a, b) {
        return a.nome.localeCompare(b.nome);
    });
    personagensOrdenados.forEach(function(p) {
        console.log('Nome: ' + p.nome + ', Classe: ' + p.classe + ', Nível: ' + p.nivel);
    });
}

// Exemplo de uso
cadastrarPersonagem('Roco', 'Guerreiro', 10, 100, ['Corte', 'Escudo']);
cadastrarPersonagem('Luci', 'Maga', 8, 80, ['Fogo', 'Gelo']);

const Roco = buscarPersonagemPorNome('Roco');
if (Roco) {
    Roco.atacar();
    Roco.usarHabilidade('Corte');
    Roco.verificarStatus();
}

listarTodosPersonagens();
excluirPersonagem('Luci');
listarTodosPersonagens();



// Personagem
class Personagem {
    constructor(nome) {
      this.nome = nome;
      this.pontuacao = 0;
      this.nivel = 1;
    }
  
    ganharPontos(pontos) {
      this.pontuacao += pontos;
      if (this.pontuacao >= 1000) {
        this.nivel++;
        this.pontuacao = 0;
      }
    }
  
    exibirPontuacao() {
      console.log('Pontuação:' , this.pontuacao , '- Nível:', this.nivel);
    }
  }
  
  // Loja de Itens
  class Loja {
    constructor() {
      this.itens = [
        { nome: "Espada", tipo: "arma", preco: 100 },
        { nome: "Armadura", tipo: "armadura", preco: 200 },
        { nome: "Poção", tipo: "poção", preco: 50 }
      ];
    }
  
    comprarItem(itemNome) {
      const item = this.itens.find(item => item.nome === itemNome);
      if (item) {
        console.log('Você comprou o item' + 
            
            
            
            
            
            
            
            
            
            item.nome + 'por', + item.preco +'ouro.');
      } else {
        console.log("Item não encontrado.");
      }
    }
  
    exibirItensDisponiveis() {
      console.log("Itens disponíveis:");
      this.itens.forEach(item => console.log(item.nome  - item.tipo - item.preco, 'ouro'));
    }
  }
  
  // Sistema de Combate
  class Combate {
    constructor() {
      this.atacante;
      this.defensor;
    }
  
    atacar(atacante, defensor) {
      this.atacante = atacante;
      this.defensor = defensor;
      const dano = atacante.forca - defensor.defesa;
      defensor.vida -= dano;
      console.log(atacante.nome+ 'atacou' +defensor.nome +' e causou' +dano+ 'de dano');
    }
  }
  
  // Gestão de Missões
  class Missao {
    constructor(titulo, descricao, recompensa) {
      this.titulo = titulo;
      this.descricao = descricao;
      this.recompensa = recompensa;
    }
  }
  
  class GestaoDeMissoes {
    constructor() {
      this.missoes = [
        new Missao("Missão 1", "Descrição da missão 1", "Recompensa 1"),
        new Missao("Missão 2", "Descrição da missão 2", "Recompensa 2")
      ];
    }
  
    exibirMissoes() {
      console.log("Missões disponíveis:");
      this.missoes.forEach(missao => console.log(missao.titulo - missao.descricao));
    }
  
    completarMissao(missaoTitulo) {
      const missao = this.missoes.find(missao => missao.titulo === missaoTitulo);
      if (missao) {
        console.log('Você completou a missão'+ missao.titulo+ 'e recebeu a recompensa'+ missao.recompensa);
        this.missoes.splice(this.missoes.indexOf(missao), 1);
      } else {
        console.log("Missão não encontrada.");
      }
    }
  }
  
  // Ranking de Jogadores
  class Jogador {
    constructor(nome, nivel, pontuacao) {
      this.nome = nome;
      this.nivel = nivel;
      this.pontuacao = pontuacao;
    }
  }
  
  class Ranking {
    constructor() {
      this.jogadores = [
        new Jogador("Jogador 1", 1, 100),
        new Jogador("Jogador 2", 2, 200)
      ];
    }
  
    exibirRanking() {
      console.log("Ranking de jogadores:");
      this.jogadores.sort((a, b) => b.pontuacao - a.pontuacao).forEach(jogador => console.log(jogador.nome - Nível + jogador.nivel - Pontuação +jogador.pontuacao));
    }
  }
  
  // Interface
  class Interface {
    constructor() {
      this.personagem;
      this.loja;
      this.combate;
      this.gestaoDeMissoes;
      this.ranking;
    }
}
   function menu (){
    console.log(menu)
    console.log('1. jogar')
    console.log('2. ver ranking')
    console.log('3. salir')
   }







    