<template>
  <div :class="['popover', computedTriangle]">
    {{ text }}
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
const props = withDefaults(
  defineProps<{
    text: string
    backgroundColor?: string
    textColor?: string
    direction?: 'left' | 'right' | 'top' | 'bottom'
  }>(),
  {
    text: '',
    backgroundColor: '#fff',
    textColor: '#000',
    direction: 'left',
  }
)
const computedTriangle = computed(() => {
  if (props.direction == 'right') {
    return 'triangle-right'
  } else if (props.direction == 'top') {
    return 'triangle-top'
  } else if (props.direction == 'bottom') {
    return 'triangle-bottom'
  } else {
    return 'triangle-left'
  }
})
</script>
<style lang="scss" scoped>
.popover {
  position: relative;
  background: v-bind(backgroundColor);
  color: v-bind(textColor);
  padding: 0.16rem;
  font-size: 0.3rem;
  font-weight: 500;
  border-radius: 4px;
}
.triangle-left::after {
  position: absolute;
  content: '';
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-right: 6px solid v-bind(backgroundColor);
  right: 100%;
}
.triangle-right::after {
  position: absolute;
  content: '';
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-left: 6px solid v-bind(backgroundColor);
  left: 100%;
}
.popover::after .triangle-top {
  position: absolute;
  content: '';
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-bottom: 6px solid v-bind(backgroundColor);
  bottom: 100%;
}
.popover::after .triangle-bottom {
  position: absolute;
  content: '';
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 6px solid v-bind(backgroundColor);
  top: 100%;
}
</style>
