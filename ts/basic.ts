// 常用的类型
let fullName: string = "sun";
let ageSex: number = 20;
let sex: boolean = true;
let collection: object = { name: 21 };
let city: null = null;
let hooby: undefined = undefined;
// null和undefined是所有类型的基类, 定义了数字类型的值可以是undefined也可以是null
let money: string = undefined;
// 可以设置为任意类型
let small: any = true;
// 规定可以为多种类型的值
const inter: number | string = "123";
// 设置数组类型
const hostBillter: string[] = ["1", "123"];
// 设置数组的每一项的类型
const userInfo: [string, number] = ["123", 1];
