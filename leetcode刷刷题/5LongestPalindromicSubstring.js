/**
 * @param {string} s
 * @return {string}
 */

//  参考问题3，只要记录下坐标就好了
var longestPalindrome = function(s) {
  let i = 0,
    j = 0;
  let map = {};
  let max = 0;
  let index = 0;
  let num = s.length;

  while (i < num && j < num) {
    if (map[s[j]] === undefined) {
      map[s[j]] = 1;
      j++;
    } else {
      i++;
      if (j - i + 1 > max) {
        index = i;
        max = j - i + 1;
      }
      delete map[s[i]];

    }
  }
  return s.slice(index, max);
};

let a = "cbb";
// console.log(a.slice(0, 3));
console.log(longestPalindrome(a));
