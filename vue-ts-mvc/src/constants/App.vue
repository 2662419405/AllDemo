<template>
  <todo-mvc-list />
</template>

<script lang="ts">
import todoMvcList from "../components/todoMvcList.vue";
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    "todo-mvc-list": todoMvcList
  }
})
export default class App extends Vue {}
</script>

<style>
</style>