// Para simular la base de datos, primero crearé 5 socios inventados y a continuación los almacenaré dentro de un array llamado "arraySocios"

// Creo 5 socios
let socio1 = new Socio(1, '123456789A', 'Juan', 'Perez', '1990-05-15', 'Madrid');
let socio2 = new Socio(2, '987654321B', 'Maria', 'Gonzalez', '2012-11-30', 'Barcelona');
let socio3 = new Socio(3, '456789123C', 'Carlos', 'Lopez', '2003-07-20', 'Sevilla');
let socio4 = new Socio(4, '789123456D', 'Ana', 'Martinez', '1988-03-10', 'Valencia');
let socio5 = new Socio(5, '234567891E', 'Pedro', 'Ramirez', '2007-01-05', 'Bilbao');

// Creo el array y lo relleno
let arraySocios = [socio1, socio2, socio3, socio4, socio5];

function Socio(numero_socio, dni, nombre, apellidos, fecha_nacimiento, localidad) {
    // Establezco atributos para el constructor
    this.numero_socio = numero_socio;
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fecha_nacimiento = fecha_nacimiento;
    this.localidad = localidad;

    // --------------------  Metodos propios  -------------------

    // Para dar de alta un nuevo socio
    this.darAlta = function () {
        // Pido datos de entrada
        let numero_socio = prompt("Introduce el número de socio: ");
        let dni = prompt("Introduce el DNI: ");
        let nombre = prompt("Introduce el nombre: ");
        let apellidos = prompt("Introduce los apellidos: ");
        let fecha_nacimiento = prompt("Introduce la fecha de nacimiento: ");
        let localidad = prompt("Introduce la localidad: ");

        // Creo un objeto de tipo Socio
        let nuevoSocio = Socio(numero_socio, dni, nombre, apellidos, fecha_nacimiento, localidad);
        // Lo agrego a mi "base de datos"
        arraySocios.push(nuevoSocio);
    }

    // Para dar de baja un socio
    this.darBaja = function() {
        // Pido al usuario un valor (puede ser un número de socio o un DNI)
        let input = prompt("Introduce el número de socio o el DNI: ");

        // Recorro el array buscando por el input,
        for (let i = 0; i < arraySocios.length; i++) {
            // Cuando lo encuentro, se borra de la "base de datos"
            if (arraySocios[i].numero_socio == input || arraySocios[i].dni == input) {
                arraySocios.splice(i, 1);
            }
        }
    }

    // Para modificar la localidad del socio
    this.modificarLocalidad = function() {
        // Pido datos de entrada
        let input = prompt("Introduce el número de socio o el DNI: ");
        let nuevaLocalidad = prompt("Introduce la nueva localidad a establecer: ");
        // Recorro el array buscando por el input,
        for (let i = 0; i < arraySocios.length; i++) {
            // Cuando lo encuentro, se actualiza la localidad del mismo
            if (arraySocios[i].numero_socio == input || arraySocios[i].dni == input) {
                arraySocios[i].localidad = nuevaLocalidad;
            }
        }
    }

    // Para encontrar la categoría a la que pertenezco
    this.encontrarCategoria = function() {
        let categoria = "";
            
        // Pido la fecha de nacimiento en el formato "YYYY-MM-DD"
        let fechaNacimiento = prompt("Introduce la fecha de nacimiento del socio (YYYY-MM-DD):");
            
        // Convierto la fecha de nacimiento a un objeto Date
        let fechaNacimientoDate = new Date(fechaNacimiento);
            
        // Obtengo el año actual
        let yrActual = new Date().getFullYear();
            
        // Calculo la edad
        let edad = yrActual - fechaNacimientoDate.getFullYear();
            
        // Determino la categoría dependiendo de la edad
        if (edad >= 19) {
            categoria = "Senior";
        } else if (edad >= 16 && edad <= 18) {
            categoria = "Juvenil";
        } else if (edad >= 14 && edad <= 15) {
            categoria = "Cadete";
        } else if (edad >= 12 && edad <= 13) {
            categoria = "Infantil";
        } else if (edad >= 10 && edad <= 11) {
            categoria = "Alevín";
        } else if (edad >= 8 && edad <= 9) {
            categoria = "Benjamín";
        }
        
        alert("Pertenezco a la categoría: " + categoria);
    }

    this.calcularCategoria = function() {
        let categoria = "";
            
        // Pido la fecha de nacimiento en el formato "YYYY-MM-DD"
        let fechaNacimiento = this.fecha_nacimiento;
            
        // Convierto la fecha de nacimiento a un objeto Date
        let fechaNacimientoDate = new Date(fechaNacimiento);
            
        // Obtengo el año actual
        let yrActual = new Date().getFullYear();
            
        // Calculo la edad
        let edad = yrActual - fechaNacimientoDate.getFullYear();


        // Determino la categoría dependiendo de la edad
        if (edad >= 19) {
            categoria = "Senior";
        } else if (edad >= 16 && edad <= 18) {
            categoria = "Juvenil";
        } else if (edad >= 14 && edad <= 15) {
            categoria = "Cadete";
        } else if (edad >= 12 && edad <= 13) {
            categoria = "Infantil";
        } else if (edad >= 10 && edad <= 11) {
            categoria = "Alevín";
        } else if (edad >= 8 && edad <= 9) {
            categoria = "Benjamín";
        }

        return categoria;
    }
}

