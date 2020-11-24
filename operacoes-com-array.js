const arr = [1 ,3, 4, 5, 8, 9, 10];

// Map
// Retorna um novo array com as informações do antigo modificadas
const map = arr.map(function(item) {
    return item * 2;
});
console.log(map); // Saida: [ 2, 6, 8, 10, 16, 18 ]

const map2 = arr.map(function(item, index) {
    return item + index;
});
console.log(map2); // Saida: [ 1, 4, 6, 8, 12, 14 ]


// Reduce
// Um forma de consumir todo o vetor e transfomá-lo numa única informação. Ex.: Somando todos os valores
const sum = arr.reduce(function(total, next) {
    return total + next;
});
console.log(sum); // Saida: 30, que é a soma de todos os itens do array


// Filter
// Utilizado filtrar algo no array
const filter = arr.filter(function(item) {
    return item % 2 === 0; // Retorne os números pares do array
});
console.log(filter); // Saida: [ 4, 8, 10 ]


// Find
// Utilizado para filtrar informações existente no array, se for true ele retorna o valor
const find = arr.find(function(item) {
    return item === 4; // Verifique se existe o 4 no array
}); 
console.log(find); // Saida: 4. Caso não existisse, retornaria "undefined"