<template>
  <div class="app">
    <Navbar />
    <ContentView></ContentView>
    <RequestLoding></RequestLoding>
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import('@/components/Navbar'),
    ContentView: () => import('@/components/ContentView'),
    RequestLoding: () => import('@/components/RequestLoading')
  }
}
</script>

<style lang="scss" scoped>
.app{

}
</style>
