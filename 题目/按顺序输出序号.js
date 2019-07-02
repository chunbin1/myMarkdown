const indexArr = [];
let timer;

function excuce(index) {
  indexArr.push(index);
  function run() {
    const promiseArr = [];
    indexArr.forEach(index => {
      const promise = log(index);
      promiseArr.push(promise);
    });
    Promise.all(promiseArr).then(valueArr => {
      valueArr.forEach(value => {
        console.log(value);
      });
    });
  }
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(run, 0); // 程序执行完才执行任务队列,所以可以设置为0
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
  return sleep(index);
}

start();

