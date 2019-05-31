/**
 * 思路: 从中间向两边扩散 查找相同
 *
 */

var longestPalindrome = function(s) {
  if (s.length === 0) return '';
  let start = 0; // 标识开始的下标
  let end = 0; // 标识结束的下标
  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i);
    const len2 = expandAroundCenter(s, i, i + 1);
    const len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substring(start, end + 1);
};

function expandAroundCenter(str, left, right) {
  let l = left;
  let r = right;
  while (l >= 0 && r < str.length && str[l] === str[r]) {
    l--;
    r++;
  }
  return r - l - 1; // 因为多加了1所以要减
}

let a = "cbb";
// console.log(a.slice(0, 3));
console.log(longestPalindrome(a));
