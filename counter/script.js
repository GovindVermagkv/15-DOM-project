var up=document.getElementById("up")
var refresh=document.getElementById("refresh")
var down=document.getElementById("down")
var display=document.getElementById("display")
var upshow=document.getElementById("upshow")
var downshow=document.getElementById("downshow")
var audio=document.getElementById("audio")
var count=0;
var count2=0;

function upvote(){
    count=count+1;
    display.textContent=count;
    upshow.textContent=count;
    display.style.color="green";
    up.style.color="blue";
    audio.play()
  
}
function refreshing(){
    display.textContent="0";
    upshow.textContent="0";
    downshow.textContent="0";
    display.style.color="black";
    refresh.style.color="green";
}

function downvote(){
    count2=count2+1;
    display.textContent=count2;
    downshow.textContent=count2;
    display.style.color="red";
    down.style.color="red";
    display.style.transition=".5s";
    audio.play()
}