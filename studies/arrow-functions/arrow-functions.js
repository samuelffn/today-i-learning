const arr = [1 ,3, 4, 5, 6];

// Exemplos de Arrow Functions

const newArr = arr.map(item => {
    return item * 2;
});
const newArr2 = arr.map(item => item * 2);

console.log(newArr); // Saida:  [ 2, 6, 8, 10, 12 ]
console.log(newArr2); // Mesma saida de antes:  [ 2, 6, 8, 10, 12 ]


const map = arr.map((item, index) => {
    return item + index;
});
const map2 = arr.map((item, index) => item + index);

console.log(map); // Saida: [ 1, 4, 6, 8, 10 ]
console.log(map2); // Mesma saida de antes:  [ 1, 4, 6, 8, 10 ]


// Exemplo de função com a Arrow Function
// Função normal
function teste () {
    return 'oi';
}

// Mesma função com arrow function
const teste2 = () => {
    return 'oi';
}

const teste3 = () => 3; // Retornando o valor direto
const teste4 = () => ({ nome: 'Samuel' }); // Retornando o objeto direto, precisa dos parênteses antes das chaves

console.log(teste());
console.log(teste2());
console.log(teste3());
console.log(teste4());
