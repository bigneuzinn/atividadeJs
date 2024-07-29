var num1 = 10; // Substitua pelo primeiro número
var num2 = 5;  // Substitua pelo segundo número
var resultado = num1 + num2;
console.log("Soma de dois números:", resultado);

var num1 = 15; // Substitua pelo primeiro número
var nvum2 = 7;  // Substitua pelo segundo número
var resultado = num1 - num2;
console.log("Subtração de dois números:", resultado);

var num1 = 4;  // Substitua pelo primeiro número
var num2 = 6;  // Substitua pelo segundo número
var resultado = num1 * num2;
console.log("Multiplicação de dois números:", resultado);

var num1 = 20; // Substitua pelo primeiro número
var num2 = 4;  // Substitua pelo segundo número
var resultado = num1 / num2;
console.log("Divisão de dois números:", resultado);

var valores = [];
for (var i = 0; i < 7; i++) {
    valores[i] = parseInt(prompt("Digite um valor para a variável " + (i + 1)));
    console.log("Valor inicial da variável " + (i + 1) + ": " + valores[i]);
    valores[i]++;
    console.log("Valor após incremento da variável " + (i + 1) + ": " + valores[i]);
    valores[i]--;
    console.log("Valor após decremento da variável " + (i + 1) + ": " + valores[i]);
}

var valores = [];
for (var i = 0; i < 5; i++) {
    valores[i] = parseInt(prompt("Digite um valor para a variável " + (i + 1)));
    console.log("Valor inicial da variável " + (i + 1) + ": " + valores[i]);
    valores[i]--;
    console.log("Valor após decremento da variável " + (i + 1) + ": " + valores[i]);
}


var num1 = 5;   // Substitua pelo primeiro número
var num2 = 10;  // Substitua pelo segundo número
var num3 = 15;  // Substitua pelo terceiro número
var resultado = num1 + num2 + num3;
console.log("Soma de três números:", resultado);

var num1 = 25; // Substitua pelo primeiro número
var num2 = 10; // Substitua pelo segundo número
var resultado = num1 - num2;
console.log("Diferença entre dois números:", resultado);


var num1 = 7;  // Substitua pelo primeiro número
var num2 = 9;  // Substitua pelo segundo número
var resultado = num1 * num2;
console.log("Produto de dois números:", resultado);


var num = parseInt(prompt("Digite um número negativo"));
var resultado = num - 5; // Exemplo de operação com número negativo
console.log("Operação com número negativo:", resultado);


var num1 = parseFloat(prompt("Digite um número decimal"));
var num2 = parseFloat(prompt("Digite outro número decimal"));
var resultado = num1 + num2; // Exemplo de operação com números decimais
console.log("Operação com números decimais:", resultado);


var total = 200; // Total de onde será calculado o percentual
var percentual = 15; // Percentual que será calculado
var resultado = (percentual / 100) * total;
console.log("Cálculo de percentual:", resultado);


var total = 0;
for (var i = 0; i < 4; i++) {
    total += parseFloat(prompt("Digite o valor " + (i + 1)));
}
var media = total / 4;
console.log("Média dos valores:", media);


var nome = prompt("Digite seu nome");
var sobrenome = prompt("Digite seu sobrenome");
var idade = prompt("Digite sua idade");
var dataNascimento = prompt("Digite sua data de nascimento");
var curso = prompt("Digite seu curso");

console.log("Nome:", nome);
console.log("Sobrenome:", sobrenome);
console.log("Idade:", idade);
console.log("Data de Nascimento:", dataNascimento);
console.log("Curso:", curso);

