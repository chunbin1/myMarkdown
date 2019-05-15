var intToRoman = function(num) {
  const del = [
    { key: "M", value: 1000 },
    { key: "C", value: 100 },
    { key: "X", value: 10 },
    { key: "I", value: 1 }
  ];
  const cut = [
    { key: "D", value: 500 },
    { key: "L", value: 50 },
    { key: "V", value: 5 }
  ];
  const ret = [];
  // const ret = 0;
  del.forEach(({ key, value }, index) => {
    let tempNum = parseInt(num / value);
    if (index === 0) {
      while (tempNum) {
        ret.push(key);
        tempNum=tempNum-1
      }
    } else {
      if (tempNum === 9) {
        ret.push(del[index].key + del[index - 1].key);
      }
      if (tempNum === 4) {
        console.log(del[index].key + cut[index - 1].key);
        debugger;
        ret.push(del[index].key + cut[index - 1].key);
      }
      if (tempNum > 5) {
        ret.push(cut[index - 1].key);
        while (tempNum - 5) {
          ret.push(del[index].key);
          tempNum = tempNum - 1;
        }
      } else {
        while (tempNum) {
          ret.push(del[index].key);
          tempNum = tempNum - 1;
        }
      }
    }
    num = num % value;
  });
  return ret.join("");
};

console.log(intToRoman(1994));
