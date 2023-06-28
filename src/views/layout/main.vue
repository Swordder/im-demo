<template>
  <div class="wrapper">
    <nav-bar></nav-bar>

    <router-view v-slot="{ Component }" class="router-view">
      <transition :name="transition.childTransitionName">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <van-tabbar v-model="active" route active-color="#27C655">
      <van-tabbar-item icon="chat-o" :badge="badge" replace to="/home"> 微信 </van-tabbar-item>
      <van-tabbar-item icon="friends-o" replace to="/addressBook">通讯录</van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/about">发现</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useTransition } from '@/stores/transition'
import NavBar from '@/components/navbar/index.vue'

const transition = useTransition()

const active = ref('')
const badge = ref<number>()

watch(active, (newV, oldV) => {
  if (newV > oldV) {
    transition.changeTransitionDirection('right')
  } else {
    transition.changeTransitionDirection('left')
  }
})
</script>
<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #f2f2f2;
  overflow-x: hidden;
  position: relative;
}
.router-view {
  height: calc(100vh - 96px);
  overflow: auto;
}
</style>
