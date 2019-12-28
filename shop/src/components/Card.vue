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
      <tr v-for="(item) in shopData" :key="item.id">
        <td>
          
        </td>
        <td>
          {{item.name}}
        </td>
        <td>
          {{item.price}}
        </td>
        <td>

        </td>
        <td>
          
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props:['shopData']
};
</script>

<style>
</style>