const albums = document.querySelectorAll('.album');
const audioPlayer = document.getElementById('player');

albums.forEach(album => {
    album.addEventListener('mouseenter', () => {
        const song = album.getAttribute('data-song');
        audioPlayer.src = song;
        audioPlayer.play();
    });

    album.addEventListener('mouseleave', () => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    });
});

const videoItems = document.querySelectorAll('.video-item video');

videoItems.forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.play();
    });

    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });
});

const formulario = document.getElementById('formularioContato');
const mensagemEnviada = document.getElementById('mensagemEnviada');
const novaMensagemBtn = document.getElementById('novaMensagemBtn');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
    formulario.style.display = 'none';
    mensagemEnviada.style.display = 'block';
    formulario.classList.add('hidden');
    mensagemEnviada.classList.add('visible');
});

novaMensagemBtn.addEventListener('click', function() {
    mensagemEnviada.style.display = 'none';
    formulario.style.display = 'block';
    mensagemEnviada.classList.remove('visible');
    formulario.classList.remove('hidden');
    
    formulario.reset();
});