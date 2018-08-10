# Javascript Sudoko Solver
Pass an array to the `solve` function to get the solution.
```javascript
var schema = require('./schema.json');
var solver = require('./solver.js');

var solved = solver.solve(schema.schema);

console.log(solved);
```
You can also solve only the next step using `solveNextStep`.
```javascript
var nextStep = solver.solveNextStep(schema.schema);
```
Both functions accept an array of 80 elements, with `0` for empty cells (to be solved). The array looks like this:
```javascript
var schema = [
    0, 0, 4, 7, 3, 1, 9, 0, 0,
    3, 9, 0, 5, 0, 0, 0, 8, 0,
    1, 0, 2, 0, 0, 0, 0, 0, 3,
    6, 0, 0, 4, 0, 0, 8, 5, 0,
    0, 1, 3, 0, 0, 0, 6, 9, 0,
    0, 8, 5, 0, 0, 9, 0, 0, 4,
    2, 0, 0, 0, 0, 0, 4, 0, 8,
    0, 7, 0, 0, 0, 2, 0, 6, 1,
    0, 0, 1, 6, 7, 8, 2, 0, 0
]
```
