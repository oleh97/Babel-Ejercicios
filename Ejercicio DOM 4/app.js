const ul = document.getElementById("lista");
const listaLi = document.querySelectorAll("li")

for(i in listaLi){
    ul.removeChild(listaLi[i]);
}

for(let i=1; i<6; i++){
    console.log(i)
    ul.innerHTML(`<li>${i}</li>`)
}