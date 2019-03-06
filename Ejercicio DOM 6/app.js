const btnNext = document.getElementById("btnNext");
const btnBack = document.getElementById("btnBack");
const btns = document.getElementsByClassName("btn");
const body = document.querySelector("body")

// btns.array.forEach(element => {
//     element.addEventListener("click", event => {
//         console.log("patata");
// )}
//     }
var imgs = [];
var indice = 1;
var imgLeft = document.getElementById("imgLeft")
var imgCenter = document.getElementById("imgCenter")
var imgRight = document.getElementById("imgRight")

for(let i = 1; i<=6; i++) {
    let img = new Image();
    img.src = "./img/img"+i+".jfif";
    imgs.push(img);
}

imgLeft.src = imgs[indice-1].src;
imgCenter.src = imgs[indice].src;
imgRight.src = imgs[indice+1].src;

for(let i of btns) {
    i.addEventListener("click", event => {
        if(i.id == "btnNext") {
            indice = indice +1;
            if(indice == imgs.length) {
                indice = 0;
            }

            imgCenter.src = imgs[indice].src;
            if(indice == imgs.length-1) imgRight.src = imgs[0].src; 
            else imgRight.src = imgs[indice+1].src;
            if(indice == 0) imgLeft.src = imgs[imgs.length-1].src
            else imgLeft.src = imgs[indice-1].src;
        }
        else if(i.id == "btnBack"){
            indice--;
            if(indice == -1) {
                indice = imgs.length-1;
            }
            
            imgCenter.src = imgs[indice].src;
            if(indice == imgs.length-1) imgRight.src = imgs[0].src; 
            else imgRight.src = imgs[indice+1].src;
            if(indice == 0) imgLeft.src = imgs[imgs.length-1].src
            else imgLeft.src = imgs[indice-1].src;
        }
    })
}

function cambiarIndice(dir) {
    if(dir == "izq") {
        if(indice == 0) {
            indice = imgs.length-1;
        }
        else {
            indice--
        }
    }
    if(dir == "der") {
        if(indice == imgs.length-1) {
            indice = 0;
        }
        else {
            indice++
        }
    }
}
