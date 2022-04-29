/*JavaScript Básico - Ejercicio asincrónico 03*/
function contarDeA_n() {
    var contar_de_a = parseInt(prompt("De cuanto en cuanto deseas sumar (Ingresa un número)"));
    console.log("El número ingresado por el usuario es: " + contar_de_a);

    var contar_hasta = parseInt(prompt("Hasta que número quieres contar (Ingresa un Número)"));
    console.log("EL usuario desea contar hasta: " + contar_hasta);

    var contador = contar_de_a;

    if (contar_de_a >= contar_hasta || contar_de_a == 0) {

        console.log("No se pudo realizar la suma");
        alert("No se puede contar hasta el número seleccionado.\nEsto puede ser por:\n1.- Ambos números son iguales\n2.- El número hasta el que quieres contar es menor a contar de a");

    } else {

        console.log("Empecemos a contar!")

        while (contador < contar_hasta) {
            console.log(contador + " + " + contar_de_a);
            contador = contador + contar_de_a;
            console.log("= " + contador);
        }
        console.log("Suma realizada con exito");
        if (contador == contar_hasta) {
            alert("Sumando de " + contar_de_a + " en " + contar_de_a + " podemos llegar hasta el limite establecido por el usuario (" + contar_hasta + ")");
        } else {
            alert("Sumando de " + contar_de_a + " en " + contar_de_a + " obtenemos " + contador + " por lo que no podemos llegar al limite exacto establecido por el usuario (" + contar_hasta + ")");
        }
    }
}

/* JavaScript Básico - Ejercicio asincrónico 04 */
function fizzBuzz2() {
    var fizz = prompt("Ingresa el nombre que reemplazará a Fizz, si no deseas cambiarlo solo oprime aceptar", "Fizz");
    var buzz = prompt("Ingresa el nombre que reemplazará a Buzz, si no deseas cambiarlo solo oprime aceptar", "Buzz");
    var numeroFizz = parseInt(prompt("Ingresa el número del cual se calcularan sus múltiplos"));
    var numeroBuzz = parseInt(prompt("Ingresa el número del cual se calcularan sus múltiplos"));
    var limite = parseInt(prompt("Por último ingresa hasta que números quieres calcular los múltiplos"));
    var respFizz = " ", respBuzz = " ", resp = " ";
    for (var i = 1; i <= limite; i++) {
        if (i % numeroFizz == 0 && i % numeroBuzz == 0) {
            console.log(fizz + buzz + ": " + i);
            resp += i + ", ";
        }
        if (i % numeroFizz == 0) {
            console.log(fizz + ": " + i);
            respFizz += i + ", ";
        }
        if (i % numeroBuzz == 0) {
            console.log(buzz + ": " + i);
            respBuzz += i + ", ";
        }
    }
    document.getElementById("aquiRespuesta").innerHTML = ('<p style="color:blue;">Los múltiplos de: ' + numeroFizz + '(' + fizz + ') son: (' + respFizz + ')</p><p style="color:green;">Los múltiplos de: ' + numeroBuzz + '(' + buzz + ') son: (' + respBuzz + ')</p><p style="color:red;">Múltiplos comunes de ' + numeroFizz + '(' + fizz + ') y ' + numeroBuzz + '(' + buzz + '): (' + resp + ')</p>');
}