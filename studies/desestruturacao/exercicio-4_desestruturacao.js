// Ecxercício 4
/**
    4.1 Desestruturação simples
    A partir do seguinte objeto:
    const empresa = {
        nome: 'Rocketseat',
        endereco: {
            cidade: 'Rio do Sul',
            estado: 'SC',
        }
    };
    
    Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
    fim deve ser possível fazer o seguinte:
    console.log(nome); // Rocketseat
    console.log(cidade); // Rio do Sul
    console.log(estado); // SC

    4.2 Desestruturação em parâmetros
    Na seguinte função:
    function mostraInfo(usuario) {
        return `${usuario.nome} tem ${usuario.idade} anos.`;
    }
    mostraInfo({ nome: 'Diego', idade: 23 })
    
    Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
    separadamente e a função poder retornar apenas:
    return `${nome} tem ${idade} anos.`;
 */

// 4.1 Desestruturação simples
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};
const { nome, endereco: { cidade, estado } } = empresa;
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC
console.log('---');

// 4.2 Desestruturação em parâmetros
function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));
console.log('---');



