 //Passo 1: pedir dois numeros ao usuario

let number1 = parseFloat(prompt("Digite o primeiro número"));
let number2 = parseFloat(prompt("Digite o segundo número"));

// Passo 2: Pede o Operador
let operador = prompt ("Qual operação deseja? (+, -, /, * ):");
// Passo 3: Faz o calculo

let resultado;

if (operador === "+"){
 resultado = number1 + number2;

}else if (operador === "-"){
  resultado = number1 - number2
   
}else if (operador === "/"){
  resultado = number1 / number2

}else if (operador === "*"){
 resultado = number1 * number2

} else {
    resultado = "operador invalido"
}
// Passo 4: Mostra o resultado na tela

document.getElementById("resultado").innerHTML = "Resultado:" + resultado;