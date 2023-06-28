<template>
  <div class="list">
    <Cell
      v-for="(item, index) in listData"
      :key="index"
      v-bind="item"
      @click="handleDialog(item)"
    ></Cell>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Cell from './components/cell.vue'
import { useRouter } from 'vue-router'
const listData = ref([{ name: '汽车街前端组', time: '2023/06/18', currentMsg: 'hhhhhhh' }])

const router = useRouter()
const handleDialog = (item) => {
  console.log(item)

  router.push(`/chatbox?title=${item.name}`)
}
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  background: #fff;
}
</style>
