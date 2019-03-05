function ajax(opts){
  var url = opts.url
  var type = opts.type || 'GET'
  var dataType = opts.dataType || 'json'
  var onsuccess = opts.onsuccess || function(){}
  var onerror = opts.onerror || function(){}
  var data = opts.data || {}

  var dataStr = []
  for(var key in data){
      dataStr.push(key + '=' + data[key])
  }
  dataStr = dataStr.join('&')

  if(type === 'GET'){
      url += '?' + dataStr
  }

  var xhr = new XMLHttpRequest()
  xhr.open(type, url, true)
  xhr.onload = function(){
      if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
          //成功了
          if(dataType === 'json'){
              onsuccess( JSON.parse(xhr.responseText))
          }else{
              onsuccess( xhr.responseText)
          }
      } else {
          onerror()
      }
  }
  xhr.onerror = onerror
  if(type === 'POST'){
      xhr.send(dataStr)
  }else{
      xhr.send()
  }
}

ajax({
  url: 'https://api.jirengu.com/weather.php',
  data: {
      city: '北京'
  },
  onsuccess: function(ret){
      console.log(ret)
  },
  onerror: function(){
      console.log('服务器异常')
  }
})