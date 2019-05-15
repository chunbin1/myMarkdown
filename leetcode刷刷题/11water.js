/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  let start = 0;
  let end = height.length - 1;
  if (start === end) return;
  while (start !== end) {
    const tempMax = Math.min(height[start], height[end]) * (end - start);
    if (tempMax > max) {
      max = tempMax;
    }
    if(height[start]>height[end]){
      end = end - 1
    }else{
      start = start + 1
    }
  }
  return max
};
