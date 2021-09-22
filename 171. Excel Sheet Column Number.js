/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {

    return s.split('')
      .map((v, index) => v.charCodeAt(0) - 64)
      .map((v2, index) => Math.pow(26, s.length - 1 - index) * v2)
      .reduce((prev, curr) => prev += curr, 0)
};
