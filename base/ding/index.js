class A {
  constructor() {
    // 存储事件
    this.callbacks = {};
  }
  $on(name, fn) {
    (this.callbacks[name] || (this.callbacks[name] = [])).push(fn);
  }
  $emit(name, arg) {
    let cbs = this.callbacks[name];
    if (cbs) {
      cbs.forEach(v => {
        v.call(this, arg);
      });
    }
  }
  $off(name) {
    this.callbacks[name] = null;
  }
}
var a = new A();
// 绑定事件
a.$on("event", function(arg) {
  console.log("事件1", arg);
});
a.$on("event2", function(arg) {
  console.log("事件2", arg);
});
// 触发事件
a.$emit("event", { name: "xx" });
// 取消事件
a.$off("event");
// 取消之后尝试触发事件
a.$emit("event", { name: "xx" });
