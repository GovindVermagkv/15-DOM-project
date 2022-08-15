var checks1= document.getElementById("checkbox1")
var checks2= document.getElementById("checkbox2")
var checks3= document.getElementById("checkbox3")
var checks4= document.getElementById("checkbox4")
var submit= document.getElementById("submit")
// var popbox= document.getElementById("popbox")
var image= document.getElementById("image")
var audio= document.getElementById("audio")
var center2= document.querySelector(".center2")


function done(){
    if(checks1.checked ==true && checks2.checked == true && checks3.checked == true && checks4.checked == true  ){
       center2.style.display="none";
        image.style.display="block";
        audio.play()
        // alert("all selected")
    }
    else{
        alert("PLEASE CHECK ALL THE BOXES")
    }
}