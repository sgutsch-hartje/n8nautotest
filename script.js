function playAudio(audioId) {
    const audio = document.getElementById('audioPlayer');
    const source = document.getElementById('audioSource');
    
    switch (audioId) {
        case 'audio1':
            source.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
            break;
        case 'audio2':
            source.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3';
            break;
    }
    
    audio.load();
    audio.play();
}