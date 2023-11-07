// Crea un objeto “Runner” con los siguientes atributos:

// Nombre -> String

// Apellidos -> String

// Evento -> String

// Fecha -> Date

// Dorsal -> Number

// Hora de Inicio -> Date

// Hora de finalización ->Date

// Además debe tener los siguientes métodos:

// Calcular marca: Devolver en formato tiempo (hh:mm:ss) la Hora de Finalización - Hora de Inicio. 
// Teniendo en cuenta que Hora de Finalización y/o Hora de Inicio pueden ser nulos. En caso de que ocurra esto último debe devolver 00:00:00.

let nombre = "";
let apellidos = "";
let evento = "";
let fecha = null;
let dorsal = 0;
let horaInicio = null;
let horaFinalizacion = null;

// Calculo marca
function calcularMarca() {
    if (horaInicio && horaFinalizacion) {
        const tiempoInicio = convertirASegundos(horaInicio);
        const tiempoFin = convertirASegundos(horaFinalizacion);
        const tiempoTranscurrido = tiempoFin - tiempoInicio;
        return convertirAFormatoTiempo(tiempoTranscurrido);
        // Si no, devuelvo 00:00:00
    } else {
        return "00:00:00";
    }
}

// Convierto todo a segundos para poder restarlo (lo uso para la marca)
function convertirASegundos(hora) {
    const [horas, minutos, segundos] = hora.split(":");
    return parseInt(horas) * 3600 + parseInt(minutos) * 60 + parseInt(segundos);
}

// Convierto una cantidad de segundos al formato HH:MM:SS
function convertirAFormatoTiempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    segundos %= 3600;
    const minutos = Math.floor(segundos / 60);
    segundos %= 60;
    return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

// COMPROBACION -----------------------------------------------------------
nombre = "Angel";
apellidos = "Munoz";
evento = "Evento";
horaInicio = "08:00:00";
horaFinalizacion = "10:30:00";

console.log("Nombre: " + nombre);
console.log("Apellidos: " + apellidos);
console.log("Evento: " + evento);
console.log("Hora de Inicio: " + horaInicio);
console.log("Hora de Finalización: " + horaFinalizacion);
console.log("Marca: " + calcularMarca());






// UD03T5c_aml - Angel Muñoz Lozano