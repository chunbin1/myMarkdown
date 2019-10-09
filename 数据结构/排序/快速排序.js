function quickSort(arr) {
  if (arr.length<=1) {return arr;}
  const left = [],
    right = [],
    baseDot =Math.round(arr.length/2), // 随机获取基准数  也可以使用 左中尾的中间数
    base =arr.splice(baseDot, 1)[0];

  for (var i =0; i <arr.length; i++) {
    if (arr[i] < base) {
      left.push(arr[i])
    }else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left),base,...quickSort(right)];
}

const arr = [9,23,4,56,7,7,31,23]
console.time('sort')
console.log(quickSort(arr))
console.timeEnd('sort')