/*
Tipos de datos que controla el operador TYPEOF
    - PRIMITIVOS:
        - Undefined
        - Boolean
        - Number (+Infinity & -Infinity, Number.MAX_VALUE & Number.MIN_VALUE; NaN not a number)
        - String
        - BigInt
        - Symbol
    - NULL: si el objeto no se hereda
    - OBJECT: Estructura especial
        - new: Object, Array, Map, Set, WeakMap, WeakSet, Date, ...
    - FUNCTION: Estructra sin datos, forma abreviada para funciones.
*/

// OBJETO --> nombreObjeto = {}
// ARRAY --> nombreArray = []

let var1 = "Texto";
let var2 = 123;
let var3 = true

console.log(typeof var1, var2, var3)

if (typeof var1 != "boolean") console.log("var1 NO es booleano, es de tipo " + typeof var1)