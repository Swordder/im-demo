<template>
  <div v-if="!isSelf" class="msg">
    <Avatar></Avatar>
    <div class="ml-4 mr-auto">
      <div class="name text-left">{{ name }}</div>
      <Popover :text="msg" background-color="#f2f2f2" direction="left"></Popover>
    </div>
  </div>
  <div v-else class="msg">
    <div class="mr-4 ml-auto">
      <div class="name text-right">{{ name }}</div>
      <Popover :text="msg" background-color="#27C655" direction="right"></Popover>
    </div>
    <Avatar></Avatar>
  </div>
</template>
<script lang="ts" setup>
import Avatar from '@/components/avatar/index.vue'
import Popover from '@/components/popover/index.vue'
const props = defineProps<{
  isSelf?: boolean
  name?: string
  msg: string
}>()
console.log('对话信息组件 => ', props)
</script>

<style lang="scss" scoped>
.msg {
  width: 100%;
  box-sizing: border-box;
  padding: 0.2rem 0.3rem;
  display: flex;
}
.ml-auto {
  margin-left: auto;
}

.ml-4 {
  margin-left: 0.4rem;
}
.mr-4 {
  margin-right: 0.4rem;
}
.mr-auto {
  margin-right: auto;
}
.name {
  font-size: 0.2rem;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.msg-text {
  font-size: 0.4rem;
}
</style>
