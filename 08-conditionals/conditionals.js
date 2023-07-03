// CONDICIONALES
// Cuidado, asignación = no es lo mismo que igualdad ==

// IF - ELSE

// La<s llaves se pueden omitir, poniendo todo en una sola linea
// Esto es como imitación a PYTHON

const name = "Bruce";

if (name == "Bruce") {
  console.log("Es Batman");
} else if (name != "Bruce") {
  console.log("No es Bruce");
} else {
  console.log("Ha habido algún error");
}

// TERNARIOS

// Se usan mucho
//

const age = 18;

age >= 18
  ? console.log("Ternario: ERES MAYOR")
  : console.log("Ternario: ERES MENOR");
const puedoEntrar =
  age >= 18
    ? console.log("CONST: ERES MAYOR")
    : console.log("CONST: ERES MENOR");

// SWITCH

// Para más opciones, según el caso X, Y, Z...
// Más optimizado a varios resultados
// El BREAK rompe el bloque de código, hace como cierre de llaves

const superHero = "Spidffer-Man";

switch (superHero) {
  case "Spider-Man":
    console.log("Spider-Man");
    break;
  case "Iron-Man":
    console.log("Iron-Man");
    break;
  case "Super-Man":
    console.log("Super-Man");
    break;
  default:
    console.log("Ninguno");
    break;
}
