/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }
    var s = String(x);
    if(s.length === 1){
        return true;
    }
    for(var i = 0 ; i < s.length; i++){
        if(s[i] !== s[s.length - 1 - i]){
            return false;
        }
    }
    return true;
};