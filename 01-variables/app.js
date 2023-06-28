// Variables = Espacios donde guardar información

// declaración

var nombreVar;
let nombreLet;

// inicialización

nombreVar = "valor1";
nombreLet = "valor2";

// declaración + inicialización

var nombreVar2 = "valor1"; // VAR --> más en scope GLOBAL
let nombreLet2 = "valor2"; // LET --> más en scope LOCAL
const nombreConst = "valor3"

// No es obligatorio declarar los TIPOS
// Podemos cambiar el tipo de datos, JavaScript es de TIPADO DEBIL
// El TIPADO FUERTE es el ámbito de TYPESCRIPT


// -------------------------------------- //

function showMessage() {
    let message1 = "Variable LET dentro de la función";
    // var message2 = "Variable VAR dentro de la función";
    console.log(message1);
};

showMessage();

// esto rompe el código, porque no tengo acceso a la variable desde fuera de la función
// console.log(message1)
