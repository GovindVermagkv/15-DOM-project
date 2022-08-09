var color=["blue","green","aqua","pink","red"]
var btn=document.getElementById("btn")
var imge=document.getElementById("img")
var imge2=document.getElementById("img2")
var audio=document.getElementById("audio")


function colorchange(){
    randomnumber=getRandomNumber();
    document.body.style.backgroundColor=color[randomnumber]
    imge.src="1uJP.gif";
    imge.style.display="block"
    imge2.src="1uJP.gif";
    imge2.style.display="block"
   imge2.style.left="10%"

    var head=document.getElementById("colorname");
    head.innerText = color[randomnumber];
    audio.play();
}


function getRandomNumber(){
    return Math.floor(Math.random()*color.length);
}

// setInterval(colorchange,200)