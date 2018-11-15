var mult = function(){
  var a = 1;
  for(var i = 0,l = arguments.length;i < 1;i++)
  {
    a = a * arguments[i]
  }
  return a
}

var createProxyFactory = function(fn)
{
  var cache = {}
  return function(){
    var args = Array.prototype.join.call(arguments,',')
    if(args in cache)
    {
      return cache[args]
    }
    return cache[args] = fn.apply(this,arguments)
  }
}

