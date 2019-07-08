const indexArr = [];
let timer;

function excuce(index) {
  const promise = log(index)
  Promise.resolve(promise).then(console.log(index))
  // indexArr.push(index);
  // function run() {
  //   const promiseArr = [];
  //   indexArr.forEach(index => {
  //     const promise = log(index);
  //     console.log(instanceof promise)
  //     promiseArr.push(promise);
  //   });
  //   Promise.all(promiseArr).then(valueArr => {
  //     valueArr.forEach(value => {
  //       console.log(value);
  //     });
  //   });
  // }
  // if (timer) {
  //   clearTimeout(timer);
  // }
  // timer = setTimeout(run, 100);
}

function start() {
  for (let index = 0; index < 5; index++) {
    excuce(index);
  }
}

function sleep(index) {
  const dur = Math.random() * 500;
  return new Promise(resolve => setTimeout(() => resolve(index), dur));
}

function log(index) {
  return sleep(index).then(()=>console.log('id: ',index));
}

start();


// var obj={}
// Object.defineProperty(obj,'a',{
//   get(){
//     return this._a_;
//   },
//   set(val){
//     this._a_ = val*2
//   }
// })

// obj.a = 2
// obj.a 

// var obj = {a:1,b:2}
// Object.defineProperty(obj,'c',{
//   value:12,
//   enumerable:false,
// })
// for(item in obj){
//   console.log(item)
// }