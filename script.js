//****Declaração das cartas****//
var cartas = [
  {
    nome: "Bulbasaur",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    atributos: {
      ataque: 30,
      defesa: 30,
      velocidade: 30
    }
  },
  {
    nome: "Charizard",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    atributos: {
      ataque: 50,
      defesa: 50,
      velocidade: 60
    }
  },
  {
    nome: "Squirtle",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    atributos: {
      ataque: 30,
      defesa: 40,
      velocidade: 30
    }
  },
  {
    nome: "Butterfree",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    atributos: {
      ataque: 30,
      defesa: 30,
      velocidade: 50
    }
  },
  {
    nome: "Pidgeot",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
    atributos: {
      ataque: 50,
      defesa: 50,
      velocidade: 60
    }
  },
  {
    nome: "Pikachu",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    atributos: {
      ataque: 40,
      defesa: 30,
      velocidade: 60
    }
  },
  {
    nome: "Magmar",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png",
    atributos: {
      ataque: 60,
      defesa: 40,
      velocidade: 60
    }
  },
  {
    nome: "Flareon",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png",
    atributos: {
      ataque: 80,
      defesa: 40,
      velocidade: 60
    }
  },
  {
    nome: "Primeape",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png",
    atributos: {
      ataque: 70,
      defesa: 60,
      velocidade: 60
    }
  },
  {
    nome: "Rattata",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
    atributos: {
      ataque: 40,
      defesa: 30,
      velocidade: 50
    }
  }
];
//****Declaração das cartas****//

//****inicio****
var cartaMaquina;
var cartaJogador;
var placar = [0, 0];
exibirPlacar();

function sortearCarta() {
  zerarCarta("carta-jogador");
  zerarCarta("carta-maquina");
  resultado.innerHTML = "";

  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];
  // console.log(cartaMaquina);

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  // document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

// function exibirOpcoes() {
//   var opcoes = document.getElementById("opcoes");
//   var opcoesTexto = "";
//   for (var atributo in cartaJogador.atributos) {
//     opcoesTexto +=
//       "<input type='radio' name='atributo' value='" +
//       atributo +
//       "'>" +
//       atributo;
//   }
//   opcoes.innerHTML = opcoesTexto;
// }

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    placar[0]++; //adiciona ponto para jogador
    htmlResultado = "<p class ='resultado-final'>Você Ganhou 🏆</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    placar[1]++; // adiciona ponto para o computador
    htmlResultado =
      "<p class='resultado-final'>Você Perdeu ☹️, o atributo da máquina é maior</p>";
  } else {
    htmlResultado =
      "<p class='resultado-final'>Empatou 🤜🤛, niguém marca ponto</p>";
  }
  divResultado.innerHTML = htmlResultado;
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnSortear").disabled = false;
  exibirCartaMaquina();
  exibirPlacar();
}

function habilitarJogar() {
  document.getElementById("btnJogar").disabled = false;
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.seekpng.com/png/full/827-8271192_mtg-blank-card-template-80541-mtg-blue-card.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' onclick= 'habilitarJogar()' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.seekpng.com/png/full/827-8271192_mtg-blank-card-template-80541-mtg-blue-card.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

//****placar****
function exibirPlacar() {
  var placarJogador = document.getElementById("pJogador");
  var placarComputador = document.getElementById("pMaquina");
  placarJogador.innerHTML = `${placar[0]}`;
  placarComputador.innerHTML = `${placar[1]}`;
}

function zerarCarta(id) {
  var idCarta = document.getElementById(id);
  var idCartaTexto =
    '<img src="https://tcg.pokemon.com/assets/img/global/tcg-card-back.jpg" style="width: inherit; height: inherit; position: absolute;">';
  idCarta.innerHTML = idCartaTexto;
}