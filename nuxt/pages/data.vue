<template>
  <div>
      获取数据
      <br />
      <ul>
        <li v-for="(item,index) in usersData" :key="index">
            {{item}}
        </li>
      </ul>
  </div>
</template>

<script>
function getUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(['java','php','react'])
        },1000)
    })
}
export default {
  // 这个生命周期的执行时间会比所以的vue生命周期更早
  async asyncData() {
    //  使用await
    const usersData = await getUserData();
    // 这里面的数据会和data中的数据进行合并
    return {
      usersData
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>
