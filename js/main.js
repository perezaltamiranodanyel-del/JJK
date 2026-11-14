const maxIntentos = 3;
let intentos = 0;
let resumenInvocaciones = "";
const calcularIntentosRestantes = (actuales, maximos) => maximos - actuales;

function tirarGacha() {
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    switch(numeroAleatorio) {
        case 1:
            return "Yuji Itadori (Estudiente - Común)";
        case 2:
            return "Satoru Gojo (Hechicero Especial - legendario)";
        case 3:
            return "Nobara Kugisaki (Maldicion de Sangre - Raro)";
        case 4:
            return "Megumi Fushiguro (Maldicion de sombras - Raro)";
         case 5:
            return "Megumi Fushiguro (Estudiente - Común)";
        case 6:
            return "Maki Zenin (Hechicera Especial - legendario)";
        case 7:
            return "Toge Inumaki (Maldicion de palabras - Raro)";
        case 8:
            return "Panda (Maldicion de osos - Raro)";
        case 9:
            return "Sukuna (Rey de las Maldiciones - legendario)";
        case 10:
            return "Kento Nanami (Hechicero Especial - legendario)";
        default:
            return null;
    }
}
function mostrarResultado(personaje, intentosActuales) {
    console.log("---------------------------------------");
    console.log("¡Invocación exitosa!");
    console.log("El personaje obtenido es: " + personaje);
    console.log("Intentos realizados "+ intentosActuales + " de " + maxIntentos);
     console.log("---------------------------------------");
}

console.log("BINVENIDO AL SISTEMA GACHA DE INVOCACIONES ===")
while (intentos < maxIntentos) {
    let restantes = calcularIntentosRestantes(intentos, maxIntentos);

    let opcion = prompt(
        "Intento " + (intentos + 1) + " de " + maxIntentos + " (Te quedan " + restantes + " intentos)\n\n" + 
        "Presiona 'Aceptar' para tirar el Gacha aleatorio (o 'Cancelar' para salir)."
    );
 
    if (opcion === null) {
        console.log("El usuario decidió salir del simulador.");
        break;
    }

    let personajeObtenido = tirarGacha();
   intentos++;
    mostrarResultado(personajeObtenido, intentos);
    resumenInvocaciones = resumenInvocaciones + "\nIntento " + intentos + ": " + personajeObtenido;
}


console.log("=======================================");
console.log("RESUMEN FINAL DE TUS INVOCACIONES GACHA:");
console.log(resumenInvocaciones);
console.log("=======================================");
console.log("Has llegado al limite de intentos. Vuelve manana.");