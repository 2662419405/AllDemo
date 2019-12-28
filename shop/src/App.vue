<template>
  <div id="app">
    <h2>{{title}}</h2>
    <hr>
    <div>
      <h2>
        添加课程
      </h2>
      <div>
        <label>课程名称</label>
        <input type="text" v-model="addCourse.name"/>
      </div>
      <div>
        <label>课程价格</label>
        <input type="text" v-model="addCourse.price"/>
      </div>
      <div>
        <button @click="addCourseMethod">添加商品</button>
      </div>
    </div>
    <hr>
    <div>
      <h2>课程列表</h2>
      <table>
        <tr>
          <th>课程名称</th>
          <th>课程价格</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item,index) in currentList" :key="item.id">
          <td>
            {{item.name}}
          </td>
          <td>
            {{item.price}}
          </td>
          <td>
            <input @click="addCourseCard(index)" type="button" value="添加此商品" />
          </td>
        </tr>
      </table>
    </div>
    <card :shopData="shopData" @removeItem="remove"></card>
  </div>
</template>

<script>
import Card from './components/Card';
import './index.scss'
export default {
  components:{
    Card
  },
  methods: {
    remove(index){
      this.shopData.splice(index,1)
    },
    addCourseMethod(){
      this.currentList.push(this.addCourse)
      this.addCourse = {}
    },
    addCourseCard(index){
      let item = this.currentList[index]
      let hasCourse = this.shopData.find((v)=>v.id == item.id)
      if(hasCourse){
        hasCourse.num += 1
      }else{
        this.shopData.push({
          ...item,
          num: 1,
          isActive: true
        })
      }
    }
  },
  data() {
    return {
      title:'这里是购物车',
      shopData:[],
      addCourse:{
        name:'',
        price:''
      },
      currentList:[
        {
          id:'1',
          name:'全栈架构师',
          price:9999
        },
        {
          id:'2',
          name:'python人工智能',
          price:8888
        }
      ]
    }
  },
}
</script>

<style>
td,th{
  padding: 10px;
  border: 1px solid #000;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>