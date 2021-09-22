/**
 * @param {string} str
 * @return {number}
 */

    //incomplete
var myAtoi = function(str) {
    if(str[0] === ' '){
        str = str.trim();
    }

    //check for letters
    for(var i = 0 ; i < str.length; i++){
        switch(str[i]){
            case ' ':
                str = str.split(str[i]);
                break;
            case '+':
                break;
            case '-':
                break;
            default:
        }
    }




    if(isNaN(Number(str))){
        return 0;
    }

    if(Number(str) > 214748367){
        return 2147483647;
    }

    if(Number(str) < -2147483648){
        return -2147483648;
    }
    return Number(str);
};
