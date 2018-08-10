# pr solver
```javascript
var schema = require('./schema.json');
var solver = require('./solver.js');

var solved = solver.solve(schema.schema);

console.log(solved);
```