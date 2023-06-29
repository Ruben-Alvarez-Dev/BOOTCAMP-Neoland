/*
METODO INCLUDES: Devuelve TRUE / FALSE si encuentra fragmento DENTRO de CADENA
*/
const sentence = "I am Batman";
console.log(sentence.includes("am"));

const sentence2 = "En un lugar de La Mancha, de cuyo nombre no quiero acordarme";
const fragment2 = "La Mancha";

console.log(`El fragmento ${fragment2} se incluye DENTRO de la frase ${sentence2}: ${sentence2.includes(fragment2)}`);