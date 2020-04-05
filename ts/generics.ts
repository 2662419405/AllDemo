// 泛型就是一个占位符,通过传入的参数,动态的设置数据的类型
function getCode<T>(number: T): T {
  return number;
}

const result = getCode("123");

// 规定泛型所必须拥有的属性
interface Generics {
  length: number;
}

function getResult<T extends Generics>(num: T): T {
  console.log(num.length);
  return num;
}

const sum = getResult("123");

// 泛型在类上面的应用
class Queue<T> {
  private data = [];
  push(item: T) {
    this.data.push(item);
  }
  pop() {
    this.data.shift();
  }
}

const queue = new Queue<number>();
queue.push(1);
// queue.push("123");

// 泛型指定接口
interface defaultData<T, U> {
  name: T;
  age: U;
}

let sun: defaultData<string, number> = { name: "sh", age: 2 };
