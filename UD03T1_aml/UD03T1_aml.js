// Realiza la siguiente aplicación web:
// Se solicita mediante dos prompt que se introduzcan dos números.
// Y después en otro prompt, que se introduzca una de las posibles operaciones:
// 1.- Suma
// 2.- Resta
// 3.- División
// 4.- Multiplicación.
// Se mostrará el resultado de la operación en la propia página web. (leer indicaciones al final del documento).
// CONSIDERACIONES:

//         Solo se deben permitir introducir valores numéricos. Si no se introduce un número, el programa debe dar un mensaje de error y terminar su ejecución.
//         Cada operación matemática se realizará mediante una llamada a una función propia que creéis.
//         En el caso de la división, no se permitirá que el segundo número sea 0.
//         Si se pulsa cancelar, en cualquiera de las ventanas, el programa debe mostrar un mensaje de despedida y terminar su ejecución.

// Para escribir desde JavaScript en el HTML (de una forma rápida, pero no muy correcta.: ya aprenderemos otra), podemos utilizar el método del document: document.write(), que nos lleva al html, la cadena que le pasemos como argumento. 
// Ejemplo:
// let cadena="<p>Hola Mundo</p>"
// document.write(cadena);
// Crearía una etiqueta <p> en el html con el texto Hola Mundo.

// Inputs

let num1 = parseInt(prompt("Introduce el primer número: "));

if (isNaN(num1)) {
    alert("Finalizando el programa (El número introducido no es numérico)");
} else {
    let num2 = parseInt(prompt("Introduce el segundo número: "));

    if (isNaN(num2)) {
        alert("Finalizando el programa (El número introducido no es numérico)");
    } else {
        let opt = parseInt(prompt("Elige una operación: " + "\n1.- Suma" + "\n2.- Resta" + "\n3.- División" + "\n4.- Multiplicación"));

        if (opt != 1 && opt != 2 && opt != 3 && opt != 4) {
            alert("Finalizando el programa");
        } else {
            // Defino funciones
            let sum = (a, b) => (a + b);
            let sub = (a, b) => (a - b);
            let div = (a, b) => (a / b);
            let times = (a, b) => (a * b);

            let ans = "";

            switch (opt) {
                case 1:
                    ans = sum(num1, num2)
                    break;
                case 2:
                    ans = sub(num1, num2)
                    break;
                case 3:
                    if (num2 == 0) {
                        alert("No se puede dividir entre 0");
                    } else {
                        ans = div(num1, num2)
                    }
                    break;
                case 4:
                    ans = times(num1, num2)
                    break;
            }

            document.write("<h1>El resultado es:" + ans + "</h1>")

        }
    }
}

// UD03T1_aml

















