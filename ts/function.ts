// 函数声明的写法
function add(x: number, y: number, h?: number, z: number = 20): number {
  if (typeof h === "number") {
    return x + y + h + z;
  }
  return x + y;
}

add(2, 3, 10);

// 函数表达式
const del = function(x: number, y: number, h?: number, z: number = 20): number {
  if (typeof h === "number") {
    return x + y + h + z;
  }
  return x + y;
};

const del2: (x: number, y: number, h?: number) => number = del;
