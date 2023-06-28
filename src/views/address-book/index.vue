<template>
  <van-index-bar class="wrapper" :index-list="computedIndexList" :sticky="false">
    <template v-for="(item, index) in list" :key="index">
      <van-index-anchor :index="item.anchor" />
      <div v-for="it in item.group" :key="it.id" class="addresser">
        <Avatar :size="22"></Avatar>
        <span class="name">{{ it.name }}</span>
      </div>
    </template>
  </van-index-bar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const list = ref([
  { anchor: 'A', group: [{ id: 1, name: '章三' }] },
  { anchor: 'B', group: [{ id: 2, name: '李四' }] },
  { anchor: 'C', group: [{ id: 3, name: '王五' }] },
])
// eslint-disable-next-line no-undef
const computedIndexList = computed(() => {
  return list.value.reduce((pre, cur) => {
    pre.push(cur.anchor)
    return pre
  }, [])
})
</script>

<style lang="scss" scoped>
.wrapper {
  text-align: left;
}
.addresser {
  display: flex;
  width: 100vw;
  box-sizing: border-box;
  padding: 0.2rem;
  align-items: center;
  background: #fff;
  font-size: 0.3rem;
  .name {
    margin-left: 0.2rem;
    margin-right: auto;
  }
}
</style>
