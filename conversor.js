function conversor_dolarPeso(monto){
    let conversor = parseInt(monto) * 230;
    return conversor
}

let nombre = prompt("Hola! ¿Quien sos?");
console.log(nombre, ", bienvenide al conversor Dolar-Pesos");
let monto = prompt("Escribí el monto que quieras convertir a pesos.");
while (monto != "chau") {
    if (monto >= 0) {
        console.log(monto, "dolares son:", conversor_dolarPeso(monto), "pesos");
    }
    else if (monto < 0) {
        console.log("El monto debe ser escrito en números positivos");
    }
    else {
        console.log("El monto debe ser escrito en números");
    }
    monto = prompt("Escribí el monto que quieras convertir a pesos. Para dejar de convertir escribí chau");
}
console.log("Para volver a convertir, actualizá la página");