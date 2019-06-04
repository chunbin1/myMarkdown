/**
 * @param {string[]} strs
 * @return {string}
 */
// ["flower","flow","flight"]

// 自己写的
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return "";
  }
  if (strs.length === 1) {
    return strs[0];
  }
  let is = true;
  const ret = [];
  let index = 0;
  while (is) {
    for (let x = 0; x < strs.length - 1; x++) {
      if (strs[x + 1][index] === undefined) {
        is = false;
        break;
      }
      if (strs[x][index] === strs[x + 1][index]) {
        if (x + 1 === strs.length - 1) {
          ret.push(strs[x][index]);
          index += 1;
        }
      } else {
        is = false;
        break;
      }
    }
  }
  return ret.join("");
};

// 别人比较好的 使用reduce来做遍历 代码简洁
var longestCommonPrefix2 = function(strs){
  if(strs.length<2){
    return !strs.length?'':strs[0]
  }
  return strs.reduce((pre,next) => {
    let i=0;
    while(pre[i]&&next[i]&&pre[i]===next[i]){
      i++
    }
    return pre.slice(0,i)
  })
}

console.log(longestCommonPrefix2(["flower", "flow", "flight"]));
