var nametext= document.getElementById("name")
var datetext= document.getElementById("date");
var submit= document.getElementById("submit");
var namevalue= document.getElementById("namevalue");
var audio= document.getElementById("audio");
var main= document.getElementById("main");
var countdown=document.querySelector(".countdown")


submit.addEventListener("click",function () {
    namevalue.textContent=nametext.value;
    document.querySelector(".page1").style.display="none";
    countdown.style.display="flex";;


})



// Set the date we're counting down to
var countDownDate = new Date("august 25, 2022 17:36:02").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.querySelector("#days").innerHTML = days;
  document.querySelector("#hours").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#sec").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    function print(){
        countdown.style.display="none"
        document.querySelector(".pop").style.display="flex";
        main.style.backgroundImage = "url('bday2.gif')";
        document.querySelector(".page1").style.display="none";
        audio.play()
    }
    print()
  }
},1000);

