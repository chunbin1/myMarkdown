var func1 = function (next) {
  console.log('func1 begin');
  next();
  console.log('func1 end');
};

var func2 = function (next) {
  console.log('func2 begin');
  next();
  console.log('func2 end');
};

var func3 = function (next) {
  console.log('func3 begin');
  next();
  console.log('func3 end');
};

class APP{
  constructor(){
    // 用来存放函数
    this.stack = []
    this.cur = 0
    this.next = this.next.bind(this) // 调用过程中this的指向会改变
  }
  use(fn) {
    this.stack.push(fn)
  }
  run(){
    if(this.stack[0]!==undefined){
      this.stack[0](this.next)
    }
  }
  next(){
    if(this.stack[this.cur+1]!==undefined){
      this.cur+=1
      this.stack[this.cur](this.next)
    }
  }
}

const a = new APP();
a.use(func1);
a.use(func2);
a.use(func3);
a.run();
