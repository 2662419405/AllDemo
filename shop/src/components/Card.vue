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
          <input type="checkbox" v-model="item.isActive" />
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
      <tr>
        <td>

        </td>
        <td colspan="2">
          {{isActiveCourse}}/{{allCourseList}}
        </td>
        <td colspan="2">
          {{allPrice}}
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
        if(window.confirm('你确定要删除这个选项吗?')){
          this.$emit('removeItem',index)
        }
      }
      this.shopData[index].num--;
    },
    add(index){
      this.shopData[index].num += 1;
    }
  },
  computed: {
    isActiveCourse(){
      return this.shopData.filter((v)=>{
        return v.isActive===true
      }).length;
    },
    allCourseList(){
      return this.shopData.length
    },
    allPrice(){
      let num = 0;
      this.shopData.forEach(item=>{
          if(item.isActive){
              num+= item.price * item.num
          }
      })
      return num;
    }
  },
};
</script>

<style>
td{
  padding: 20px;
}
</style>