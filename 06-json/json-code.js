/*
METODOS DE JSON:
    JSON.stringify() - Convierte un JSON a CADENA
    JSON.parse() - Convierte un objeto a JSON
*/

const object = {name: "john", age: 40}
console.log(object);
console.log("\n stringify -> convierto a CADENA");
console.log(JSON.stringify(object));



const json = '{"name":"John", "surname":"Wick", "age":40}';
console.log(json);
console.log("\n parse -> convierto a JSON");
console.log(JSON.parse(json));