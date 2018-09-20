/**
 * @param {string} s
 * @return {number}
 */

//  思路，2个指针依次往后遍历，O(N)复杂度，遇到相同的，前指针往后移动
var lengthOfLongestSubstring = function(s) {
  let i = 0,
    j = 0;
  let max = 0;
  let num = s.length;
  let map = {};

  while (i < num && j < num) {
    if (map[s[j]] === undefined) {
      map[s[j]] = 1;
      j++;
      max = Math.max(max, j - i);
    } else {
      delete map[s[i]];
      i++;
    }
  }
  return max;
};
