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
