function timeout(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms, 'done');
    });
  }
  
  timeout(1000).then((value) => {
    console.log(value);
  },
  (error)=>{
      console.log('error');
  }
);


// then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以“Resolved”最后输出。
let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
  });
  
  promise.then(function() {
    console.log('Resolved.');
  });
  
  console.log('Hi!');

  var p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 3000)
  })
  
  var p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000)
  })
  
  p2
    .then(result => console.log(result))
    .catch(error => console.log(error))
  // Error: fail