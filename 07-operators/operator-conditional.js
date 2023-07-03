// Operador CONDICIONAL
// Son los llamados TERNARIOS o TERNARIAS
// Hasta 3 anidaciones en TERNARIO --> OK
// Para más de 3 --> IF-ELSE

let age = 15;
let status = (age >= 18) ? adult() : minor();
console.log(status);

function adult() {
    return "Puedes pasar a mi bar";
}

function minor() {
    return "Vete a jugar al parque";
}



if (age >= 18) {
    return "adult"
} else {
    return "minor"
}

// Luego veremos OPERADOR COMA, UNARIOS y RELACIONALES
// Los veremos en los OBJETOS