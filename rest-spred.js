// Instalação dos pacotes
// yarn add @babel/plugin-proposal-object-rest-spread

// REST
const usuario = {
    nome: 'Joana',
    idade: 26,
    empresa: 'Casa e Cia'
};

// Com objetos
const { nome, ... resto } = usuario;
console.log(nome);
console.log(resto);
console.log('\n');

// Com arrays
const arr = [ 1, 2, 3, 4 ];
const [ a, b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log('\n');

// Utilizando em funções
function soma(a, b, c) {
    return a + b + c;
}

function soma2(...params) {
    return params.reduce((total, next) => total + next);
}

function soma3(...params) {
    return params;
}

function soma4(a, b, ...params) {
    //return params;
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3));
console.log(soma2(1, 2, 3));
console.log(soma3(1, 2, 3));
console.log(soma4(1, 2, 3, 4, 5, 6, 7));
console.log('\n');


// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ];

console.log(arr3);

const user = {
    nome: 'Carla',
    idade: 35,
    empresa: 'Google'
};

const user2 = { ...user, nome: 'Clarice' };

console.log(user2);
