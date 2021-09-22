/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    if(typeof(Number(s)) === "number"){
        if(isNaN(Number(s))){
            return false;
        }
        if(isNaN(parseFloat(s))){
            return false;
        }
        return true;
    }
    return false;
};