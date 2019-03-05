const URL = "https://ejemplo-d49a3.firebaseio.com/ingresos-gastos.json";
const btnGasto = document.getElementById("btnGasto");
const btnIngreso = document.getElementById("btnIngreso");

function getIngGas() {
    fetch(URL)
    .then(resp => {
        return resp.json();
    })
    .then(ingresosGastos => {
        var ingresosTotales = 0;
        var gastosTotales = 0;
        let ul = document.getElementById("lista");
        let arr = [];
        for(let id in ingresosGastos) {
           if(ingresosGastos[id].qty != undefined){
                arr.push(ingresosGastos[id])
                if(ingresosGastos[id].qty < 0) gastosTotales -= parseFloat(ingresosGastos[id].qty)
                else if(ingresosGastos[id].qty > 0) {
                    ingresosTotales += parseFloat(ingresosGastos[id].qty)
                }
           }
        }
        ul.innerHTML = arr.map(elem =>  `<li style="background-color: ${elem.qty < 0 ? "red" : "green"}">Concepto :${elem.concept}
                                         /// Cantidad: ${elem.qty}</li>`).join("");
        let aGastos = document.getElementById("gastosTotales");
        let aIngresos = document.getElementById("ingresosTotales");
        let aTotal = document.getElementById("total");
        aGastos.textContent = " "+gastosTotales;
        aIngresos.textContent = " "+ingresosTotales;
        aTotal.textContent = " " + (parseFloat( ingresosTotales) - parseFloat( gastosTotales));
    })
}

getIngGas();
//nuke();

function nuke() {
    fetch(URL)
    .then(resp => {
        return resp.json();
    })
    .then(ingresosGastos => {
        for(let id in ingresosGastos) {
            fetch(URL, {
                method: "DELETE",
                body: JSON.stringify(ingresosGastos[id])
            })
        }
    })
}

btn.addEventListener("click", (event) => {
    let inputConcepto = document.getElementById("concepto");
    let concepto = inputConcepto.value;

    let inputCantidad = document.getElementById("cantidad");
    let cantidad = inputCantidad.value;
    fetch(URL, {
        method: "POST",
        body: JSON.stringify({concept: concepto , qty: cantidad})
    })
    getIngGas();
    inputConcepto.value = "";
    inputCantidad.value = "";
})