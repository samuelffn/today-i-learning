/* Link: */
// https://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items

const input = [
  [1, 2, 3],
  [101, 2, 1, 10],
  [2, 1]
];
const mergeDedupe = (arr) => {
  return [...new Set([].concat(...arr))];
}

console.log('output', mergeDedupe(input));
console.log('----------------------------');



/* Using spread operator */

let hero = ['Rajini', 'Kamal', 'Fahad'];
let villan = ['Vijay seathupathi', 'Nasar'];

let heroicVillan = [...hero, ...villan];
console.log(heroicVillan);
console.log('----------------------------');



/* Using concat method */

var array1 = [1,2,3,4,5]
var array2 = [6,7,8,9,10];
var array3 = [11,12,13];

console.log("Merging array by [].concat(array1, array2, array3 )")
var mergedArray = [].concat(array1, array2, array3);
console.log("Merged Array", mergedArray);

// another way
console.log("\nMerging array by array1.concat(array2, array3) ")
mergedArray = array1.concat(array2, array3);
console.log("Merged Array", mergedArray);
console.log('----------------------------');



/* Using push with the spread operator */

function merge(...arrays) {
    let newArray = [];
    for(let i = 0; i < arrays.length; i++) {
        newArray.push(...arrays[i]);
    }
    return newArray;
}

console.log(merge([1,2,3], [4,5,6], [7,8,9]))
console.log('----------------------------');

/* Link: */
// https://www.educative.io/edpresso/how-to-merge-arrays-in-javascript?utm_term=&utm_campaign=%5BTest%5D+Dynamic+Verticals&utm_source=adwords&utm_medium=ppc&hsa_acc=5451446008&hsa_cam=14045073269&hsa_grp=128822123401&hsa_ad=535845844738&hsa_src=g&hsa_tgt=dsa-310094130363&hsa_kw=&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw5oiMBhDtARIsAJi0qk147K9Yfv0g-AaGa2Pt42ytfANL5uK5pXV6Y-ZZg7K9h8_2KtIgMPMaAl2nEALw_wcB



/* Dividindo o array em partes */
let a = ['a','b','c','d','e','f','g'], chunk;

while (a.length > 0) {
  chunk = a.splice(0,3);

  console.log(chunk);
}

/* Saida: */
// [ 'a', 'b', 'c' ]
// [ 'd', 'e', 'f' ]
// [ 'g' ]

console.log('----------------------------');


