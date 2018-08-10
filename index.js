var schema = require('./schema.json');
var solver = require('./solver.js');

var s = solver.solve(schema.schema);

console.log(s);