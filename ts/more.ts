// 类型别名
type DataType = Number;

const num: DataType = 2;
// 类型别名 作用在函数上
type PlusType = (x: number, y: number) => number;

function sum(x: number, y: number): number {
  return x + y;
}
const result: PlusType = sum;

// 类型断言 告诉浏览器 我知道他是什么类型,不需要你去提示
function getLength(input: string, value: number): number {
  //   const str = input as String;
  //   if (str.length) {
  //     return str.length;
  //   } else {
  //     const sum = value as Number;
  //     return sum.toString().length;
  //   }
  if ((<string>input).length) {
    return input.length;
  } else {
    return input.toString().length;
  }
}
