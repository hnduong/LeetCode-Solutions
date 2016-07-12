/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    for( var i = 0 ; i < num+1 ; i++){
        if(i * i == num){
            return true;
        }
        if(i * i > num){
            break;
        }
    }
    return false;
};