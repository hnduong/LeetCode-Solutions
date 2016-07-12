public class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] sol = new int[2];

        for(int i = 0 ; i < nums.length; i++){
            for(int j = i + 1; j < nums.length; j++){
                if(nums[i]+nums[j] == target){
                    sol[0] = i+1;
                    sol[1] = j+1;
                }
            }
        }
        return sol;
    }
}