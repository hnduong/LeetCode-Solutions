/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    const arr = [[1]];

    for (let i = 1 ; i < numRows; i += 1){
        let prev = arr[i - 1];

        const curr = [];
        for (let j = 0; j < prev.length - 1; j += 1) {
            curr.push(prev[j] + (prev[j+1] || 0))
        }
        curr.unshift(1);
        curr.push(1);

        arr.push(curr)
    }
    return arr;
};

