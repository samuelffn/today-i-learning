/* Listar todos os pokemons por tipo: */
// const objetoFinal = {
//    eletric: [],
//    water: [],
// }

/* Link do vídeo: */
// https://www.youtube.com/watch?v=O_bSjsLga48

const pokemons = [
  {
    name: 'Pikachu',
    type: 'eletric',
  },
  {
    name: 'Squirtle',
    type: 'water',
  },
  {
    name: 'Magikarp',
    type: 'water',
  },
];

const pokemonsPorTipo = pokemons.reduce((pokemonsPorTipo, pokemonAtual) => {
  // console.log(pokemonAtual);
  pokemonsPorTipo[pokemonAtual.type] = pokemonsPorTipo[pokemonAtual.type] || [];
  pokemonsPorTipo[pokemonAtual.type].push(pokemonAtual);

  return pokemonsPorTipo;
}, {});

console.log(pokemonsPorTipo.eletric);
console.log(pokemonsPorTipo.water);


