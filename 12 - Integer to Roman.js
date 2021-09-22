/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var t = num;
    var str = "";
    while(t > 0){
        if(t >= 1000){
            t-=1000;
            str+=Keys[1000];
        }
        else if(t >= 900){
            t-=900;
            str+=Keys[900];
        }
        else if(t >= 500){
            t-=500;
            str+=Keys[500];
        }
        else if(t >= 400){
            t-=400;
            str+=Keys[400];
        }
        else if(t >= 100){
            t-=100;
            str+=Keys[100];
        }
        else if(t >= 90){
            t-=90;
            str+=Keys[90];
        }
        else if(t >= 50){
            t-=50;
            str+=Keys[50];
        }
        else if(t >= 40){
            t-=40;
            str+=Keys[40];
        }
        else if(t >= 10){
            t-=10;
            str+=Keys[10];
        }
        else if(t >= 9){
            t-=9;
            str+=Keys[9];
        }
        else if(t >= 5){
            t-=5;
            str+=Keys[5];
        }
        else if(t >= 4){
            t-=4;
            str+=Keys[4];
        }
        else if(t >= 1){
            t-=1;
            str+=Keys[1];
        }
    }
    return str;
};

var Keys = {
    1   : 'I',
    4   : 'IV',
    5   : 'V',
    9   : 'IX',
    10  : 'X',
    40  : 'XL',
    50  : 'L',
    90  : 'XC',
    100 : 'C',
    400 : 'CD',
    500 : 'D',
    900 : 'CM',
    1000: 'M'
};