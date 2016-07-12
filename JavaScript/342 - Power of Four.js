/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if(num > 1){
        return isPowerOfFour(num/4);
    }
    if(num == 1){
        return true;
    }
    if(num < 4){
        return false;
    }
};