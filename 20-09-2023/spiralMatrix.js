function spiralOrder(matrix) {
    let res = [];
    let rowBegin = 0, rowEnd = matrix.length - 1;
    let columnBegin = 0, columnEnd = matrix[0].length - 1;

    while (rowBegin <= rowEnd && columnBegin <= columnEnd) {
        for (let i = columnBegin; i <= columnEnd; i++)
            res.push(matrix[rowBegin][i]);
        rowBegin++;

        for (let i = rowBegin; i <= rowEnd; i++)
            res.push(matrix[i][columnEnd]);
        columnEnd--;

        if (rowBegin <= rowEnd) {
            for (let i = columnEnd; i >= columnBegin; i--)
                res.push(matrix[rowEnd][i]);
        }
        rowEnd--;

        if (columnBegin <= columnEnd) {
            for (let i = rowEnd; i >= rowBegin; i--)
                res.push(matrix[i][columnBegin]);
        }
        columnBegin++;
    }
    return res;
}

// Example usage:
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let result = spiralOrder(matrix);
console.log(result);
