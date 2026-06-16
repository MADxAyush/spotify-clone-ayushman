// console.log("Welcome to MY Music App");

// let songIndex = 0;
// let audioElement = new Audio('songs_pro/Mortals.mp3');
// //audioElement.play();
// let masterPlay = document.getElementById('masterPlay');
// let progressBar = document.getElementById('progressBar');
// let gif = document.getElementById('gif');
// let songItems = Array.from(document.getElementsByClassName('songItems'));
// let masterSongName = document.getElementById('masterSongName');

// let songs = [
//    { songName: "Mortals", filePath: "songs_pro/1.mp3", coverPath: "images_spotify/mortals-feat-laura-brehm-1586948734-yFnA6l5Geq.jpg" },
//     { songName: "Fearless pt. II", filePath: "songs_pro/2.mp3", coverPath: "" },
//     { songName: "Sky High", filePath: "songs_pro/3.mp3", coverPath: "" },
//     { songName: "On & On", filePath: "songs_pro/4.mp3", coverPath: "" },
//     { songName: "Invincible", filePath: "songs_pro/5.mp3", coverPath: "" },
// ]
// songItems.forEach((element, i) => {
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
// })

// masterPlay.addEventListener('click', () => {
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play();
//         masterPlay.querySelector('i').classList.remove('fa-circle-play')
//         masterPlay.querySelector('i').classList.add('fa-circle-pause')
//         gif.style.opacity = 1;
//     } else {
//         audioElement.pause();
//         masterPlay.classList.remove('fa-circle-pause')
//         masterPlay.classList.add('fa-circle-play')
//         gif.style.opacity = 0;
//     }
// })

// audioElement.addEventListener('timeupdate', () => {
//     console.log('timeupdate');
//     progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
//     progressBar.value = progress;
// })

// progressBar.addEventListener('change', () => {
//     audioElement.currentTime = progressBar.value * audioElement.duration / 100;
// })

// const makeAllPlays = () => {
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//         element.querySelector('i').classList.remove('fa-circle-pause');
//         element.querySelector('i').classList.add('fa-circle-play');
//     })
// }

// Array.from(document.getElementsByClassName('songItemPlay') ).forEach((element) => {
//     element.addEventListener('click', (e) => {
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         gif.style.opacity = 1;
//         masterSongName.innerText = songs[songIndex].songName;
//         e.target.querySelector('i').classList.remove('fa-circle-play');
//         e.target.querySelector('i').classList.add('fa-circle-pause');
//         audioElement.src = `songs_pro/${songIndex+1}.mp3`;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         masterPlay.querySelector('i').classList.remove('fa-circle-play');
//         masterPlay.querySelector('i').classList.add('fa-circle-pause');
//     })
// })


// document.getElementById('next').addEventListener('click', () => {
//     if (songIndex >= 4) {
//         songIndex = 0;
//     } else {
//         songIndex = songIndex + 1;
//     }
//     gif.style.opacity = 1;
//     audioElement.src = `songs_pro/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.querySelector('i').classList.remove('fa-circle-play');
//     masterPlay.querySelector('i').classList.add('fa-circle-pause');
// })

// document.getElementById('previous').addEventListener('click', () => {
//     if (songIndex <= 0) {
//         songIndex = 0;
//     } else {
//         songIndex = songIndex - 1;
//     }
//     gif.style.opacity = 1;
//     audioElement.src = `songs_pro/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.querySelector('i').classList.remove('fa-circle-play');
//     masterPlay.querySelector('i').classList.add('fa-circle-pause');
// })
console.log("Welcome to MY Music App");

let songIndex = 0;
let audioElement = new Audio('songs_pro/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songs = [
   { songName: "Mortals", filePath: "songs_pro/1.mp3" },
    { songName: "Fearless pt. II", filePath: "songs_pro/2.mp3" },
    { songName: "Sky High", filePath: "songs_pro/3.mp3" },
    { songName: "On & On", filePath: "songs_pro/4.mp3" },
    { songName: "Invincible", filePath: "songs_pro/5.mp3" },
]

document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.songItems').forEach((element, i) => {
        if (songs[i]) {
            element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
        }
    });

    const getIcon = (el) => el.querySelector('i') || el.querySelector('svg');

    const makeAllPlays = () => {
        document.querySelectorAll('.songItemPlay').forEach((el) => {
            const icon = getIcon(el);
            if (icon) {
                icon.classList.remove('fa-circle-pause');
                icon.classList.add('fa-circle-play');
            }
        });
    };

    const playCurrentSong = (resetTime = true) => {
        // Only change source if needed
        if (audioElement.src.indexOf(songs[songIndex].filePath) === -1) {
            audioElement.src = songs[songIndex].filePath;
        }
        
        masterSongName.innerText = songs[songIndex].songName;
        
        if (resetTime) {
            audioElement.currentTime = 0;
        }
        
        audioElement.play();

        const masterIcon = getIcon(masterPlay);
        if (masterIcon) {
            masterIcon.classList.remove('fa-circle-play');
            masterIcon.classList.add('fa-circle-pause');
        }
        if (gif) gif.style.opacity = "1";

        makeAllPlays();
        const current = document.getElementById(songIndex);
        if (current) {
            const icon = getIcon(current);
            if (icon) {
                icon.classList.remove('fa-circle-play');
                icon.classList.add('fa-circle-pause');
            }
        }
    };

    // Master Play/Pause - Resume Fix
    masterPlay.addEventListener('click', () => {
        if (audioElement.paused) {
            playCurrentSong(false);   // resume
        } else {
            audioElement.pause();
            const masterIcon = getIcon(masterPlay);
            if (masterIcon) {
                masterIcon.classList.remove('fa-circle-pause');
                masterIcon.classList.add('fa-circle-play');
            }
            if (gif) gif.style.opacity = "0";
            makeAllPlays();
        }
    });

    // Song List
    document.querySelectorAll('.songItemPlay').forEach((element) => {
        element.addEventListener('click', () => {
            makeAllPlays();
            songIndex = parseInt(element.id);
            playCurrentSong(true);   // start from beginning
        });
    });

    // Next / Previous
    document.getElementById('next').parentElement.addEventListener('click', (e) => {
        if (e.target.closest('#next')) {
            songIndex = (songIndex + 1) % songs.length;
            playCurrentSong(true);
        }
    });

    document.getElementById('previous').parentElement.addEventListener('click', (e) => {
        if (e.target.closest('#previous')) {
            songIndex = (songIndex - 1 + songs.length) % songs.length;
            playCurrentSong(true);
        }
    });

    // Auto next
    audioElement.addEventListener('ended', () => {
        songIndex = (songIndex + 1) % songs.length;
        playCurrentSong(true);
    });

    // Progress
    audioElement.addEventListener('timeupdate', () => {
        if (audioElement.duration) {
            let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
            progressBar.value = progress;
        }
    });

    progressBar.addEventListener('change', () => {
        audioElement.currentTime = progressBar.value * audioElement.duration / 100;
    });
});