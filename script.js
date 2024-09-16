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
