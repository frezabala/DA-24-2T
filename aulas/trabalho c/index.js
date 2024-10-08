// Definição do objeto Personagem
function Personagem(nome, vida, armas) {
    this.nome = nome;
    this.vida = vida;
    this.armas = armas;
  }
  
  // Definição do objeto Arma
  function Arma(nome, dano) {
    this.nome = nome;
    this.dano = dano;
  }
  
  // Função para validar os personagens
  function validarPersonagens(personagens) {
    for (var i = 0; i < personagens.length; i++) {
      var personagem = personagens[i];
      
      // Verificar se o personagem possui um nome válido
      if (!personagem.nome || typeof personagem.nome !== 'string') {
        console.log('Personagem ' + (i+1) + ' possui um nome inválido.');
      }
      
      // Verificar se o personagem possui uma vida válida
      if (!personagem.vida || typeof personagem.vida !== 'number' || personagem.vida <= 0) {
        console.log('Personagem ' + (i+1) + ' possui uma vida inválida.');
      }
      
      // Verificar se o personagem possui armas válidas
      if (!personagem.armas || !Array.isArray(personagem.armas)) {
        console.log('Personagem ' + (i+1) + ' possui armas inválidas.');
      } else {
        for (var j = 0; j < personagem.armas.length; j++) {
          var arma = personagem.armas[j];
          
          // Verificar se a arma possui um nome válido
          if (!arma.nome || typeof arma.nome !== 'string') {
            console.log('Arma ' + (j+1) + ' do personagem ' + (i+1) + ' possui um nome inválido.');
          }
          
          // Verificar se a arma possui um dano válido
          if (!arma.dano || typeof arma.dano !== 'number' || arma.dano <= 0) {
            console.log('Arma ' + (j+1) + ' do personagem ' + (i+1) + ' possui um dano inválido.');
          }
        }
      }
    }
  }
  
  // Exemplos de uso
  var personagens = [
    new Personagem('Link', 100, [
      new Arma('Espada', 10),
      new Arma('Arco', 5)
    ]),
    new Personagem('Zelda', 80, [
      new Arma('Varinha', 8)
    ])
  ];
  
  validarPersonagens(personagens);