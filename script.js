console.log("hello everyone, welcome to Melodify");

//initializing variables
let songIndex = 0;
let audioElement = new Audio("song1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");

let songs = [
    {
        songName: "Song number 1",
        filePath: "song1.mp3",
        coverPath: "cover1.jpeg",
    },
    {
        songName: "Song number 2",
        filePath: "song2.mp3",
        coverPath: "cover2.jpeg",
    },
    {
        songName: "Song number 3",
        filePath: "song3.mp3",
        coverPath: "cover3.jpeg",
    },
    {
        songName: "Song number 4",
        filePath: "song4.mp3",
        coverPath: "cover4.jpeg",
    },
    {
        songName: "Song number 5",
        filePath: "song5.mp3",
        coverPath: "cover5.jpeg",
    },
    {
        songName: "Song number 6",
        filePath: "song6.mp3",
        coverPath: "cover6.jpeg",
    },
];

songItem.forEach((Element, i) => {
    console.log(Element, i);
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();

//handle play/pause click
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity = 0;
    }
});

//listening to events
audioElement.addEventListener("timeupdate", () => {
    console.log("timeupdate");
    // update seekbar
    Progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log("Progress");
    myProgressBar.value = Progress;
});

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime =
        (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach(
        (Element) => {
            Element.classList.remove("fa-pause");
            Element.classList.add("fa-play");
        }
    );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (Element) => {
        Element.addEventListener("click", (e) => {
            makeAllPlays();
            songindex = parseInt(e.target.id);
            masterSongName.innerText = `Song number ${songIndex+1} is playing, enjoy :)`;
            e.target.classList.remove("fa-play");
            e.target.classList.add("fa-pause");
            audioElement.src = `song${songindex + 1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove("fa-play");
            masterPlay.classList.add("fa-pause");
        });
    }
);

document.getElementById("previous").addEventListener("click", () => {
    if (songIndex >= 6) 
    {
        songIndex = 0;
    } 

    else 
    {
        songIndex + -1;
    }

    audioElement.src = `song${"songindex" + 1}.mp3`;
    masterSongName.innerText = `Song number ${songIndex+1} is playing, enjoy :)`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
});

document.getElementById("next").addEventListener("click", () => {
    if (songIndex <= 0) 
    {
        songIndex = 0;
    } 
    
    else 
    {
        songIndex -= 1;
    }

    audioElement.src = `song${"songindex" + 1}.mp3`;
    masterSongName.innerText = `Song number ${songIndex+1} is playing, enjoy :)`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
});
