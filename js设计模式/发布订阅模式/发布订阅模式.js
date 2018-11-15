/*
  思路：
    1.指定发布者
    2.发布者添加缓存列表
    3.发布消息时，发布者遍历缓存列表，依次触发里面存放的订阅者回调函数
*/

var salesOffices = {}
salesOffices.clientList = []
salesOffices.listen = function(fn){
  this.clientList.push(fn)
}
salesOffices.trigger = function(){
  for(var i = 0; fn ;fn = this.clientList[i++])
  {
    fn.apply(this,arguments)
  }
}