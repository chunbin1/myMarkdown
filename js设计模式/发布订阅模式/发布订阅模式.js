/*
  思路：
    1.指定发布者
    2.发布者添加缓存列表
    3.发布消息时，发布者遍历缓存列表，依次触发里面存放的订阅者回调函数
*/
/*
var salesOffices = {}
salesOffices.clientList = []
salesOffices.listen = function(fn){
  this.clientList.push(fn)
}
salesOffices.trigger = function(){
  for(var i = 0, fn ;fn = this.clientList[i++];)
  {
    fn.apply(this,arguments)
  }
}

salesOffices.listen(function(price,squareMeter){
  console.log('价格='+price)
  console.log('squareMeter'+ squareMeter)
})

salesOffices.listen(function(price,squareMeter){
  console.log("价格="+price)
  console.log('squareMeter'+ squareMeter)
})

salesOffices.trigger(20000,88)  // 发布消息
salesOffices.trigger(300000,110)

*/

// 添加key版本 , 订阅感兴趣的内容
/*
var salesOffices = {}
salesOffices.clientList = {}

salesOffices.listen = function(key,fn){
  // console.log(this)
  if(!this.clientList[key]){
    this.clientList[key] = []
  }
  this.clientList[key].push(fn)
}

salesOffices.trigger = function(){
  var key = Array.prototype.shift.call(arguments),
    fns = this.clientList[key]
  if(!fns||fns.length === 0)
  {return false}
  for(var i = 0,fn;fn=fns[i++];){
    fn.apply(this,arguments)
  }
}

salesOffices.listen('squareMeter88',function(price){
  console.log("价格="+price);
})

salesOffices.listen('squareMeter110',function(price){
  console.log("价格="+price);
})

salesOffices.trigger('squareMeter88',200000)
salesOffices.trigger('squareMeter110',300000)
*/

// 通用实现
/*
var event ={
  clientList:{},
  listen:function(key,fn){
    if(!this.clientList[key]){
      this.clientList[key] =[]
    }
    this.clientList[key].push(fn)
  },
  trigger:function(){
    var key =  Array.prototype.shift.call(arguments),
    fns = this.clientList[key]

    if(!fns||fns.length===0)
    {
      return false
    }

    for(var i = 0,fn;fn=fns[i++];){
      fn.apply(this,arguments)
    }
  },
  remove:function(key,fn){
    var fns = this.clientList[key];

    if(!fns){   // 如果没有传入具体
      fns&&(fns.length=0)
    }else{
      for(var l = fns.length-1;l>=0;l--)
      {
        var _fn = fns[l]
        if(_fn===fn){
          fns.splice(l,1)
        }
      }
    }
  }
}

// installEvent函数，给所有对象动态安装发布订阅功能

function installEvent(obj){
  for(var i in event){
    obj[i] = event[i]
  }
}

var salesOffices = {}

installEvent(salesOffices)

salesOffices.listen('squareMeter88',fn1=function(price){
  console.log("价格="+price);
})

salesOffices.listen('squareMeter110',fn2=function(price){
  console.log("价格="+price);
})

salesOffices.remove('squareMeter88',fn1)

salesOffices.trigger('squareMeter88',200000)
salesOffices.trigger('squareMeter110',300000)
*/

// 事实上，发布订阅模式可以使用一个全局Event对象实现，订阅者不需要了解来自哪个发布者，发布者也不知道消息会推送给哪些订阅者
// Event作为一个中介者的角色
/*
var Event = (function(){
  var clientList = {},
  listen,
  trigger,
  remove;

  listen = function(key,fn){
    if(!clientList[key]){
      clientList[key] = []
    }
    clientList[key].push(fn)
  }

  trigger = function(){
    var key = Array.prototype.shift.call(arguments),
    fns = clientList[key];
    if(!fns||fns.length === 0){
      return false
    }
    for(var i= 0 ,fn;fn=fns[i++];){
      fn.apply(this,arguments)
    }
  }

  remove = function(){
    var fns = clientList[key];
    if(!fns){
      return false
    }
    if(!fn){
      fns&&(fns.length=0)
    }else{
      for(var l = fns.length-1;l>=0;l--){
        var _fn=fns[l];
        if(_fn===fn){
          fns.splice(l,1);
        }
      }
    }
  };
  return {
    listen:listen,
    trigger:trigger,
    remove:remove
  }
})()

Event.listen('squareMeter88',function(price){
  console.log("价格"+price);
})

Event.trigger('squareMeter88',388000)
*/
// PS:如果模块之间使用了太多的全局发布-订阅模式，模块与模块间的联系就会被隐藏，为维护带来一定困难
// 带命名空间的发布订阅模式

