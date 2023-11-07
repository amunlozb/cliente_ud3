// Bingo

// El bingo es un juego que consiste en comprobar números que van saliendo aleatorios de un cartón (que podemos representar como un array bidimensional).
// Cuando todos los números de una fila han salido, se puede cantar línea. Cuando todos los números de un cartón han salido, se puede cantar bingo. Los cartones de bingo 
// disponen de 15 números, repartidos en 3 líneas de 5 números cada una.

// Realiza las siguientes funciones:

//     Función comenzar, que rellena el cartón con el que se juega, inicia la partida, y se llama por primera vez a la función sacaNumeroNuevo.
//     Función rellenarCarton, que rellena un array bidimensional con números aleatorios del 1 al 99 (ambos inclusive), que será con el se juega.
//     Función compruebaLinea, que recibe un cartón de bingo (representado por un array bidimensional) y un array unidimensional desordenado, con los números que han 
//     ido saliendo. Devuelve el número de línea si se canta línea, -1 en caso contrario.
//     Función compruebaBingo, que recibe un cartón de bingo (representado por un array bidimensional) y un array unidimensional desordenado, con los números que han
//      ido saliendo. Devuelve true si se canta bingo, false en caso contrario.
//     Función sacaNumeroNuevo, que recibe un array unidimensional con los números que han ido saliendo. Esta función irá “sacando” nuevos números mientras 
//     haya disponibles (sacaremos un máximo de 99 números). Sacará números aleatorios que no esté presente en el array unidimensional recibido (los números que han salido ya), 
//     y una vez sacado el nuevo número, llamará a las funciones compruebaLinea y compruebaBingo.

// Genera un HTML que contenga dos botones, uno para comenzar la partida, y otro para ir sacando números nuevos. Adicionalmente, tendrá cuatro elementos (pueden ser <p> o <div>, 
//     como prefieras) donde se insertarán mensajes para indiciar lo siguiente:

//     Inicio y fin de la partida
//     El cartón con el que se juega (separado por cada una de las líneas que lo componen)
//     Los números que van saliendo
//     El resultado de la línea que se ha cantado por última vez, o bien, si se ha cantado bingo, o bien, nada si no ha obtenido ningún resultado aún.

let almacenNumeros = [];
let carton = [];
let completado;


function comenzar() {

    // Genera el almacén de numeros
    generarAlmacenNumeros();
    // Rellena el cartón con el que se jugará
    rellenarCarton();

}

function generarAlmacenNumeros() {
    for (let i = 0; i < 100; i++){
        almacenNumeros.push(i);
    }
    // console.log(carton);
}

// Los cartones de bingo disponen de 15 números, repartidos en 3 líneas de 5 números cada una.
function rellenarCarton() {

    // Genero un array con 15 números aleatorios
    let arrayNumeros = [];
    for (let i=0; i<15; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 100);
        // (compruebo que no se repitan)
        if (arrayNumeros.includes(numeroAleatorio)) {
            do {
                numeroAleatorio = Math.floor(Math.random() * 100);
            } while (arrayNumeros.includes(numeroAleatorio));
        }
        arrayNumeros[i] = numeroAleatorio;
    }

    // carton = [
    //     [a1, a2, a3, a4, a5],
    //     [b1, b2, b3, b4, b5],
    //     [c1, c2, c3, c5, c5]
    // ]
    let contadorNumeros = 0;
    // recorre filas
    for (let fila = 0; fila < 3; fila++) {
        
        linea = [null, null, null, null, null]

        // recorre valores
        for (let valor = 0; valor < 5; valor++) {
            linea[valor] = arrayNumeros[contadorNumeros];
            contadorNumeros++;
        }
        carton[fila] = linea;
    }

    // Escribe html (tengo que incluir otra vez los botones o se me borran)

    document.write('<input type="button" value="Comenzar Bingo" onClick="comenzar()">');
    document.write('<input type="button" value="Sacar un número nuevo" onClick="sacaNumeroNuevo()">')
    document.write('<h2>Partida Iniciada!</h2>')
    for (let fila = 0; fila < 3; fila++) {
        document.write("<p>Línea " + (fila + 1) + ": ");
        for (let valor = 0; valor < 5; valor++) {
            document.write(carton[fila][valor] + " ");
        }
        document.write("</p>");
    }
    document.write('<h2>Numeros Sacados:</h2>')

    // console.log(carton);

}

