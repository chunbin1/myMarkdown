###基础

##### 关键字
**type**
as 把某个值生命为类型 e as MouseEvent 
enum 声明常量 

```typescript
    enum Direction {
      VERTICAL,
      HORIZONTAL,
    }
```



##### React变量


**记录在react项目中使用ts的经验**
解决ts引入less文件和css文件报错
```javascript
declare module '*.css' {
  const content: any;
  export default content;
}
declare module '*.less' {
  const content: any;
  export default content;
}
```

**解决extends后必传字段报错**
原因:二次封装antd组件 想把title变为可选 但是在modal中title
解决:
  通过一个wrap来做中间
```javascript
export interface confirmModal {
  // 传进来的props
  /**
   提示文字
   */
  content?: string;
  /**
   * 默认值为删除
   */
  title?: string | React.ReactNode;
  [name: string]: any;  // 接收所有别的参数
}

export interface wrapProps extends ModalProps {
  // 作为中间层 传递给最终的modal
  /**
   提示文字
   */
  content?: string;
  /**
   * 默认值为删除
   */
  title: string | React.ReactNode;
}

function wrapper(props: confirmModal): wrapProps {
  return { title: '删除', okText: '确定', cancelText: '取消', content: '确认删除吗？', ...props };
}

```

#### tslint

##### 配置

```js
{
  "extends": ["tslint:recommended","tslint-react"],
  "rules": {
    "max-line-length": {
      "options": [
        120
      ]
    },
    "new-parens": true,
    "no-arg": true,
    "no-bitwise": true,
    "no-conditional-assignment": true,
    "no-consecutive-blank-lines": false,
    "ordered-imports": false,
    "no-console":true,
    "no-empty":true,
    "no-unused-variable":true,
    "jsx-no-multiline-js":false,
    "jsx-no-lambda":false,
    "no-shadowed-variable":false,
    "quotemark":[true,"single","jsx-double"]
  },
  "jsRules": {
    "max-line-length": {
      "options": [
        120
      ]
    }
  }
}
```

记得安装tslint-react

##### 解决报错

```typescript
1. interface-name
// wrong
interface Router{...}

// good
interface IRouter{...}

2. array-type
// wrong
routerArr:Array<IRouterArr>

// good
routerArr:IRouterArr[]
```



