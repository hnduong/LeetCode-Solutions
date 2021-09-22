let cache = {
    0:0,
    1:1
};
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (cache[n] !== undefined){
        return cache[n];
    }
    var value = fib(n - 2) + fib(n - 1);
    cache[n] = value;
    return value;
};