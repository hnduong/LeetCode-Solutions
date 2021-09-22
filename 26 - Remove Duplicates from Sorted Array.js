/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0
    for (let j = 0; j < nums.length; j += 1) {
        if (nums[j + 1] != nums[j]) {
            nums[i] = nums[j]
            i += 1
        }
    }
    return i
};
