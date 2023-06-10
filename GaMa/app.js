const music =new Audio('audio/2.mp3');
//music.play();
const songs=[
    {
        id: 1,
        songName: ` Hislerim <br>
        <div class="subtitle">Serhmes dumus</div>`,
        poster:"img/1.jpg"
    },
    {
        id: 2,
        songName: ` Mi Amor <br><div class="subtitle">Sharn</div>`,
        poster:"img/2.jpg"
    },
    {
        id: 3,
        songName: ` Monody <br>
        <div class="subtitle">The fat rat</div>`,
        poster:"img/3.jpg"
    },
    {
        id: 4,
        songName: ` Distance Love <br>
        <div class="subtitle">Zehr vibe</div>`,
        poster:"img/4.jpg"
    },
    {
        id: 5,
        songName: ` Gall Khaas <br>
        <div class="subtitle">Zehr vibe</div>`,
        poster:"img/5.jpg"
    },
    {
        id: 6,
        songName: ` Bismillah <br>
        <div class="subtitle">sardar</div>`,
        poster:"img/6.jpg"
    },
    {
        id: 7,
        songName: ` The Blinding lights <br>
        <div class="subtitle">The Weekend</div>`,
        poster:"img/7.jpg"
    },
    {
        id: 8,
        songName: ` Unstoppable <br>
        <div class="subtitle">Sia</div>`,
        poster:"img/8.jpg"
    },{
        id: 9,
        songName: ` Remember the name <br>
        <div class="subtitle">Fort minor</div>`,
        poster:"img/9.jpg"
    },
    {
        id: 10,
        songName: ` Him & I <br>
        <div class="subtitle">hasley</div>`,
        poster:"img/10.jpg"
    },
    {
        id: 11,
        songName: ` I will dance <br>
        <div class="subtitle">Wednesday</div>`,
        poster:"img/11.jpg"
    },
    {
        id: 12,
        songName: ` Safar<br>
        <div class="subtitle">Juss</div>`,
        poster:"img/12.jpg"
    },{
        id: 13,
        songName: ` Gang wale munde <br>
        <div class="subtitle">Paradox</div>`,
        poster:"img/13.jpg"
    },
    {
        id: 14,
        songName: ` Ye Jaawani hai deewani <br>
        <div class="subtitle">Pritam</div>`,
        poster:"img/14.jpg"
    },
    {
        id: 15,
        songName: `Aadat <br>
        <div class="subtitle">Ninja</div>`,
        poster:"img/15.jpg"
    },
];
/*Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});*/
let masterPlay=document.getElementById('masterPlay');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click',()=>{
   if(music.paused || music.currentTime<=0){
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
} else{
    music.pause();
    wave.classList.remove('active1');
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');

}
});

const makeAllplays=() =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-pause-circle-fill');
        el.classList.remove('bi-play-circle-fill');
    })
}
const makeAllBackground=() =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background='rgb(105, 105,105 ,.0)';
    })
}

let index=0;
let poster_masterplay=document.getElementById('poster_masterplay');
let download_music=document.getElementById('download_music');

let title=document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el)=>{
        index=el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_masterplay.src=`img/${index}.jpg`;
        music.play();
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        download_music.href =`audio/${index}.mp3`;

        let songTitles = songs.filter((els) =>{
             return els.id == index;

        });

        songTitles.forEach(elss =>{
            let{songName}=elss;
            title.innerHTML=songName;
            download_music.setAttribute('download',songName);
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105,105 ,.1)";
        makeAllplays();
        e.target.classList.add('bi-pause-circle-fill');
        e.target.classList.remove('bi-play-circle-fill');
    });
});

let currentStart =document.getElementById('currentStart');
let currentEnd =document.getElementById('currentEnd');
let seek =document.getElementById('seek');
let bar2 =document.getElementById('bar2');
let dot =document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;
    let min1 = Math.floor(music_dur /60);
    let sec1 = Math.floor(music_dur %60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentEnd.innerText=`${min1}:${sec1}`;
    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);
    if(sec2<10){
        sec2=`0${sec2}`;
    }

    currentStart.innerText=`${min2}:${sec2}`;
     
    let progressBar= parseInt((music_curr/music_dur)*100);
    seek.value=progressBar;
    let seekbar =seek.value;
    bar2.style.width =`${seekbar}%`;
    dot.style.left=`${seekbar}%`;

});
seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/ 100;
});
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if(vol.value>0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');   
    }
    if(vol.value>20){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');   
    }
    if(vol.value>75){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');   
    }
    let vol_a =vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;
});
let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click', ()=>{
    index -=1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_masterplay.src=`img/${index}.jpg`;
    music.play();
    masterPlay.classList.add('bi-pause-fill');
    masterPlay.classList.remove('bi-play-fill');

    let songTitles = songs.filter((els) =>{
         return els.id == index;

    });

    songTitles.forEach(elss =>{
        let{songName}=elss;
        title.innerHTML=songName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105,105 ,.1)";
    makeAllplays();
    e.target.classList.add('bi-pause-circle-fill');
    e.target.classList.remove('bi-play-circle-fill');
})

next.addEventListener('click', ()=>{
    index++;
    if(index>Array.from(document.getElementsByClassName('songItem')).length){
        index=1;
    }
    music.src = `audio/${index}.mp3`;
    poster_masterplay.src=`img/${index}.jpg`;
    music.play();
    masterPlay.classList.add('bi-pause-fill');
    masterPlay.classList.remove('bi-play-fill');

    let songTitles = songs.filter((els) =>{
         return els.id == index;

    });

    songTitles.forEach(elss =>{
        let{songName}=elss;
        title.innerHTML=songName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105,105 ,.1)";
    makeAllplays();
    e.target.classList.add('bi-pause-circle-fill');
    e.target.classList.remove('bi-play-circle-fill');
});


let pop_song_left =document.getElementById('pop_song_left');
let pop_song_right =document.getElementById('pop_song_right');
let pop_song =document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft +=330;
});
pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft -=330;
});
let pop_art_left =document.getElementById('pop_art_left');
let pop_art_right =document.getElementById('pop_art_right');
let Artist_bx =document.getElementsByClassName('Artists_bx')[0];

let shuffle= document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click', ()=>{
    let a=shuffle.innerHTML;
    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML='repeat';
            break;
    
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML='random';
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML='next';
            break;
    };
})