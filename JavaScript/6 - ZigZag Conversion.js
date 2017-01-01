/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1){//no zig-zagging
        return s
    }
    var res = '';
    for(var i = 0; i < numRows && i < s.length; i++) {
        var inc = 2 * (numRows - i - 1)
        var current = i
        var previous =-1
        while(cur<s.length) {
            if(cur != pre){
                res += s[cur]
            }
            pre = cur
            cur += inc
            inc = 2 * (numRows - 1) - inc
        }
    }
    return res;
};
