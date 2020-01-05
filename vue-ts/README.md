# 类型注解

ts的基本使用
```js
// 类型注解 必须是小写
let title: string;
let name = 'xx'; //类型推断

// 数组类型(多种类型的约束)
let names: ( string | number )[];
// 第二种类型的数组约束
let arr: Array<string>
names = ['tom',1]
// names[0] = {} 错误的

// 任意类型
let list: any[] = [1,true] //后面是赋值

// 函数类型  约定了返回的类型和传递的参数类型
function greeting(person: string):string{
  return 'hello'
}

// greeting(1) 传递参数类型错误
greeting('some')

// void类型 空返回值
function warn():void{
  alert('这是一个警告!')
}

// 内置类型: string,number,boolean,void,any

// 装饰器注解 
@Component
export default class Hello extends Vue{
    @Prop() private msg!: string;  //  属性msg是必选项,字符串类型
    @Prop() private name?: string = '默认值';  //  属性msg是可选项,字符串类型
    // 等价于 => 
    // {
    //   type:String,
    //   required: true
    // }
}
```

## 装饰器模式

把内容二次封装,比如说给一个类,他就返回给你一个函数,给一个cpu,返回一个手机等等