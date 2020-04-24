<template>
  <div class="todoapp">
    <div class="header">
      <input
        @keydown.enter="saveListData"
        type="text"
        v-model="val"
        class="listMvc"
        placeholder="who are you ?"
      />
    </div>
    <div class="main">{{val}}</div>
    <div class="footer"></div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

interface IList {
  title: string;
  completed: boolean;
  id: number;
}

export default class TodoMvcList extends Vue {
  // data
  private val: string = "";
  private list: IList[] = [];

  // methods
  private saveListData(): void | boolean {
    if (this.val.length === 0) {
      return false;
    }
    let obj: IList = {
      title: this.val,
      id: new Date().getTime(),
      completed: false
    };
    this.list.push(obj);
    this.val = "";
  }
}
</script>

<style lang="scss">
@import "./index.scss";
</style>