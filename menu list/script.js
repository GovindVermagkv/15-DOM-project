 var filterbtns = document.querySelector(".filter-btn");
 var all = document.querySelector("#all");
 var breakfast = document.querySelector("#breakfast");
 var lunch = document.querySelector("#lunch");
 var shakes = document.querySelector("#shakes");
 var box = document.querySelector(".box");


//  filterbtns.forEach( function (btn) {
//     btn.addEventListener("click",function(e){
//         console.log(e.currentTarget.dataset);
//     });
    
//  });

all.onclick = function sorts(e){
    console.log(e.currentTarget.dataset.id);
}
breakfast.onclick = function sorts(e){
    let  items=(e.currentTarget.dataset.id);
    box.classList.remove("lunch")
    box.classList.remove("shakes")
    box.classList.add("breakfast")
    if(box.classList[1]==items){
        box.style.display="none"
    }
}
lunch.onclick = function sorts(e){
    let  items=(e.currentTarget.dataset.id);
    box.classList.remove("breakfast")
    box.classList.remove("shakes")
    box.classList.add("lunch")
    console.log(box.classList)
    if(box.classList[1]==items){
       alert(items)
    }
}
shakes.onclick = function sorts(e){
    let  items=(e.currentTarget.dataset.id);
    box.classList.remove("breakfast")
    box.classList.remove("lunch")
    box.classList.add("shakes")
    console.log(box.classList)
    if(box.classList[1]==items){
       alert(items)
    }
}

