// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  let temp = [];
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    if (temp[target - cur] !== undefined) {
      return [temp[target - cur], i];
    }
    temp[cur] = i;
  }
  return [];
};

console.log(twoSum([2, 4, 7, 11], 9));
console.log(twoSum([2, 4, 7, 11, 15], 4));
console.log(twoSum([3, 2, 4], 6));
console.log("aaa");
