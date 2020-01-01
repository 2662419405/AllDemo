## React Hooks学习

React 是主流的前端框架，v16.8 版本引入了全新的 API，叫做 React Hooks，颠覆了以前的用法。

### 为何要用到hooks?

我们平常开发组件都是通过类去开发,每个组件的代码复杂度过高

### 组件的最佳编写方式应该是函数而不是类

但是函数编写组件又存在问题,必须是纯函数(纯函数就是基于一定的输入,会给出固定的输出,而reducer就是应该标准的纯函数),那么就不能去包含状态和生命周期等等,所以就无法取代类的存在

### Hook的意义是钩子

组件尽量的去写成纯函数,如果需要使用外部功能作用等等,就用钩子把外部代码钩进来,React Hooks就是哪些钩子
所有的钩子都是为函数引入外部功能，所以 React 约定，钩子一律使用use前缀命名，便于识别。你要使用 xxx 功能，钩子就命名为 usexxx。

四个最常用的React Hooks钩子
```js
useState()
useContext()
useReducer()
useEffect()
```

#### 状态钩子

useState() 接受状态的初始值,该函数会返回应该数组,数组的第一个成员是一个变量,第二个成员是一个函数,用来更新状态,约定是`set`前缀加上函数名

```js
import React, { useState } from 'react'

export default function Hooks(){

    const [buttonText,sethandlerClick] = useState('click me!')

    function handlerClick(){
        return sethandlerClick('感谢')
    }

    return (
        <button
            onClick = {handlerClick}
        >
            {buttonText}
        </button>
    )
}
```

#### 共享状态钩子

如果需要在组件之间共享状态,可以使用`useContext()`

现在有两个组件,需要他们状态共享
```js
<div className="App">
  <Navbar/>
  <Messages/>
</div>
```




