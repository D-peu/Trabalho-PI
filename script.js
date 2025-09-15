
const video = document.getElementById('video');
video.playbackRate = 0.99;

const musica = document.getElementById('musica');
musica.src = "musics/beat021.wav";

const imagem = document.getElementById("img");

imagem.addEventListener("click", () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

// Acessa o elemento que exibe o nome do produto na tela principal
const nomeProdutoPrincipal = document.getElementById('nome-produto-principal');

// Verifica se existe um nome de produto salvo no LocalStorage
const nomeSalvo = localStorage.getItem('nomeProduto');

if (nomeSalvo) {
    // Se houver um nome salvo, atualiza o texto na tela
    nomeProdutoPrincipal.textContent = nomeSalvo;
}
