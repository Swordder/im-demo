<template>
  <div>
    <van-nav-bar
      :title="$route.meta.title"
      :left-arrow="$route.meta.leftArrow"
      class="van-nav-bar"
      @click="handleBack"
    ></van-nav-bar>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useTransition } from '@/stores/transition'
const transition = useTransition()
const router = useRouter()
const handleBack = () => {
  transition.changeTransitionDirection('left')
  router.go(-1)
}
</script>

<style lang="scss" scoped>
:root {
  --van-nav-bar-icon-color: #333;
}
.van-nav-bar {
  background: #fff;
}
</style>
