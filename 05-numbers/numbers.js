/*
METODOS DE NUMEROS:
    .isInteger()
    .parseFloat()
*/


// ISINTEGER: Comprueba si es un valor entero o no

    console.log("\n // isInteger ---------------------------\n");

    function divider(a, b) {
        if (Number.isInteger(a/b)) {
            return "Es entero"
        }
        return "No es entero"
    }
    console.log(divider(20,5));
    console.log(divider(20,6));

// PARSEFLOAT

    console.log("\n // parseFloat ---------------------------\n");

    function circunference (r) {

        // Aquí voy a comprobar que r es un numero
        if (Number.isNaN(Number.parseFloat(r))) {
            return 0;
        } else {
            return parseFloat(r) *2.0 * Math.PI;
        }
    }

    console.log("Cadena de letras: ", circunference("fgwvfgvervw"));
    console.log("Cadena de numeros y letras: ", circunference("4.233234fgwvfgvervw"));
