String.prototype.getMostOften = function() {
  let temp = {};
  let max = 0;
  this.split("").forEach(item => {
    if (temp[item]) {
      temp[item]++;
      max= temp[item]>max?temp[item]:max;
    }
    else{
      temp[item]=1
    }
  });
  return max
};

var str = "ahbbccdedddddfffffffffffg";
var ch = str.getMostOften();
console.log(ch); //d , 因为d 出现了5次
