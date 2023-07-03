// Hay, por un lado, Aritméticos y de comparación
// Hay Lógicos --> Y, O, NO

// Operador OR --> O --> ||
// Hay dos opciones, con que una se cumpla va a ser válida

const soyMayorDeEdad = true;
const tengoDinero = false;
const puedoSalirDeCervezas = soyMayorDeEdad || tengoDinero;
console.log(puedoSalirDeCervezas);

// Operador AND --> Y --> &&

const tengoCoche = false;
const tengoCarnet = true;

const puedoConducir = tengoCoche && tengoCarnet;
console.log(puedoConducir);

// Operador NOT --> NO --> !

const trueNOT = !true;
const falseNOT = !false;

console.log(trueNOT, falseNOT);

