<template>
  <div>
      我是后台1
      {{$route.params.id}}
      {{user}}
  </div>
</template>

<script>
export default {
  async asyncData({ params, error, $axios }) {
    // 注意返回的就是响应数据
    const data = await $axios.$get(`/api/users/${params.id}`);
    if (data.ok) {
      return { user: data.user };
    }
    error({ statusCode: 400, message: "id有误，查询失败" });
  }
};
</script>

<style lang='stylus' scoped>

</style>
