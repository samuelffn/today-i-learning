JSON.stringify({});                  // '{}'
JSON.stringify(true);                // 'true'
JSON.stringify('foo');               // '"foo"'
JSON.stringify([1, 'false', false]); // '[1,"false",false]'
JSON.stringify({ x: 5 });            // '{"x":5}'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}' or '{"y":6,"x":5}'
JSON.stringify([new Number(1), new String('false'), new Boolean(false)]);
// '[1,"false",false]'

// Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol('') });
// '{}'
JSON.stringify({ [Symbol('foo')]: 'foo' });
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, [Symbol.for('foo')]);
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, function(k, v) {
  if (typeof k === 'symbol') {
    return 'a symbol';
  }
});
// '{}'

// Exemplo de uma função
function replacer(key, value) {
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

var foo = {fundação: "Mozilla", modelo: "caixa", semana: 45, transporte: "carro", mês: 7};
var jsonString = JSON.stringify(foo, replacer);
//O resultado do JSON é:  {"semana":45,"mês":7}.

// Exemplo com Array
JSON.stringify(foo, ['week', 'month']);  
// '{"week":45,"month":7}', only keep "week" and "month" properties

// Argumento Space
JSON.stringify({ a: 2 }, null, ' ');
// '{
//  "a": 2
// }'

JSON.stringify({ uno: 1, dos: 2 }, null, '\t');
// r:
// '{
//     "uno": 1,
//     "dos": 2
// }'

// COmportamento do toJson
var obj = {
  foo: 'foo',
  toJSON: function() {
    return 'bar';
  }
};
JSON.stringify(obj);        // '"bar"'
JSON.stringify({ x: obj }); // '{"x":"bar"}'

// Examplo de uso de JSON.stringify() com localStorage
// Criando um exemplo em JSON
var seção = {
  'telas': [],
  'estado': true
};
session.screens.push({ 'nome': 'telaA', 'largura': 450, 'altura': 250 });
session.screens.push({ 'nome': 'telaB', 'largura': 650, 'altura': 350 });
session.screens.push({ 'nome': 'telaC', 'largura': 750, 'altura': 120 });
session.screens.push({ 'nome': 'telaD', 'largura': 250, 'altura': 60 });
session.screens.push({ 'nome': 'telaE', 'largura': 390, 'altura': 120 });
session.screens.push({ 'nome': 'telaF', 'largura': 1240, 'altura': 650 });

// Convertendo a string JSON em JSON.stringify()
// Salvando com localStorage no nome da sessão
localStorage.setItem('seção', JSON.stringify(seção));

// Exemplo de como transformar a String gerada por meio de: 
// JSON.stringify() e salva em localStorage no objeto JSON novamente
var seçãoRestaurada = JSON.parse(localStorage.getItem('seção'));

// Agora, a variável seçãoRestaurada contém o objeto que foi salvo
// no localStorage
console.log(seçãoRestaurada);



