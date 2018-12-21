// function* gen(x){
//     var y = yield x + 2;
//     console.log(y);
    
//     return y;
//   }
  
//   var g = gen(1);

  
//   g.next() // { value: 3, done: false }
// //   console.log(g);
//   //g.next(2) // { value: 2, done: true }

function* gen(x){
    try {
      var y = yield x + 2;
    } catch (e){
      console.log(e);
    }
    return y;
  }     
  
  var g = gen(1);
  g.next();
  g.throw('出错了');
  // 出错了