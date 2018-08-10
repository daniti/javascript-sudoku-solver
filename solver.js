module.exports = {
    solve: solve,
    solveNextStep: solveNextStep
}

function solve(ar) {
    while (!solved(ar)) {
        ar = solveNextStep(ar);
    }
    return ar;
}

function solveNextStep(ar) {
    ar.forEach((item, index) => {
        if (item == 0) {
            var avail = availableInIndex(ar, index)
            if (avail.length == 1) {
                ar[index] = avail[0];
            }
        }
    });
    return ar;
}

function row(ar, n) {
    return ar.slice(9 * (n - 1), 9 * (n - 1) + 9);
}

function rows(ar) {
    var rows = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return rows.map((item) => {
        return row(ar, item);
    });
}

function cols(ar) {
    var cols = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return cols.map((item) => {
        return col(ar, item);
    });
}

function col(ar, n) {
    return ar.filter((item, index) => {
        return index % 9 == n - 1;
    });
}

function box_rows(ar, n) {
    var start_row = Math.floor((n - 1) / 3) * 3 + 1;
    return [start_row, start_row + 1, start_row + 2].map((item) => {
        return row(ar, item);
    });
}

function box(ar, n) {
    var start_col = ((n - 1) * 3) % 9;
    var box = box_rows(ar, n).map((this_row) => {
        return this_row.filter((n, index) => {
            return index >= start_col && index < start_col + 3;
        });
    });
    var final = [];
    box.forEach((r) => {
        final = final.concat(r);
    });
    return final;
}

function available(ar) {
    // ar = [0, 2, 0, 4, 5, 6, 0, 8, 9] => return [1, 3, 7]
    return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((n) => {
        return ar.indexOf(n) == -1;
    })
}
function whichBox(coords) {
    /*
    Boxes
    1, 2, 3
    4, 5, 6
    7, 8, 9
    */

    // 4, 2 => 2
    var boxes = [
        1, 2, 3,
        4, 5, 6,
        7, 8, 9
    ];
    var box_index = index({
        x: Math.ceil(coords.x / 3),
        y: Math.ceil(coords.y / 3)
    }, 3);
    return boxes[box_index];
}

function timesInArray(ar, n) {
    var tot = 0;
    ar.forEach((item) => {
        if (item == n) {
            tot++;
        }
    });
    return tot;
}

function availableInIndex(ar, index) {
    var i_coords = coords(index);
    var availableInRow = available(row(ar, i_coords.y));
    var availableInColumn = available(col(ar, i_coords.x));
    var availableInBox = available(box(ar, whichBox(i_coords)));
    var merge_available = availableInRow.concat(availableInColumn).concat(availableInBox);
    var all_available_dups = merge_available.filter((item) => {
        return timesInArray(merge_available, item) == 3;
    });
    var all_available = [];
    all_available_dups.forEach((item) => {
        if (all_available.indexOf(item) == -1) {
            all_available.push(item);
        }
    });
    return all_available;
}

function coords(index) {
    return {
        x: index % 9 + 1,
        y: Math.floor(index / 9) + 1
    }
}

function index(coords, size = 9) {
    return ((coords.y - 1) * size) + coords.x - 1;
}

function solved(ar) {
    return ar.indexOf(0) == -1;
}