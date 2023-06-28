import { defineStore } from 'pinia'
export const useTransition = defineStore('history', {
  state: () => ({
    transitionName: 'slide-left',
    childTransitionName: 'slide-left-child',
    transitionDirection: 'right',
  }),
  actions: {
    changeTransitionName(name) {
      this.transitionName = name
    },
    changeChildTransitionName(name) {
      this.childTransitionName = name
    },
    changeTransitionDirection(direction) {
      this.transitionDirection = direction
    },
  },
})
