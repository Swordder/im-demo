<template>
  <router-view v-slot="{ Component }">
    <transition :name="transition.transitionName">
      <keep-alive max="10">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>
<script lang="ts" setup>
import { useTransition } from '@/stores/transition'
const transition = useTransition()
</script>
<style lang="scss">
@import '@/assets/styles/index.scss';
@import '@/assets/fonts/stylesheet.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
