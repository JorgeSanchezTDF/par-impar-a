/*
Ejercicio – Par/Impar

•Desarrollar un algoritmo que dado un número,
ingresado por el usuario determine si el
número es par o impar y le informe al usuario
•En el caso de ser 0 (cero) el algoritmo deberá
informarlo
*/

let numero: number = Number(prompt("Ingrese un numero"));

if (numero === 0) {
  console.log("El numero es 0");
} else if (numero % 2 === 0) {
  console.log("El numero es par");
} else {
  console.log("El numero es impar");
}
