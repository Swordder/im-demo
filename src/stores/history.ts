import { defineStore } from 'pinia'
import { RouteLocationNormalizedLoaded } from 'vue-router'
export const useHistory = defineStore('history', {
  state: () => ({
    record: [
      {
        name: 'NavbarLayout',
      } as RouteLocationNormalizedLoaded,
    ],
  }),
  actions: {
    addRecord(route: RouteLocationNormalizedLoaded) {
      this.record.push(route)
    },
    removeRecord() {
      this.record.length -= 1
    },
  },
})
