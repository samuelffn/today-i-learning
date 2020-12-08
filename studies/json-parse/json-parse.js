const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true

// Usando JSON.parse()
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null


// Usando o parâmetro reviver
JSON.parse('{"p": 5}', (key, value) =>
  typeof value === 'number'
    ? value * 2 // retorna o valor * 2 para números
    : value     // retorna tudo sem alteração
);

// { p: 10 }

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
  console.log(key); // mostra o nome da propriedade atual, o último é "".
  return value;     // retorna o valor da propriedade inalterada.
});

// 1
// 2
// 4
// 6
// 5
// 3 
// ""


// JSON.parse() não é permitido vírgulas à direta
// ambos retornarão um SyntaxError
JSON.parse('[1, 2, 3, 4, ]');
JSON.parse('{"foo" : 1, }');



