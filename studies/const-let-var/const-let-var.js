/* Const e let */

function teste(x) {
    let y = 2;
    console.log(y);

    if (x > 5) {
        let y = 4; // Dentro de outro escopo
        console.log(x, y);
    }
}

teste(10);


// Uma const não pode ser REATRICUIDA, mas do sobrer mudanças
const a = 1;
//a = 2; -> errado

// Mudando uma variável const
const usuario = { nome: 'Samuel' };
usuario.nome = 'Neto';

console.log(usuario);


/* Var e Let */

void (function () {
  console.log('--- ', mensagem);
})();
var mensagem;

var exibeMensagem = function() {
  if(true) { 
      var escopoFuncao = 'Escopo da Funcao'; 
      let escopoBloco = 'Escopo do Bloco';

     console.log(escopoBloco); // Escopo do Bloco 
 } 
 console.log(escopoFuncao); // Escopo da Funcao 
 console.log(escopoBloco); // Aqui vai quebrar
}

exibeMensagem();



