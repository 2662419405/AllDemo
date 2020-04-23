<template>
  <div class="footer">
    <span class="todo-count">
      <strong>{{completedLen}}</strong>
      <span>items left</span>
    </span>
    <ul class="filters">
      <li @click="setUpdateRouter('#/')" :class="{selected:sel==='#/'}">
        <a href="#/">All</a>
      </li>
      <span></span>
      <li @click="setUpdateRouter('#/Active')" :class="{selected:sel==='#/Active'}">
        <a href="#/Active">Active</a>
      </li>
      <span></span>
      <li @click="setUpdateRouter('#/Completed')" :class="{selected:sel==='#/Completed'}">
        <a href="#/Completed">Completed</a>
      </li>
    </ul>
    <button
      @click="clearCompleted"
      class="clear-completed"
      v-show="listLen!==completedLen"
    >Clear completed</button>
  </div>
</template>

<script>
export default {
  props: {
    listLen: Number,
    completedLen: Number,
    sel: String
  },
  methods: {
    clearCompleted() {
      this.$emit("clearCompleted");
    },
    setUpdateRouter(val) {
      this.$emit("setUpdateRouter", val);
    }
  }
};
</script>

<style>
</style>