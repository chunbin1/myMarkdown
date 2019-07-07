// var isNode = window?false:true;

function _const(key,value){
  window[key] = value;
  Object.defineProperty(window,key,{
    value:value,
    writable:false,
    enumerable:false,  // const是不会挂载 不能枚举的
    configurable:false,
  })
}

_const("c",12)

function _const2(key,value){
  window[key] =  value;
  Object.defineProperty(window,key,{
    enumerable:false,  // const是不会挂载 不能枚举的
    configurable:false,
    get:function(){
      return value
    },
    set:function(data){
      if(data===value){
        return value
      }else{
        throw new TypeError('can not change const')
      }
    }
  })
}

_const2('bc',13)

bc= 14
// TypeError: can not change const