/*
  分时函数
  
  适用场景:
    好友列表，一次性创建多个节点，浏览器卡顿，假死
*/

//假死：
var ary = []

for(var i = 1 ; i <100000 ; i++)
{
  ary.push(i)
}

var renderFriendList = function(data){
  for(var i = 0,l= data.length;i<l;i++){
    var div = document.createElement('div')
    div.innerHTML = i;
    document.body.appendChild(div)
  }
}

renderFriendList(ary)

/* timeChunk函数，让创建节点的工作分批进行
接受3个参数：
  1.创建节点需要的数据
  2.封装节点逻辑的函数
  3.每一批创建的节点数量
*/

var timeChunk = function(ary,fn,count){
  var obj,t
  var len = ary.length

  var start = function(){
    for(var i = 0;i<Math.min(count||1,ary.length);i++)
    {
      var obj = ary.shift()
      fn(obj)
    }
  }

  return function(){
    t = setInterval(function(){
      if(ary.length === 0){
        return clearInterval(t)
      }
      start();
    },200)
  }
}

var ary = []

for(var i = 1 ; i <100000 ; i++)
{
  ary.push(i)
}

var renderFriendList =  timeChunk( ary,function(n){
  var div = document.createElement('div')
  div.innerHTML = n;
  document.body.appendChild(div)
},1000)


renderFriendList(ary)