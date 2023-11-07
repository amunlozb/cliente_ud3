// Ejercicio 1:
// Realiza una función que dado un array y un valor, devuelva si el valor está o no está en el array. Debes realizarlo sin recorrer el array. 
//  Ejercicio 2 Realiza una función que dado un array, desordene sus elementos de forma aleatoria. Debe devolver el array desordenado.
//  Ejemplo: miarray=[1,2,3,4,5,6,7,8]; miarraydesor=[5,2,8,6,1,4,7,3];
// -------
// Intercambiar dos valores de un array se hace de la siguiente forma:
// [miarray[0], miarray[1]]=[miarray[1], miarray[0]] // Intercambia las posiciones 0 y 1 del array.
// ---------
// Pista: Utiliza la generación de números aleatorios que vimos en ejercicios anteriores.


// EJERCICIO 1 -------------------

function arrayContiene(array, input) {

    if (array.includes(input)) {
        return true;
    } else {
        return false
    }


}

// EJERCICIO 2 ------------------- 
let random

// me he inventado un algoritmo pochillo pero mas o menos funciona
// recorro el array de elemento en elemento, y genero un número aleatorio por el que intercambiar cada elemento

function desordenarArray(array) {

    random = Math.floor(Math.random() * array.length);

    for (let i = 0; i < array.length - 1; i++) {
        [array[i], array[random]] = [array[random], array[i]];
    }

    return array;

}

let arraytest = [1, 2, 3, 4, 5, 6];

console.log(arrayContiene(arraytest, 3));
console.log(desordenarArray(arraytest));

// UD03T3 - Angel Muñoz Lozano