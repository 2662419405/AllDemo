<template>
  <div class="todoapp">
    <div class="header">
      <h1>todos</h1>
      <input @keyup.enter="saveListItem" v-model="val" type="text" placeholder="请输入内容" />
    </div>
    <template v-if="list.length!==0">
      <div class="main">
        <input class="toggle-all" id="box" type="checkbox" />
        <label @click="allSelectedActive" :class="{comLabel:isCompleted===0}" for="box"></label>
        <ul>
          <template>
            <mvc-item
              @completedChange="completedChange"
              @destoryListIitem="destoryListIitem"
              @handlerSaveDoubleClick="handlerSaveDoubleClick"
              :data="item"
              :index="index"
              v-for="(item,index) in filterTodos"
              :key="index"
            />
          </template>
        </ul>
      </div>
      <mvc-footer
        @clearCompleted="clearCompleted"
        @setUpdateRouter="setUpdateRouter"
        :listLen="list.length"
        :completedLen="isCompleted"
        :sel="sel"
      />
    </template>
  </div>
</template>

<script>
import mvcFooterVue from "./mvcFooter.vue";
import mvcItemVue from "./mvcItem.vue";
export default {
  components: {
    "mvc-footer": mvcFooterVue,
    "mvc-item": mvcItemVue
  },
  data() {
    return {
      list: window.localStorage.getItem("list")
        ? JSON.parse(window.localStorage.getItem("list"))
        : [],
      val: "",
      sel: window.location.hash.length === 0 ? "#/" : window.location.hash
    };
  },
  watch: {
    list: {
      deep: true,
      handler: function(newState) {
        window.localStorage.setItem("list", JSON.stringify(newState));
      }
    }
  },
  computed: {
    isCompleted() {
      let count = 0;
      this.list.filter(v => {
        return v.completed === false && count++;
      });
      return count;
    },
    filterTodos() {
      if (this.sel === "#/Active") {
        return this.list.filter(v => {
          return !v.completed;
        });
      }
      if (this.sel === "#/Completed") {
        return this.list.filter(v => {
          return v.completed;
        });
      } else {
        return this.list;
      }
    }
  },
  methods: {
    saveListItem() {
      if (this.val.length === 0) return false;
      let obj = {
        title: this.val,
        id: new Date().getTime(),
        completed: false
      };
      this.list.push(obj);
      this.val = "";
    },
    handlerSaveDoubleClick(index, val) {
      if (val.length === 0) {
        this.destoryListIitem(index);
        return false;
      }
      this.list[index].title = val;
    },
    destoryListIitem(index) {
      this.list.splice(index, 1);
    },
    completedChange(index) {
      this.list[index].completed = !this.list[index].completed;
    },
    clearCompleted() {
      let arr = this.list.filter(v => {
        return v.completed === false;
      });
      this.list = arr;
    },
    setUpdateRouter(val) {
      this.sel = val;
    },
    allSelectedActive() {
      if (this.isCompleted === 0) {
        this.list.filter(v => {
          return (v.completed = false);
        });
      } else {
        this.list.filter(v => {
          return (v.completed = true);
        });
      }
    }
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>