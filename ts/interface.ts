// 接口类型,常用用于定义类或者对象
interface Person {
  readonly id: number; // 代表只允许读取,不能修改
  name: string;
  age?: number; // ?代表可以有也可以没有
}

let p: Person = {
  id: 10010,
  name: "sunhang",
  age: 20
};

// p.id = 10086
