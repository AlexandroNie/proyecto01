let num1 = parseInt (prompt("Ingrese el primer número"));
let num2 = parseInt (prompt("Ingrese el segundo número"));
let num3 = parseInt (prompt("Ingrese el tercer número"));
let num4 = parseInt (prompt("Ingrese el cuarto número"));
let promedio = (num1 +  num2 + num3 + num4) /2;
let promRound = Math.round(promedio);
document.write(`El promedio es: ${promRound}`);