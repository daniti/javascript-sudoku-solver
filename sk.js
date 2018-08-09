var schema = require('./schema.json');
var solver = require('./solver.js');

var s = solver.solve(schema.schema);

var rows = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
    return s.slice((item - 1) * 9, (item - 1) * 9 + 9);
});

console.log(rows);