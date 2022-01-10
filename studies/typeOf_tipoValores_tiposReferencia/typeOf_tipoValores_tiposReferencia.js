/* TypeOf e Tipos primitivos */

console.log(typeof true); //boolean
console.log(typeof Boolean(true)); //boolean
console.log(typeof new Boolean(true)); //object
console.log(typeof 'Samuel'); //string
console.log(typeof 28); //number


// Transformando um tipo primitivo em objeto e depois ele desaloca da memória
console.log('Samuel'.length); //6

// Objetos com tipos primitivos
var doze = new Number(12); //aqui é um objeto
var quinze = doze + 3; //aqui é um tipo primitivo

console.log(typeof doze); //object
console.log(typeof quinze); //number
console.log(quinze); //15
console.log(doze); //Number {}



/* Tipos de valor e Tipos de referência */

// Tipos primitivos são tipos de valor
// Array, objetos e funções são tipos de referência

// Tipos de valor: com variáveis
var x = 10; //No local na memória, Ex.: mem.0001 = nome é x, e o valor é 10
var y = x; //Na memória é criada uma cópia da variável x e atribuída à variável y.
x = 20;

console.log(x, y); //20 e 10

// Tipos de referência: com objetos
var x = { valor: 10 };
var y = x; //Aqui é criado um ponteiro de x na variável y
x.valor = 20;

/*
local mem.002 = {valor:10}
variavel x => mem.002
variavel y = x => mem.002 (como x e y apontam pro mesmo endereço, qualquer mudança em umas delas vai refletir nas duas)
Toda variável que recebe um objeto ela guarda a referência daquele objeto na memória e não o valor dele.
Já o tipo primitivo guarda o valor.
*/

console.log(x); //[object Object] { valor: 20 }
console.log(y); //[object Object] { valor: 20 }

y.valor = 40;
console.log(x); //[object Object] { valor: 40 }
console.log(y); //[object Object] { valor: 40 }
