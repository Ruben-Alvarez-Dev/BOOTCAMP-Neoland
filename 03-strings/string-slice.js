/*
METODO SLICE: Repite la cadena X veces
*/

const sentence = "Yo soy tu padre";
console.log(sentence.slice(7, 9));

// Ahora concatenamos dos métodos
// En en primero encontramos lo que remplazr -->  SLICE
// En el segundo, hago el cambio --> REPLACE

console.log(sentence.replace(sentence.slice(7,9), "su"))