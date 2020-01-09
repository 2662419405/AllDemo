function* showName(){
    var a = yield "第一次返回的值";
    console.log(a);
    var b = yield "第二次返回的值";
    console.log(b)
    var c = yield "最后一次返回";
    console.log(c)
}

const it = showName();
console.log(it.next());
console.log(it.next("传递给a"));
console.log(it.next("传递给b"));

// 猜测一下控制台的输出结果
// { value:"第一次返回的值", done: false }
// "传递给a"
// { value:"第二次返回的值", done: false }
// "传递给b"
// { value:"最后一次返回", done: false }
// "undefined"