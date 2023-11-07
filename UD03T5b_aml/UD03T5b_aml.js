// Haz un programa que reciba cadenas del tipo:

//         0         1        2     3       4
//     “nombre:apellidos:telefono:email:codigopostal”

// y que te muestre:

//     El código postal.
//     Los apellidos
//     El email.
//     Suponiendo un formato de email “direccion@servidor”, que te muestre el servidor asociado. 
//  La cadena se recibe mediante un prompt y el resultado se muestra en el html (utilizando document.write)

let input = String(prompt("Escribe una cadena (del tipo nombre:apellidos:telefono:email:codigopostal): "));

input = input.split(":");
console.log(input)

document.write("<p>Nombre: " +input[0] + "</p>");
document.write("<p>Apellidos: " +input[1] +  "</p>");
document.write("<p>Telefono: "+input[2] +  "</p>");
document.write("<p>Email: "+input[3] + "</p>");
document.write("<p>Servidor asociado al Email: "+ input[3].split("@")[1] + "</p>");
document.write("<p>Código Postal: " +input[4] + " </p>");

// UD03T5b_aml - Angel Muñoz Lozano