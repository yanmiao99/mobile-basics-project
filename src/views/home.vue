<template>
  <div class="home">
    <!-- 切换栏 -->
    <van-tabs v-model:active="tabActive" title-active-color="#0A86F4" border color="#0A86F4" sticky>
      <van-tab title="标签 1">
        <!-- 内容区 -->
        <div class="wrapper">
          <van-cell v-for="item in list" :key="item" :title="item"/>
        </div>
      </van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>

    <!-- 导航栏 -->
    <van-tabbar v-model="tabBarActive">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
const tabActive = $ref(0);
const tabBarActive = $ref(0);
const list = $ref([]);
const getTestData = async () => {
  const baseURL = 'https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf'
  const res = await $request.get(baseURL)

  let childrenList = res.data.data.diseaseh5Shelf.areaTree[0].children

  childrenList.forEach(item => {
    list.push(item.name);
  })

}
getTestData()

</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .wrapper {
    flex: 1;
  }
}
</style>
