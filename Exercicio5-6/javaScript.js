var valores = [];
for (var i = 0; i < 7; i++) {
    valores[i] = parseInt(prompt("Digite um valor para a variável " + (i + 1)));
    console.log("Valor inicial da variável " + (i + 1) + ": " + valores[i]);
    valores[i]++;
    console.log("Valor após incremento da variável " + (i + 1) + ": " + valores[i]);
    valores[i]--;
    console.log("Valor após decremento da variável " + (i + 1) + ": " + valores[i]);
}