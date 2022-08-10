var song1=document.getElementById("mp3")
var changebtn=document.getElementById("play")
var changebtn2=document.getElementById("pause")
var next=document.getElementById("next")
var pre=document.getElementById("pre")
var songname=document.getElementById("songname")

var songs=["humnava.mp3","chand.mp3","kitna chahne.mp3","Ae_Dil_Hai_Mushkil.mp3","Afghan_Jalebi.mp3","Bolo_Har_Har_Har.mp3","do pag maar.mp3","Hamari_Adhuri_Kahani.mp3","zra.mp3","Katra_Katra.mp3"]

function pausing(){
    song1.pause();
    changebtn.style.display="block"
    changebtn2.style.display="none"
}

var count=0
function nexting(){
    pre.style.color="red"
    changebtn.style.display="none"
    changebtn2.style.display="block"
   
    if(count >= songs.length){
        changebtn.style.display="block"
        changebtn2.style.display="none"
        next.style.color="aqua"
        songname.innerText="Add more songs for play";
        song1.pause();
    }
    else{
        song=songs[count]
        song1.src="audio/"+song;
        song1.play();
        count++;
        songname.innerText=song;

    }
    
}

function previous(){
    next.style.color="red"
    changebtn.style.display="none"
    changebtn2.style.display="block"

    if(count < 0){
        changebtn.style.display="block"
        changebtn2.style.display="none"
        pre.style.color="aqua"
        songname.innerText="Add more songs for play";
        song1.pause();
    }
    else{
        song=songs[count]
        song1.src="audio/"+song;
        song1.play();
        count--;
        console.log(song);
        songname.innerText=song;
    }
}

function playing(){
    // song1.src="zra.mp3"
    if(count==0){
        song1.src="zra.mp3"
    song1.play()
    }
    else{
        song1.play()
    }
    changebtn.style.display="none"
    changebtn2.style.display="block"
}