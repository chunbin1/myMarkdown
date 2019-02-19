console.log(Date.now());
// var a= Date.now()
// console.log(typeof a);
a = new Date(1533176236);
var year = a.getFullYear()+'年';
var month = a.getMonth()+1+'月';
var date = a.getDate()+'日';
console.log([year,month,date].join('-'));   