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