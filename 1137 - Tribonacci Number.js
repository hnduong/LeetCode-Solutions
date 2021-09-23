let cache = {0: 0, 1:1, 2: 1}

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
   if (cache[n] !== undefined){
       return cache[n]
   }
    
    const value = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1)
    cache[n] = value;
    return value;
};
