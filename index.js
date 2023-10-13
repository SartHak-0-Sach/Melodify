console.log("hello everyone, welcome to Melodify")

//initializing variables
let songIndex = 0;
let audioElement = new Audio('song.mp3');
let masterPlay =  document.getElementById('masterPlay')

let songs = [
    {songName: 'Dance for me', filePath: "song.mp3", coverPath: "cover1.jpeg"},
    {songName: 'Dance for me', filePath: "song.mp3", coverPath: "cover1.jpeg"},
    {songName: 'Dance for me', filePath: "song.mp3", coverPath: "cover1.jpeg"},
    {songName: 'Dance for me', filePath: "song.mp3", coverPath: "cover1.jpeg"},
    {songName: 'Dance for me', filePath: "song.mp3", coverPath: "cover1.jpeg"},
    {songName: 'Dance for me', filePath: "song.mp3", coverPath: "cover1.jpeg"}
]

// audioElement.play();

//listening to events
document.addEventListener('time')
