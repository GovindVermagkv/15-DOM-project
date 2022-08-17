var bars=document.getElementById("menubar")
var asides=document.getElementById("aside")
var color=document.getElementById("color")
var header=document.querySelector("header")
var nav=document.querySelector("h1")
var icon=document.querySelector("#color")
var menubars=document.querySelector("#menubar")
var menuse=document.querySelectorAll("a")
var body=document.querySelector("body")

function activeaside(){

    if(asides.style.width=="0%"){
        asides.style.display="block";
        asides.style.width="100%";
        bars.style.color="red";
        bars.style.transform="rotate(90deg)";
    }
    else{
        asides.style.width="0%";
        bars.style.color="blue";
        bars.style.transform="rotate(-90deg)";
    }
}

function colors(){
   if(body.style.backgroundColor !="black"){
    asides.style.backgroundColor="black";
    header.style.backgroundColor="black";
    body.style.backgroundColor="black";
    asides.style.color="white";
    nav.style.color="white";
    icon.style.color="white";
    menuse.style.color="white";
    menubars.style.color="white";
   }
   else{
    asides.style.backgroundColor="white";
    header.style.backgroundColor="white";
    body.style.backgroundColor="white";
    asides.style.color="blue";
    nav.style.color="blue";
    icon.style.color="blue";
    menuse.style.color="blue";
   }
}