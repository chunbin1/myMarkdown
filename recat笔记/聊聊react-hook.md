### react hook
初学react-hook时候写过一个小demo
```
function useOutsideClick(ref,fnc){
  useEffect(()=>{
    const handleClickOutside = (e) => { 
    if(e.target!==ref.current && !ref.current.contains(e.target)){fnc()} }
      window.addEventListener('click' ,handleClickOutside)
      return () => {
        window.removeEventListener('click', handleClickOutside)
      }
  }
  )
}
```
用意是在点击外部时候触发事件，组件卸载的时候清除这个事件监听
刚好最近有这个需求，想起来拿出来用，结果发现很多问题,现在我们就来修复一下

从一个例子开始：
```
function useOutsideClick(ref, fnc) {
  useEffect(() => {
    console.log("要对依赖诚实哦");
    const handleClickOutside = e => {
      if (e.target !== ref.current) {
        fnc();
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      console.log('触发下一effect前执行')
      window.removeEventListener("click", handleClickOutside);
    };
  });
}

function Counter(props) {
  const { setCount, count } = props;
  console.log('counter')
  return <div onClick={()=>setCount(count + 1)}>{count}</div>;
}

function App() {
  const appRef = useRef(null);
  const [count, setCount] = useState(0);
  useOutsideClick(appRef, () => {
    console.log("click");
  });
  return (
    <>
      <div
        ref={appRef}
        style={{ height: 200, width: 200, backgroundColor: "yellow" }}
      />
      <div>
        <Counter count={count} setCount={setCount} />
      </div>
    </>
  );
}

```
如上代码，每次我点击Counter 重新setCount的时候，会引起app的重新渲染，
现象：
- 会打印“要对依赖诚实哦”
- 会打印“触发下一次effects时候执行"
问题: 每一次点击counter 会重新调用一次 useEffect，重新清除上一次的监听事件，并产生新的监听事件，这无疑是对性能的消耗
解决: 
  1. 依赖诚实
    useEffect会在组件渲染完后触发 如果依赖改变触发 而明显useOutsideClick依赖ref和fnc
```
  function useOutsideClick(ref, fnc) {
  useEffect(() => {
    ...
  },[ref,fnc]);
}
```
  2. useCallback
    demo中还有一个使用的问题，我们传给seOutsideClick的fnc是一个匿名函数 这样每次重新渲染会新声明一个函数，导致fnc变化，根据依赖 useEffect还是会重新运行，如果是用类写的组件，我们一般使用this.xxx来传递回调给组件。而在函数组件中，这里我们使用useCallback来达到同样的效果
```
  const consoleClick = useCallback(()=>{
    console.log("click");    
  },[])
  useOutsideClick(appRef, ConsoleClick);
```

