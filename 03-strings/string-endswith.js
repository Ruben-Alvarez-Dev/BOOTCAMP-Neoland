/*
METODO ENDSWITH: Devuelve TRUE / FALSE si encuentra fragmento en FINAL de CADENA
*/
const sentence = "I am Batman";
console.log(sentence.endsWith("Batman"));

// Uso más aproximado, aunque no usamos el tipo de variable Number, sino String

const tel = "612505748";
const frag = "5748";
console.log(tel.endsWith("5748"));
console.log(tel.endsWith(frag));

console.log(`El fragmento ${frag} es el FINAL del número ${tel}: ${tel.endsWith(frag)}`);