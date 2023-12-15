document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const nextBtn = document.getElementById('next-btn');
    const songTitleElement = document.getElementById('song-title');
    const artistElement = document.getElementById('artist');

    
    const playlist = [
        { title: 'spooky jumpscare mansion', artist: 'The Living Tombstone -feat. BSlick & Crusher-P ', source: 'Spookys Jump Scare Mansion Song .mp3' },
        { title: 'Discord remix', artist: 'The Living Tombstone', source: 'discord_remix.mp3' },
        { title: 'Winding Roar', artist: 'Man with a mission', source: 'Winding Road.mp3' },
        { title: 'Hera', artist: 'Pascu & Rodri', source: 'Hera _Destripando la Historia.mp3' },
        { title: 'Hestia', artist: 'Pascu & Rodri', source: 'Hestia _Destripando la Historia.mp3' },
        { title: 'Hermes', artist: 'Pascu & Rodri', source: 'Hermes _Destripando la Historia.mp3' },
    ];

    let currentSongIndex = 0;

 
    function updateSongInfo() {
        const currentSong = playlist[currentSongIndex];
        songTitleElement.textContent = `Canción: ${currentSong.title}`;
        artistElement.textContent = `Artista: ${currentSong.artist}`;
    }

   
    function play() {
        audioPlayer.play();
    }

  
    function pause() {
        audioPlayer.pause();
    }


    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        audioPlayer.src = playlist[currentSongIndex].source;
        updateSongInfo();
        play();
    }

    
    playBtn.addEventListener('click', play);
    pauseBtn.addEventListener('click', pause);
    nextBtn.addEventListener('click', nextSong);

  
    audioPlayer.src = playlist[currentSongIndex].source;
    updateSongInfo();
});
