const History = {
    _history: [], // 历史记录堆栈
    install(Vue) {
      // vue插件要求的安装方法
      Object.defineProperty(Vue.prototype, "$routerHistory", {
        get() {
          return History;
        }
      });
    },
    push(path) {
      // 入栈
      this._current += 1;
      this._history.push(path);
    },
    pop() {
      // 出栈
      this._current -= 1;
      return this._history.pop();
    },
    canBack() {
      return this._history.length > 1;
    }
  };
  export default History;