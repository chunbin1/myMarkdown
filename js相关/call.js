function sum() {
  Array.prototype.forEach.call(arguments,function(value){console.log(value);})
}

sum(1,2,3,4)

let arr  = [3,1,0,8,-10]
console.log(Math.min.apply(null,arr))

function ClassA(){
  let a = 1;
  this.b = 2;
}

