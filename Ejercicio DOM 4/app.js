const ul = document.getElementById("lista");
const listaLi = document.querySelectorAll("li")

for(li of listaLi){
    ul.removeChild(li);
}

var cadena = "";
for(let i=1; i<6; i++){
    cadena += `<li>${i}</li>`;
}

ul.innerHTML = cadena;