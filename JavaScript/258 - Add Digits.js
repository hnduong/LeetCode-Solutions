/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var str = String(num);
    var tot = 0;
    for(var i = 0 ; i < str.length; i++){
        tot += Number(str[i]);
    }
    if(tot < 10){
        return Number(tot);
    }
    return addDigits(tot);
};