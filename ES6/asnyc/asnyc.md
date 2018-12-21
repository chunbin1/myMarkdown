重点： async函数返回的 Promise 对象
由此引出一些特性：
  - .then()使用then来指定回调
```
 f().then(
  v => console.log(v),
  e => console.log(e)
 )
```
 - 使得多个异步同时触发
 ```
let foo = await getFoo();
let bar = await getBar();  // 会等第一个触发后才触发

改写为同时触发：
 // 写法一
let [foo, bar] = await Promise.all([getFoo(), getBar()]);

// 写法二
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;

 ```
 - 多个请求同时触发时的写法
 ```
function dbFuc(db) { //这里不需要 async
  let docs = [{}, {}, {}];

  // 可能得到错误结果
  docs.forEach(async function (doc) {
    await db.post(doc);
  });
  }
 ```
 上面代码可能不会正常工作，原因是这时三个db.post操作将是并发执行，也就是同时执行，而不是继发执行。正确的写法是采用for循环。
 改写：
 ```
async function dbFuc(db) { 
  let docs = [{}, {}, {}];

  for(let doc of docs){
    await db.post(doc)
  }
  }
 ```
使用Promise.all()
```
async function dbFuc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));

  let results = await Promise.all(promises);
  console.log(results);
}
```
或者：
```

async function dbFuc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));

  let results = [];
  for (let promise of promises) {
    results.push(await promise);
  }
  console.log(results);
}
```

必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。