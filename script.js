//array
let musicas = [
    {titulo: 'guitar solo',
     artista:'Maikon',
     src:'musicas/Brontosaurus - Topher Mohr and Alex Elena.mp3',
     img:'imagens/leutrim.jpg',  
    },
    {titulo: 'rock',
        artista:'bon',
        src:'musicas/Engine Fire - Silent Partner.mp3',
        img:'imagens/giancarlo.jpg',  
    },
    {titulo: 'hit',
        artista:'jov',
        src:'musicas/Drop and Roll - Silent Partner.mp3',
        img:'imagens/apolo.jpg',  
    },
];
//Variaveis
let musica = document.querySelector('audio');
let duracao = document.querySelector('.fim');
let imagem = document.querySelector("img");
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');
let indexMusica = 0;

renderizarMusica(indexMusica);

//Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click',pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click',() => {
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 2;};
    renderizarMusica(indexMusica);
    tocarMusica()
});

document.querySelector('.proxima').addEventListener('click',() => {
    indexMusica++;
    if(indexMusica > 2){
        indexMusica = 0};
    renderizarMusica(indexMusica);
    tocarMusica()

});

//Function
function renderizarMusica(index){
musica.setAttribute('src',musicas[index].src);
musica.addEventListener('loadeddata', () => {
    nomeMusica.textContent = musicas[index].titulo;
    nomeArtista.textContent = musicas[index].artista;
    imagem.src = musicas[index].img
    duracao.textContent = segundosParaMinutos(Math.floor(musica.duration));


});
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display ='block'
    document.querySelector('.botao-play').style.display ='none'
    
}


function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-play').style.display ='block'
    document.querySelector('.botao-pause').style.display ='none'
}


function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100 ) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
    
}
function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60 );
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}


