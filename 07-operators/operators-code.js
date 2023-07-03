// Operador de asignación
let myNumber = 5;

// Operación de adición
myNumber += 1;

// Operador de sustracción
myNumber -= 1;

// Operador de división
myNumber /= 2;

// Operador de módulo
myNumber &= 2;

// Operador de IGUALDAD ==, --> mismo VALOR
// Operador de IGUALDAD ESTRICTA ===, --> mismo TIPO Y VALOR
// Operador de DIFERENCIA !=, --> negación

function operadorIgualdad (a, b) {
    if (a == b) {
        console.log("Son iguales")
    } else if (a === b) {
       console.log("Son de tipo diferente");
    }
}
operadorIgualdad (1, "1")

// MAYOR Y MENOR

if (5 > 3) console.log("Mayor");
if (3 <= 5) console.log("Menor o igual");