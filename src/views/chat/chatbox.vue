<template>
  <div class="wrapper">
    <NavBar></NavBar>
    <div class="msg-box">
      <Msg v-for="(item, index) in msgData" :key="index" v-bind="item"></Msg>
    </div>
    <InputBox></InputBox>
  </div>
</template>
<script lang="ts">
export default {
  beforeRouteEnter(to, from, next) {
    const title = to
    console.log('title', title)
    to.meta.title = to.query.title
    next()
  },
  inheritAttrs: false,
}
</script>
<script lang="ts" setup>
import Msg from './components/msg.vue'
import NavBar from '@/components/navbar/index.vue'
import InputBox from './components/inputbox.vue'
import { ref } from 'vue'
const msgData = ref([
  { isSelf: false, name: '李四', msg: 'ccccccc' },
  { isSelf: true, name: '章三', msg: 'hhhhhhhhh' },
])
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  height: 100%;
}
.msg-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: calc(100% - 96px);
}
</style>
