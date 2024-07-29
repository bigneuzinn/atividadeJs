var total = 0;
for (var i = 0; i < 4; i++) {
    total += parseFloat(prompt("Digite o valor " + (i + 1)));
}
var media = total / 4;
console.log("Média dos valores:", media);
