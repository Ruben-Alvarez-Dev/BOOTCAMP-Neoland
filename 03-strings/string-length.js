/*
METODO LENGTH: Devuelve el TAMAÑO de una cadena
*/

const sentence = "I am Batman";
console.log(`La frase ${sentence} tiene ${sentence.length} caracteres`);

// Explicación de diferencia entre método y función.

const objetoPersona = {
    nombre: "Ruben",
    altura: 175,
    sexo: "varon",
    conduce: true,
    familia: ["uno", "dos", "tres", "cuatro"],
    recuento: () => {
        console.log(objetoPersona.familia);
    }
};

objetoPersona.recuento();