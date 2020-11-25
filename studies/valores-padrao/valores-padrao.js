// Errado
function soma(a, b) {
    return a + b;
}
console.log(soma(1)); // Saida: NaN (NaN: Significa que não existe, como se fosse um valor infinito)
console.log(soma()); // Saida: NaN

// Certo
function soma2(a = 3, b = 6) {
    return a + b;
}
console.log(soma2(1)); // Saida: 7. Ele toma como base que o valor enviado é equivalente ao primeiro parâmetro
console.log(soma2()); // Saída: 9. Quando não enviamos nenhum valor ele utiliza os valores inicializados

// Usando Arrow Functions
const soma3 = (a = 3, b = 6) => a + b;
console.log(soma2(1)); // Saida: 7
console.log(soma2()); // Saida: 9