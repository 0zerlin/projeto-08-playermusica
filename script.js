let musicas = [
  {
    titulo: "Guiar Solo", //0
    artista: "Fulano",
    src: "musicas/Enough - NEFFEX.mp3",
    img: "imagens/mike.jpg",
  },
  {
    titulo: "Eletric Guitar", //1
    artista: "Ciclano",
    src: "musicas/Out on my Skateboard - Mini Vandals,mp3",
    img: "imagens/roman.jpg",
  },
  {
    titulo: "Chill Music", //2
    artista: "Fulano",
    src: "musicas/Breeze - Telescated.mp3",
    img: "imagens/pramod.jpg",
  },
];

let musica = document.querySelector("audio");
let indexMusica = 0;

let duracaoMusica = document.querySelector(".fim");
let imagem = document.querySelector("img");
let nomeMusica = document.querySelector(".descricao h2");
let nomeArtista = document.querySelector(".descricao i");
duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

//eventos
document.querySelector(".botao-play").addEventListener("click", tocarMusica);
document.querySelector(".botao-pause").addEventListener("click", pausarMusica);

musica.addEventListener("timeupdate", atualizarBarra);

document.querySelector(".anterior").addEventListener("click", () => {
  indexMusica--;

  renderizarMusica(indexMusica);
});
document.querySelector(".proximo").addEventListener("click", () => {
  indexMusica++;
  renderizarMusica(indexMusica);
});

//funcoes

function renderizarMusica(index) {
  musica.setAttribute("src", musicas[index].src);
  musica.addEventListener("loadeddata", () => {
    nomeMusica.textContent = musicas[index].titulo;
    nomeArtista.textContent = musicas[index].artista;
    imagem.src = musicas[index].img;
    duracaoMusica.textContent = segundosParaMinutos(
      Math.floor(musica.duration)
    );
  });
}

function tocarMusica() {
  musica.play();
  document.querySelector(".botao-pause").style.display = "block";
  document.querySelector(".botao-play").style.display = "none";
}

function pausarMusica() {
  musica.pause();
  document.querySelector(".botao-pause").style.display = "none";
  document.querySelector(".botao-play").style.display = "block";
}

function atualizarBarra() {
  let barra = document.querySelector("progress");
  barra.style.width =
    Math.floor((musica.currentTime / musica.duration) * 100) + "%";
  let tempoDecorrido = document.querySelector(".inicio");
  tempoDecorrido.textContent = segundosParaMinutos(
    Math.floor(musica.currentTime)
  );
}

function segundosParaMinutos(segundos) {
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;

  if (campoSegundos < 10) {
    campoSegundos = "0" + campoSegundos;
  }

  return campoMinutos + ":" + campoSegundos;
}
