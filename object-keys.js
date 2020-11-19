// Array de String
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// Array com objeto
const obj = { 0: 'a', 1: 'b', 2: 'c', 3: { d: '4', e: '5' } };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// Array como objeto com ordenação aleatória por chave
const an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(an_obj)); // console: ['2', '7', '100']

/* const teste = JSON.parse(
    {
        primObg {
            valorA,
            valorB'
        },
        segObg: {
            valorC: 'Valor de C',
            valorD: 'Valor de D'
        }
    }
);
console.log('...', teste); */

//const saida = Object.keys(teste);
//console.log('Saída: ', saida); // console: ['0', '1', '2']

