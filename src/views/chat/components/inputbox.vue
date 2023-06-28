<template>
  <div class="input-box">
    <VanIcon class-prefix="iconfont" name="speaking" size="22"></VanIcon>
    <input v-model="text" type="text" class="input" />
    <VanIcon class-prefix="iconfont" name="emotion" size="22"></VanIcon>
    <VanIcon class-prefix="iconfont" name="add" size="22"></VanIcon>
    <div></div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Icon as VanIcon } from 'vant'
const text = ref('')
</script>

<style lang="scss" scoped>
.input-box {
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;
  background: #f2f3f5;
}
.input {
  border: none;
}
</style>
