/*
  适用场景：
    函数被频繁调用，如：
      1. window.onresize
      2. mousemove
  原理：
    利用定时器
*/
var throttle = function (fn,interval)
{
  var _self = fn,  //保存需要被延迟执行的函数引用
    timer,  //定时器
    firstTime = true; //是否第一次调用
  return function(){
    var args = arguments,
    _me = this;

    if(firstTime){  // 如果是第一次调用，不需要延迟执行
      _self.apply(_me,args)
      return firstTime = false
    }

    if(timer){
      return false
    }

    timer = setTimeout(function(){
      clearTimeout(timer)
      timer = null ;
      _self.apply(_me,args)
    },interval||500)
  }
}

window.onresize = throttle(function(){
  console.log(1);
},500)