// PROBLEMA: al splice le estoy pasando el elemento en vez del indice
let lineasRestantes = [0, 1, 2];
//     Función compruebaLinea, que recibe un cartón de bingo (representado por un array bidimensional) y un array unidimensional desordenado, con los números que han 
//     ido saliendo. Devuelve el número de línea si se canta línea, -1 en caso contrario.
function compruebaLinea(carton, numeros, lineasRestantes2) {

    // Itero sobre cada línea del cartón 
    for (let linea of lineasRestantes2) {
        // Si cada uno de los números de la linea está incluido en la lista de números que ya han salido, devuelve la variable "linea"
        if (carton[linea].every(numero => numeros.includes(numero))) {
            lineasRestantes.splice(lineasRestantes.indexOf(linea), 1);
            console.log(lineasRestantes.toString());
            return (linea + 1); 
        }
    }
    // Si no, devuelve -1
    return -1;
}

//     Función compruebaBingo, que recibe un cartón de bingo (representado por un array bidimensional) y un array unidimensional desordenado, con los números que han
//     ido saliendo. Devuelve true si se canta bingo, false en caso contrario.
function compruebaBingo(carton, numerosBingo) {
    let numerosCarton = [];
    // Primero, itero sobre todo el cartón para meter todos sus números en un mismo array (sin tener en cuenta lineas)
    for (let linea = 0; linea < carton.length; linea++) {
        for (let num = 0; num < carton[linea].length; num++) {
            numerosCarton.push(carton[linea][num]);
        }
    }
    
    // Ahora, compruebo que todos los números que he sacado del cartón están incluidos en el array de números sacados en el bingo:

    // Si los incluye, devuelve true
    if (numerosCarton.every(num => numerosBingo.includes(num))) {
        return true;
    // Si no, devuelve false
    } else {
        return false;
    }
}

// ------------------------------------------------------------------------------------------------
// VALIDACION METODO compruebaBingo: 

// const carton = [
//     [5, 12, 3, 17, 21],
//     [8, 7, 19, 1, 15],
//     [23, 2, 9, 11, 6]
// ];

// const numerosSorteados = [5, 12, 3, 17, 21, 8, 7, 19, 1, 15, 23, 2, 9, 11, 6];

// console.log(compruebaBingo(carton, numerosSorteados))
// funciona! :) (menos mal)
// ------------------------------------------------------------------------------------------------

//     Función sacaNumeroNuevo, que recibe un array unidimensional con los números que han ido saliendo. Esta función irá “sacando” nuevos números mientras 
//     haya disponibles (sacaremos un máximo de 99 números). Sacará números aleatorios que no esté presente en el array unidimensional recibido (los números que han salido ya), 
//     y una vez sacado el nuevo número, llamará a las funciones compruebaLinea y compruebaBingo.
let numerosSorteados = [];
function sacaNumeroNuevo() {
    // Si el bingo esta completado, no sigo sacando numeros
    if (completado) {
        return;
    }

    // Anotacion: todos mis numeros restantes del almacén están en la variable almacenNumeros

    // Saco un número aleatorio (entre los restantes)
    let random = Math.floor(Math.random() * almacenNumeros.length)
    let num = almacenNumeros[random]

    // Borro el elemento de mi almacen
    almacenNumeros.splice(random, 1);
    // Y lo agrego a la lista "numerosSorteados"
    numerosSorteados.push(num);

    document.write(num + ", ");

    // Escribir bingo
    if (compruebaBingo(carton, numerosSorteados)) {
        document.write("<h1>Bingo!</h1>")
        completado = true;
    } 
    

    let textoLinea = compruebaLinea(carton, numerosSorteados, lineasRestantes);
    if (textoLinea != -1 && !completado) {
        document.write("<h2>Linea " + textoLinea + " Completada!</h2>")
    }

}

generarAlmacenNumeros();


// UD03T5a_aml - Angel Muñoz Lozano