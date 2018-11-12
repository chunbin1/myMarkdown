// 方案一 缺点:每次调用都会执行里面的if条件分支
var addEvent = function(elem,type,handler){
  if( window.addEventListener){
    return elem.addEventListener(type,handler,false)
  }
  if(window.attachEvent){
    return elem.attachEvent('on'+type,handler)
  }
}

// 方案二： 代码加载时就立刻进行一次判断
var addEvent = (function(elem,type,handler){
  if(window.addEventListener){
    return function(elem,type,handler){
      elem.addEventListener(type,handler,false)
    }
  }
  if(window.attachEvent){
    return function(elem,type,handler){
      elem.attachEvent('on'+type,handler)
    }
  }
})()
// 缺点：如果我们从头到尾都没使用addEvent函数，这个操作就多余了，还会稍微延长页面ready的时间

/* 方案三：惰性载入函数
  原理：函数里有一些分支判断，第一次进入条件分支后，在函数内部会重写这个函数
    重写之后的函数就是我们期望的addEvent函数
    在下一次进入addEvent函数，addEvent函数里不再存在条件分支语句
*/

var addEvent = function(elem,type,handler){
  if(window.addEventListener){
    addEvent = function(elem,type,handler){
      elem.addEventListener(type,handler,false);
    }
  }else if(window.attachEvent){
    addEvent = function(elem,type,handler){
      elem.attachEvent('on'+type,handler)
    }
  }

  addEvent(elem,type,handler)
}