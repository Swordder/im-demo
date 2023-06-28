<template>
  <div>
    <img v-if="!src" src="@/assets/images/avatar.jpeg" :alt="alt" class="avatar" />
    <img v-else :src="src" :alt="alt" class="avatar" />
  </div>
</template>
<script lang="ts" setup>
import { computed, withDefaults } from 'vue'
const props = withDefaults(
  defineProps<{
    size?: number
    shape?: 'circle' | 'square'
    src?: string
    alt?: string
    fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
    radius?: string
  }>(),
  {
    size: 40,
    shape: 'square',
    src: '',
    radius: '5px',
    alt: '头像',
    fit: 'fill',
  }
)
// const computedSrc = computed(() => {

// })
const computedShape = computed(() => {
  return props.radius ? props.radius : props.shape == 'circle' ? '50%' : '0%'
})
</script>
<style lang="scss" scoped>
.avatar {
  // width: v-bind(size + 'px');
  width: v-bind("size + 'px'");
  border-radius: v-bind(computedShape);
  object-fit: v-bind(fit);
}
</style>
