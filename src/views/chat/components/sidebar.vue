<template>
  <div class="sidebar">
    <Avatar :size="40" radius="5px"></Avatar>
    <div v-for="(item, index) in menuList" :key="index">
      <van-icon></van-icon>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Avatar from '@/components/avatar/index.vue'
import { ref } from 'vue'
const menuList = ref([])
</script>

<style lang="scss" scoped>
.sidebar {
  width: 10%;
  height: 100%;
  box-sizing: border-box;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
}
</style>
