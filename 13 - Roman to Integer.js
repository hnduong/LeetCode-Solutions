/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var sum = 0;
    for(var i = 0 ; i < s.length; i++){
        if(Keys[''+s[i]+s[i+1]] !== undefined){
            sum+=Keys[''+s[i]+s[i+1]];
            i++;
        }else{
            sum+=Keys[s[i]];
        }
    }
    return sum;
};

var Keys = {
    I : 1,
    IV: 4,
    V : 5,
    IX: 9,
    X : 10,
    XL: 40,
    L : 50,
    XC: 90,
    C : 100,
    CD: 400,
    D : 500,
    CM: 900,
    M : 1000
};