function mostrarTabla(lista) {
    // Hago la cabecera de la tabla
    document.write("<table>");
    document.write("<thead>");
    document.write("<tr>");
    document.write("<th>Número de Socio</th>");
    document.write("<th>DNI</th>");
    document.write("<th>Nombre</th>");
    document.write("<th>Apellidos</th>");
    document.write("<th>Fecha Nacimiento</th>");
    document.write("<th>Localidad</th>");
    document.write("<th>Categoría</th>");
    document.write("</tr>");
    document.write("</thead>");

    // Relleno datos con un bucle
    document.write("<tbody>");

    for (let socio of lista) {
        document.write("<tr>");
        document.write("<td>" + socio.numero_socio + "</td>");
        document.write("<td>" + socio.dni + "</td>");
        document.write("<td>" + socio.nombre + "</td>");
        document.write("<td>" + socio.apellidos + "</td>");
        document.write("<td>" + socio.fecha_nacimiento + "</td>");
        document.write("<td>" + socio.localidad + "</td>");
        document.write("<td>" + socio.calcularCategoria() + "</td>");
        document.write("</tr>");
    }

    // Cierro la tabla
    document.write("</tbody>");
    document.write("</table>");

}

// Buscar a un socio a partir de su DNI/Nombre y mostrar sus datos

function buscarSocio(input) {

    for (socio of arraySocios) {
        if (socio.dni == input || socio.nombre == input) {
            mostrarTabla(socio);
        }
    }

}

// Buscar socios a partir del nombre de una categoría
function buscarPorCategoria(input) {
    let nuevaLista = [];
    // Recorro la lista de todos los socios
    for (socio of arraySocios) {
        // Si el socio pertenece a esa categoria, lo añado a una lista
        if (socio.calcularCategoria() == input) {
            nuevaLista.push(socio);
        }
    }
    // Muestro los datos de la lista completa
    mostrarTabla(nuevaLista);
}

// Buscar socios de una localidad (es casi igual que la funcion anterior)
function buscarPorLocalidad(input) {
    let nuevaLista = [];
    // Recorro la lista de todos los socios
    for (socio of arraySocios) {
        // Si el socio pertenece a esa localidad, lo añado a una lista
        if (socio.localidad() == input) {
            nuevaLista.push(socio);
        }
    }
    // Muestro los datos de la lista completa
    mostrarTabla(nuevaLista);
}

// Mostrar menu (lo he hecho con opciones almacenadas en números)
function mostrarMenu() {
        const opcion = prompt(
            "Elija una opción:\n" +
            "1. Dar de alta un nuevo socio\n" +
            "2. Dar de baja un socio\n" +
            "3. Modificar la localidad de un socio\n" +
            "4. Encontrar la categoría de un socio\n" +
            "5. Buscar socios por DNI/Nombre\n" +
            "6. Buscar socios por categoría\n" +
            "7. Buscar socios por localidad\n" +
            "8. Mostrar la lista de socios\n" +
            "9. Salir"
        );

        switch (opcion) {
            case "1":
                // Dar de alta un nuevo socio
                const nuevoSocio = new Socio();
                nuevoSocio.darAlta();
                break;
            case "2":
                // Dar de baja un socio
                const inputBaja = prompt("Introduzca el número de socio o el DNI:");
                Socio.darBaja(inputBaja);
                break;
            case "3":
                // Modificar la localidad de un socio
                const inputSocio = prompt("Introduzca el número de socio o el DNI:");
                const nuevaLocalidad = prompt("Introduzca la nueva localidad:");
                Socio.modificarLocalidad(inputSocio, nuevaLocalidad);
                break;
            case "4":
                // Encontrar la categoría de un socio
                Socio.encontrarCategoria();
                break;
            case "5":
                // Buscar socios por DNI/Nombre
                const inputBusqueda = prompt("Introduzca el DNI o el Nombre:");
                buscarSocio(inputBusqueda);
                break;
            case "6":
                // Buscar socios por categoría
                const categoria = prompt("Introduzca la categoría:");
                buscarPorCategoria(categoria);
                break;
            case "7":
                // Buscar socios por localidad
                const localidad = prompt("Introduzca la localidad:");
                buscarPorLocalidad(localidad);
                break;
            case "8":
                // Mostrar la lista de socios
                mostrarTabla(arraySocios);
                break;
            case "9":
                // Salir
                return;
            default:
                alert("Opción no válida. Por favor, elija una opción válida.");
                break;
        }
    
}

mostrarMenu();



