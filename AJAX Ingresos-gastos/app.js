const URL = "https://ejemplo-d49a3.firebaseio.com/ingresos-gastos.json";
const btnGasto = document.getElementById("btnGasto");
const btnIngreso = document.getElementById("btnIngreso");

function getIngGas() {
    fetch(URL)
    .then(resp => {
        return resp.json();
    })
    .then(ingresosGastos => {
        let ul = document.getElementById("lista");
        let arr = [];
        for(let id in ingresosGastos) {
            arr.push(ingresosGastos[id])
        }
        ul.innerHTML = arr.map(elem => `<li>Concepto :${elem.concept} /// Cantidad: ${elem.qty}</li>`).join("");
    })
}

getIngGas();

btnGasto.addEventListener("click", (event) => {
    let inputConcepto = document.getElementById("conceptoGasto");
    let concepto = inputConcepto.value;

    let inputCantidad = document.getElementById("cantidadGasto");
    let cantidad = inputCantidad.value;
    fetch(URL, {
        method: "POST",
        body: JSON.stringify({concept: concepto , qty: cantidad})
    })
    getIngGas();
    inputConcepto.value = "";
    inputCantidad.value = "";
})

btnIngreso.addEventListener("click", (event) => {
    let inputConcepto = document.getElementById("conceptoIngreso");
    let concepto = inputConcepto.value;

    let inputCantidad = document.getElementById("cantidadIngreso");
    let cantidad = inputCantidad.value;
    fetch(URL, {
        method: "POST",
        body: JSON.stringify({concept: concepto , qty: cantidad})
    })
    getIngGas();
    inputConcepto.value = "";
    inputCantidad.value = "";
})