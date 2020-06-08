<template>
  <div>
    用户列表
    <p @click="increment">计数: {{counter}}</p>
    <p>
      <input type="text" placeholder="添加用户" @keyup.enter="add($event.target.value)" />
    </p>
    <ul>
      <li v-for="user in list" :key="user.id">{{user.name}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

function getUsers() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([{ name: "tom", id: 1 }, { name: "jerry", id: 2 }]);
    }, 1500);
  });
}

export default {
  fetch({ store }) {
    // fetch在创建组件前执行填充状态树
    // 提交时注意命名空间
    return getUsers().then(users => store.commit("users/set", users));
  },
  computed: {
    ...mapState(["counter"]),
    ...mapState("users", ["list"])
  },
  methods: {
    ...mapMutations(["increment"]),
    ...mapMutations("users", ["add"])
  }
};
</script>

<style scoped>
</style>