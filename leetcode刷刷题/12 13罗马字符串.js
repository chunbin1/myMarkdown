var intToRoman = function(num) {
  const values=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const reps=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  let res = ''
  values.forEach((value,index) => {
    while(num>=value){
      num = num - value
      res = res + reps[index]
    }
  }
  )
  return res
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map ={
      "M":1000,
      "D":500,
      'C':100,
      'L':50,
      'X':10,
      'V':5,
      'I':1,
    }
    let resNum = 0 ;
    for (let index = 0; index <= s.length-1;) {
      console.log(resNum)
      if(index+1>s.length-1){
        resNum = resNum + map[s[index]]
        index += 1
        continue
      }
      if(map[s[index]]>=map[s[index+1]]){
        resNum = resNum + map[s[index]]
        index += 1
      }else{
        resNum = resNum - map[s[index]] + map[s[index+1]]
        index += 2
      }
    }
    return resNum
};

console.log(intToRoman(1994));
console.log(romanToInt('MCMXCIV'));

