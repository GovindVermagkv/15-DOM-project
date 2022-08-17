var bars=document.getElementById("menubar")
var pop=document.getElementById("pop")
var color=document.getElementById("color")
var header=document.querySelector("header")
var nav=document.querySelector("h1")
var icon=document.querySelector("#color")
var menubars=document.querySelector("#menubar")
var menuse=document.querySelectorAll("a")
var body=document.querySelector("body")

function activeaside(){

    if(pop.style.height=="0px"){
        pop.style.height="100px";
        bars.style.color="red";
        bars.style.transform="rotate(90deg)";
    }
    else{
        pop.style.height="0px";
        bars.style.color="white";
        bars.style.transform="rotate(-90deg)";
    }
}

function colors(){
   if(body.style.backgroundColor !="black"){
    pop.style.backgroundColor="black";
    header.style.backgroundColor="black";
    body.style.backgroundColor="black";
    asides.style.color="white";
    nav.style.color="white";
    icon.style.color="white";
    menuse.style.color="white";
    menubars.style.color="white";
   }
   else{
    pop.style.backgroundColor="white";
    header.style.backgroundColor="white";
    body.style.backgroundColor="white";
    asides.style.color="blue";
    nav.style.color="blue";
    icon.style.color="blue";
    menuse.style.color="blue";
   }
}