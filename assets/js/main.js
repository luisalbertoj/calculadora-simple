let a = "";
let b = "";
let opcion = "";
const datos = () => {
    a = parseFloat(prompt("Ingresa el primer numero"));
    b = parseFloat(prompt("Ingresa el segundo numero"));
};
const suma = (a, b) => {
    console.log(a,b);
    return alert(a + b);
};
const resta = (a, b) => {
    return alert(a - b);
};
const multiplicar = (a, b) => {
    return alert(a * b);
}
const dividir = (a, b) => {
    if (b == 0) {
        return alert("no se puede dividir entre 0");
    } else {
        return alert(a / b);
    }
}
while (opcion != 5) {
    opcion = prompt(`
    Selecciona la operacion a realizar:
    1. suma
    2. resta
    3. multiplicar
    4. dividir
    5. salir
    `);
    switch (opcion) {
        case "1":
            datos();
            suma(a , b);
            break;
        case "2":
            datos();
            resta(a , b);
            break;
        case "3":
            datos();
            multiplicar(a , b);
            break;
        case "4":
            datos();
            dividir(a , b);
            break;
        default:
            break;
    }
}

