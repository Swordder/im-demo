import { useTransition } from '@/stores/transition'
export function setupGuards() {
  const changeTransition = (direction) => {
    const transition = useTransition()
    if (direction == 'left') {
      transition.changeChildTransitionName('slide-left-child')
      transition.changeTransitionName('slide-left')
    } else {
      transition.changeChildTransitionName('slide-right-child')
      transition.changeTransitionName('slide-right')
    }
  }
  return {
    changeTransition,
  }
}
