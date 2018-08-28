function hello() {
  console.log("ilovehwwwwww");
}

function WrapperHello(fn) {
  return function() {
    console.log("before");
    fn();
    console.log("after say hello");
  };
}
hello = WrapperHello(hello);
hello();

// 反向继承，可以修改生命周期
function WrapperHello(Comp) {
  class WrapComp extends Comp {
    componentDidMount() {
      console.log("高阶组件新增的生命周期，加载完成");
    }
    render() {
      return <Comp />;
    }
  }

  属性代理;
  class WrapComp extends Component {
    render() {
      return (
        <div>
          <p>这是HOC高阶组件特有的元素</p>
          <Comp name="text" {...this.props} />
        </div>
      );
    }
  }
  return WrapComp;
}

@WrapperHello
class Hello extends Component {
  render() {
    return <h2>cblee love React</h2>;
  }
}

Hello = WrapperHello(Hello);
