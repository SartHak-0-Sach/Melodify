console.log("hello everyone, welcome to Melodify")

//initializing variables
let songIndex = 0;
let audioElement = new Audio('song1.mp3');
let masterPlay =  document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')

let songs = [
    {songName: 'Song number 1', filePath: "song1.mp3", coverPath: "cover1.jpeg"},
    {songName: 'Song number 2', filePath: "song2.mp3", coverPath: "cover2.jpeg"},
    {songName: 'Song number 3', filePath: "song3.mp3", coverPath: "cover3.jpeg"},
    {songName: 'Song number 4', filePath: "song4.mp3", coverPath: "cover4.jpeg"},
    {songName: 'Song number 5', filePath: "song5.mp3", coverPath: "cover5.jpeg"},
    {songName: 'Song number 6', filePath: "song6.mp3", coverPath: "cover6.jpeg"}
]

// audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

//listening to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update seekbar
    Progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log('Progress');
    myProgressBar.value = Progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration/100);
})