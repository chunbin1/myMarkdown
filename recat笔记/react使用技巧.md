#### 通用事件处理器
```
handleEvent(event)
{
  switch (event.type)
    case 'click':
      console.log('clicked')
      break
    case 'dblclick':
      console.log('double clicked')
      break
    default:
      console.log('unhandled',event.type)
}
```

#### ref的使用
```
  handleClick(){
    this.element.focus()
  }
```
element从ref来
```
render(){
  return (
    <form>
      <input
        type = "text"
        ref = {element=>{ this.element = element}}
      />
      <button onClick={this.handleClick}>Focus</button>
    </form>
  )
}
```