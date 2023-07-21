let audio = document.getElementById('audio');
let play = document.getElementById('play');
let pause = document.getElementById('pause');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnail = document.getElementById('thumbnail');
let songname=document.getElementById("songname");
let mute=document.getElementById('mute');
let muted=document.getElementById('muted');
let progress=document.getElementById('progress');
let currentSong = 0;
let songs = ["Chitti-Story.mp3","omg.mp3", "Ranjithame.mp3","MastaaruMastarru.mp3","No-Lie.mp3"];
let thumbnails = ["master.jfif","omg.jfif", "vaarasudu.jfif","sir.jpg","no-lie.jfif"];

let currentsong = 0;
audio.src = './media/' + songs[currentSong];
thumbnail.src = './thumbnails/' + thumbnails[currentSong];
songName.innerHTML = songs[currentSong];
play.addEventListener('click', () => {
    audio.play();
    pause.style.display = 'block';
    play.style.display = 'none';
});
pause.addEventListener('click', () => {
    pause.style.display = 'none';
    play.style.display = 'block';
    audio.pause();
})

next.addEventListener('click', () => {
    currentSong++;
    if (songs.length == currentSong) {
        currentSong = 0;
    }
    audio.src = './media/' + songs[currentSong];
    thumbnail.src = './thumbnails/' + thumbnails[currentSong];
    songName.innerHTML = songs[currentSong];

    pause.style.display = 'block';
    play.style.display = 'none';
    audio.play();
})

prev.addEventListener('click', () => {
    currentSong--;
    if (currentSong == -1) {
        currentSong = songs.length - 1;
    }
    audio.src = './media/' + songs[currentSong];
    thumbnail.src = './thumbnails/' + thumbnails[currentSong];
    songName.innerHTML = songs[currentSong];

    pause.style.display = 'block';
    play.style.display = 'none';

    audio.play();

})
mute.addEventListener('click', () => {
    console.log(audio.muted);
    audio.muted = false;
    muted.style.display = 'block';
    mute.style.display = 'none'
});
muted.addEventListener('click', () => {
    console.log(audio.muted);

    audio.muted = true;
    mute.style.display = 'block';
    muted.style.display = 'none'
});
progress.addEventListener('change', () => {
    audio.currentTime = progress.value;
})
setInterval(() => {
    progress.max = audio.duration;
    progress.value = audio.currentTime;
}, 1000);