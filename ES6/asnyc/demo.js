async function getTitle(url) {
  let response = await fetch(url);
  let html = await response.text();
  return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}
getTitle('https://tc39.github.io/ecma262/').then(console.log)

// async function f() {
//   return 'hello world'
// }

// f().then(v=>{console.log(v);})
// async函数返回一个 Promise 对象。

// async函数内部return语句返回的值，会成为then方法回调函数的参数。

// async function f() {
//   throw new Error('出错了');
// }

// f().then(
//   v => console.log(v),
//   e => console.log(e)
// )

// function timeout(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function asyncPrint(value, ms) {
//   await timeout(ms);
//   console.log("1");
//   console.log(value);
// }

// asyncPrint('hello world', 50);

// 上面代码指定 50 毫秒以后，输出hello world。

// 由于async函数返回的是 Promise 对象，可以作为await命令的参数。所以，上面的例子也可以写成下面的形式。

// async function timeout2(ms) {
//   await new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function asyncPrint2(value, ms) {
//   await timeout2(ms);
//   console.log("2");
//   console.log(value);
// }

// asyncPrint2('hello world', 50);