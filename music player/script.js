var song1=document.getElementById("mp3")
var changebtn=document.getElementById("play")
var changebtn2=document.getElementById("pause")



function playing(){
    song1.play()
    changebtn.style.display="none"
    changebtn2.style.display="block"
}
function pausing(){
    song1.pause();
    changebtn.style.display="block"
    changebtn2.style.display="none"
}