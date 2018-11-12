var curring = function(fn){
  var args = []

  return function(){
    if ( arguments.length === 0)
    {
      return fn.apply( this , args)
    }else{
      [].push.apply( args,arguments)
      return arguments.callee
    }
  }
}

var cost = (function(){
  var money = 0
  return function(){
    for(var i= 0,l=arguments.length;i<l;i++)
    {
      money+=arguments[i]
    }
    return money
  }
})()

var cost = curring(cost)

cost(100)
cost(200)
cost(300)

// uncurrying 把对象方法转化为通用方法
Function.prototype.uncurrying = function(){
  var self = this;
  return function(){
    var obj = Array.prototype.shift.call( arguments)
    return self.apply(obj,arguments)
  }
}

Function.prototype.uncurrying = function(){
  var self = this
  return Function.prototype.call.apply(self,arguments)
}