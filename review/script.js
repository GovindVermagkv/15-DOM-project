const review=
[
[
"https://www.vogue.in/content/your-guide-to-copying-your-favourite-celebritys-signature-hairstyle",
"Adam Aikin",
"Java Dev",
" Our mission is to be Earth's most customer-centric company. This is what unites Amazonians across teams and geographies as we are all striving to delight."
],
[
"https://www.bbc.com/culture/article/20200724-how-the-world-turned-on-celebrities",
"Alex Anderson",
"Python Dev",
"You'll also hear us say that at Amazon, it's always Day 1.​ What do we mean? That our approach remains the same as it was on Amazon's very first day - to make smart, f."
],
[
"https://www.bbc.com/culture/article/20200724-how-the-world-turned-on-celebrities",
"Aaron Bateman",
"MERN DEV",
"We are driven by the excitement of building technologies, inventing products, and providing services that change lives. We embrace new ways of doing things, make."
],
[
"https://www.bbc.com/culture/article/20200724-how-the-world-turned-on-celebrities" ,
"Ben Bongard",
"Tester",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis ad totam necessitatibus from Amazon Web Services to Alexa on behalf blanditiis cum.."
],
[
"https://www.bbc.com/culture/article/20200724-how-the-world-turned-on-celebrities",
"Carl Anderson",
"MEAN",
"Together, Amazonians research and develop new technologies from Amazon Web Services to Alexa on behalf of our customers."
]
]
let count=0
const pre=document.querySelector(".pre")
const next=document.querySelector(".next")


const img=document.querySelector(".p_img")
const name=document.querySelector(".name")
const job =document.querySelector(".job")
const info=document.querySelector(".info")


pre.addEventListener('click',previousReview)
next.addEventListener('click',nextReview)

function previousReview(){

    count--
    if (count>review.length-1 || count<0 ) {
        count=review.length-1
    }
    reviews()
   
    // console.log(count)
    }
    
function nextReview(){
    count++
    
    if (count>review.length-1 || count<0 ) {
        count=0
    }
    reviews()
    // console.log(count)
}

function reviews(){
    img.setAttribute('src',review[count][0])
    name.innerText=review[count][1]
    job.innerText=review[count][2]
    info.innerText=review[count][3]
}