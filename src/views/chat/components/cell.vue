<template>
  <div class="cell">
    <Avatar></Avatar>
    <div class="cell-info">
      <div class="cell-first-row">
        <span>{{ name }}</span>
        <span class="cell-time">{{ time }}</span>
      </div>
      <div class="currentMsg">{{ currentMsg }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  name: string
  time: string
  currentMsg: string
}>()
console.log('Cell组件 => ', props)
</script>

<style lang="scss" scoped>
.cell {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  font-size: 0.2rem;
  background: #fff;
  padding: 0.2rem 0.3rem;
  align-items: center;
}
.cell-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 0.2rem;
  border-bottom: 1px solid #f2f2f2;
  padding: 0.2rem 0;
}
.cell-first-row {
  display: flex;
  .cell-time {
    margin-left: auto;
  }
}

.currentMsg {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}
</style>
