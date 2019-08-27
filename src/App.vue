<template>
  <div class="app">
    <navbar />
    <content-view></content-view>
    <!-- <request-loding></request-loding> -->
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import('@/components/Navbar'),
    ContentView: () => import('@/components/ContentView')
    // RequestLoding: () => import('@/components/RequestLoading')
  }
}
</script>

<style lang="scss" scoped>
.app{

}
</style>
