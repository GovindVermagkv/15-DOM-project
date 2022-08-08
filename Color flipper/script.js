var color=["blue","green","aqua","pink","red"]
var btn=document.getElementById("btn")
function colorchange(){
    randomnumber=getRandomNumber();
    document.body.style.backgroundColor=color[randomnumber]
   

    var head=document.getElementById("colorname");
    head.innerText = color[randomnumber];

}


function getRandomNumber(){
    return Math.floor(Math.random()*color.length);
}