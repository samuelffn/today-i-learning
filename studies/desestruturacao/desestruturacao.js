/* Atribuições desestruturadas */

const usuario = {
    nome: 'Maria',
    idade: '25',
    endereco: {
        cidade: 'Olinda',
        estado: 'PE'
    }
}

// Fazendo a desestruturação
const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);
console.log('------');

function mostraNome(usuario) {
    console.log(usuario.nome)
}
mostraNome(usuario);
console.log('------');

// Desestruturação em parâmetros de funções
function mostraNome2({ nome, idade }) {
    console.log(nome)
    console.log(idade)
}
mostraNome2(usuario);


/* Adicionando alias em atribuições desestruturadas */

const valores = {oficio: 'programador', aniversario: '18/03/1990'};
const {oficio: profissao, aniversario: dataNascimento} = valores;
 
console.log(profissao); // programador
console.log(dataNascimento); // 18/03/1990
