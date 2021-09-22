/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    const arr = [];
    
    for (let i = 0; i <= n; i += 1){
        const binary = i.toString("2");
        const num1s = binary.split('').filter(s => s === '1').length;
        arr.push(num1s)
    }
    return arr;
};