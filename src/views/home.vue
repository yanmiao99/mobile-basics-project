<template>
  <div class="home">
    我是主页
    <van-button type="primary">我是按钮</van-button>
  </div>
</template>

<script setup>


const getTestData = async () => {
  const baseURL = 'https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf'
  const res = await $request.get(baseURL)
  console.log(res);
}
getTestData()

</script>

<style scoped>

</style>
