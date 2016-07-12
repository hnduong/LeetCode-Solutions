/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var nums = [];
    nums1.forEach(function(item){
        nums2.forEach(function(item2){
            if(item == item2){
                if(nums.indexOf(item2) == -1){
                    nums.push(item2);
                }
            }
        })
    });

    return nums;
};