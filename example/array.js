var array1 = [];
var array2 = array1;

for (let i = 0; i < 3; i++) {
  array1.push(i);
}
// array2 = [];

array2.length = 0;
console.log("array1" + array1);
console.log("array2" + array2);
console.log(array1 === array2);
