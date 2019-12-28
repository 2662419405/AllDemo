<template>
  <div>
    <h2>购物车内容</h2>
    <table>
      <tr>
        <td>勾选</td>
        <td>课程名称</td>
        <td>课程价格</td>
        <td>数量</td>
        <td>价格</td>
      </tr>
      <tr v-for="(item,index) in shopData" :key="item.id">
        <td>
          {{item.id}}
        </td>
        <td>
          {{item.name}}
        </td>
        <td>
          {{item.price}}
        </td>
        <td>
          <button @click="minus(index)">-</button>
          {{item.num}}
          <button @click="add(index)">+</button>
        </td>
        <td>
          {{item.num*item.price}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props:['shopData'],
  methods: {
    minus(index){
      if(this.shopData[index].num==1){
        return false
      }
      this.shopData[index].num--;
    },
    add(index){
      this.shopData[index].num += 1;
    }
  },
};
</script>

<style>
</style>