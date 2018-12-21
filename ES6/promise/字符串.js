//  请使用ES6重构以下代码 
var calculate = function (x, y, z) {
    if (typeof x != 'number') {
        x = 0
    }
    if (typeof y != 'number') {
        y = 6
    }
    var dwt = x % y
    var result
    if (dwt == z) {
        result = true
    }
    if (dwt != z) {
        result = false
    }
    return result
}

var calculate2 =(x,y,z)=>
{
    x=typeof x === 'number'?x:0;
    y=typeof y === 'number'?y:6;
    return z===x%y;
}