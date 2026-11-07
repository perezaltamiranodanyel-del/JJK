alert("Bienvenido al simulador de invocaciones de Jujutsu Kaisen.");
function mostrarResultado(personaje) {
    console.log("El personaje obtenido es: " + personaje);
    alert("¡Felicidades! Obtuviste a: " + personaje);
}
let intentos = 0;
let maxIntentos = 5;
while (intentos < maxIntentos) {
    let opcion = prompt(
        "Intento " + (intentos + 1) + " de " + maxIntentos + "\n\n" +
        "Elige una opcion de invocacion:\n" +
        "1. Invocacion Estándar (Yuji)\n" +
        "2. Invocacion Especial (Gojo)\n" +
        "3. Invocacion de Primer Año (Nobara)\n" +
        "4. Invocacion de Sombras (Megumi)"
    );

    if (opcion === "1") {
        let personaje = "Yuji Itadori (Estudiante)";
        mostrarResultado(personaje);
        intentos++; // Suma un intento válido
    } 
    else if (opcion === "2") {
        let personaje = "Satoru Gojo (Hechicero Especial)";
        mostrarResultado(personaje);
        intentos++;
    } 
    else if (opcion === "3") {
        let personaje = "Nobara Kugisaki (Maldicion de Sangre)";
        mostrarResultado(personaje);
        intentos++;
    } 
    else if (opcion === "4") {
        let personaje = "Megumi Fushiguro (Maldicion de sombras)";
        mostrarResultado(personaje);
        intentos++;
    } 
    else {
        console.log("El usuario ingreso una opcion no valida.");
        alert("Opcion no valida. Intenta de nuevo (este intento no cuenta).");
    }
}

alert("Has llegado al límite diario de intentos. ¡Vuelve mañana!");
console.log("El usuario alcanzó el límite de intentos.");