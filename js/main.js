let nombredeusuario = prompt(" Hola ¿cuales es tu nombre?");
let apellidodeusuario = prompt("¿Cual es tu apellido?");
let añodenacimientoStr = prompt("¿Cual es tu año de nacimiento? (Ejemplo: 1982)");
let añodenacimiento = parseInt(añodenacimientoStr);
let añoactual = 2026;

let edadactual = añoactual - añodenacimiento;
let mensajedebienvenida = "Bienvenido/a " + nombredeusuario + " " + apellidodeusuario + " . "
let mensajeedad = "Basado en tu año de nacimiento (" + añodenacimiento + "), este año estas cumpliendo o cumpliste " + edadactual + " años.";
alert(mensajedebienvenida);
alert(mensajeedad);
console.log(mensajedebienvenida);
console.log("Año actual de referencia: " + añoactual);
console.log("Edad calculada del usuario: " + edadactual + " años.");