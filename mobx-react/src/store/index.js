import { observable } from "mobx";

const indexStore = observable({
  todos: ["学习", "吃饭", "睡觉"]
});

export default indexStore;
