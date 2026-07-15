function Ejercicio1() {
    var numero1 = Number(Math.round(Math.random() * 10));
    var numero2 = Number(Math.round(Math.random() * 10));

    console.log("primer numero: " + numero1 + ", segundo numero: " + numero2);

    if(numero1 == numero2)
        console.log("ambos numeros son iguales...");
    else if(numero1 > numero2)
        console.log("el primer numero es mayor que el segundo...");
    else
        console.log("el segundo numero es mayor que el primero...");
}

function Ejercicio2() {
    var numero = 1;

    while(numero != 0) {
        numero = Number(Math.round(Math.random() * 5));
        console.log(numero);
    }
}

function Ejercicio3() {
    var numero = Number(Math.round(Math.random() * 8) + 2);

    console.log("Tabla de multiplicar del numero: ", numero);
    for (let i = 1; i <= 10; i++)
        console.log(numero, "*", i, "=", numero*i);
}

function Ejercicio4() {
    var impares = pares = 0;

    for (let i = 0; i < 10; i++) {
        var input = 0;
        do {
            input = Number(prompt((i + 1) + " : Ingresa un número entre el 1 y el 100"));
        } while(input < 1 || input > 100);

        if(input % 2 == 0) pares++;
        else impares++;
    }

    console.log("impares:", impares, ", pares:", pares);
}

function Ejercicio5() {
    const least = 0.1;
    const most = 0.15;

    var ventas = 0;
    var esInvalido = false;
    do {
        ventas = Number(prompt(((esInvalido)? "El numero ingresado fue invalido\n" : "") +"Ingresa un número entre el $5,000 y el $30,000"));
        esInvalido = (ventas < 5000 || ventas > 30000);
    } while(esInvalido);

    console.log("Ventas del empleado:", ventas);
    if(ventas < 10000) console.log("El empleado recibira una comision del 10%, equivalente a", (ventas * 0.1));
    else console.log("El empleado recibira una comision del 15%, equivalente a", (ventas * 0.15));
}