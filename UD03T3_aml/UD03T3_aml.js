// Crea una aplicación web que tenga botones para permitir modificar las siguientes propiedades de una  ventana:
// - Abrir una ventana nueva: - Debes preguntar al usuario si está de acuerdo o no, y solo si acepta se abrirá la nueva ventana.
// - La nueva ventana tendrá las siguientes propiedades: no tendrá barra de herramientas, ni location, ni barra de  menú, ni será redimensionable. 
// Tendrá 200x80 píxeles y se posicionará en 500x500 píxeles.
// - La nueva ventana incluirá un pequeño texto y un botón que al hacer clic cerrará la ventana.
// - Cerrar la ventana creada: si la ventana está cerrada mostrará un mensaje de error.
// - Mover la ventana 10 píxeles a la derecha y abajo.
// - Mover la ventana a la posición 100,100.
// - Aumentar el tamaño de la ventana 10 píxeles de ancho y largo. 
//  Todos los botones, excepto el primero y el segundo, los puedes programar directamente mediante la  propiedad `onClick`, por ejemplo: 
// <input type=“button” value=“Imprimir” onClick=“print()”/>

var ventanaNueva;

function abrirVentana() {
    var confirmacion = confirm("¿Seguro que quieres abrir una ventana nueva?");
    if (confirmacion) {
        // no barra herramientas, location, barra menu, resizable. 200x80, pos = 500x500
        ventanaNueva = window.open('', '', 'width=200,height=80,left=500,top=500,toolbar=no,location=no,menubar=no,resizable=no');
        ventanaNueva.document.write("<p>Este es el texto de mi nueva ventana</p>");
        ventanaNueva.document.write("<input type='button' value='Cerrar Ventana' onClick='cerrarVentana()'>");
    }
}


function cerrarVentana() {
    if (ventanaNueva && !ventanaNueva.closed) {
        ventanaNueva.close();
    } else {
        // Muestra mensaje de error si ya está cerrada
        alert("La ventana está cerrada o nunca se abrió.");
    }
}

function moverVentana() {
        ventanaNueva.moveBy(10, 10);
}

function moverVentanaPosicion() {
        ventanaNueva.moveTo(100, 100);
}

function AumentarEnDiez() {
        ventanaNueva.resizeBy(10, 10);
}

// UD03T3 - Angel Muñoz Lozano