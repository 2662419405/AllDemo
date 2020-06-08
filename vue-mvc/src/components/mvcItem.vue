<template>
  <li :class="{ editing:visiable,listMvc: true, competed:data.completed }">
    <div class="view">
      <input @click="completedChange" type="checkbox" class="toggle" />
      <label @dblclick="doubleClickLabel">{{data.title}}</label>
      <button @click="destoryListIitem" class="destroy"></button>
    </div>
    <input
      @blur="handlerSaveDoubleClick(index)"
      @keydown.enter="handlerSaveDoubleClick(index)"
      :class="{ edit: visiable }"
      v-model="valName"
      type="text"
      v-todo-focus
    />
  </li>
</template>

<script>
export default {
  props: ["data", "index"],
  data() {
    return {
      valName: this.$props.data.title,
      visiable: false
    };
  },
  methods: {
    doubleClickLabel() {
      this.visiable = true;
    },
    handlerSaveDoubleClick(index) {
      this.$emit("handlerSaveDoubleClick", index, this.valName);
      this.visiable = false;
    },
    destoryListIitem() {
      this.$emit("destoryListIitem", this.$props.index);
    },
    completedChange() {
      this.$emit("completedChange", this.$props.index);
    }
  },
  directives: {
    "todo-focus": function(el) {
      el.focus();
    }
  }
};
</script>

<style>
</style>