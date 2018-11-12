/* 代理实现单例模式
好处：构造函数CreateDiv现在只负责构造对象
  至于是返回现有对象还是构造新的对象并返回
  由代理类proxySingletonCreateDiv来处理
*/
var CreateDiv = function(html){
  this.html = html;
  this.init()
}

CreateDiv.prototype.init = function(){
  var div = document.createElement('div')
  div.innerHTML = this.html
  document.body.appendChild(div)
}

// 代理类proxySingletonCreateDiv
var proxySingletonCreateDiv = (function(){
  var instance;
  return function(html){
    if(!instance){
      instance = new CreateDiv(html)
    }
    return instance
  }
})()

var a = new proxySingletonCreateDiv('sven1')
var b = new proxySingletonCreateDiv('sven2')

alert(a===b) // true
