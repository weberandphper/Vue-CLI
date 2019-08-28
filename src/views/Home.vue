<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    {{ test }}

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { setToken } from '@/utils/auth'

import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created () {
    // 为方便演示 ，这里写死一个token
    setToken('admin')
  },
  computed: {
    ...mapState(['test'])
  }

}
</script>
