const wait = function(){
  const promise = new Promise((resolve,reject)=>{
    const task = function(){
      console.log("执行成功")
      resolve()
    }
  })
  return promise
}