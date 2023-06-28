import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import { useTransition } from '@/stores/transition'
import { setupGuards } from './guards'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MainLayout',
    component: () => import(/* webpackChunkName: "home" */ '../views/layout/main.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Chat',
        component: () => import(/* webpackChunkName: "chat" */ '../views/chat/list.vue'),
        meta: { title: '微信' },
      },
      {
        path: 'addressBook',
        name: 'AddressBook',
        component: () => import(/* webpackChunkName: "chat" */ '../views/address-book/index.vue'),
        meta: { title: '通讯录' },
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/index.vue'),
      },
    ],
  },
  {
    path: '/chatbox',
    name: 'Chatbox',
    component: () => import(/* webpackChunkName: "chat" */ '../views/chat/chatbox.vue'),
    meta: { leftArrow: true },
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/about/index.vue'),
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  const transition = useTransition()
  const guards = setupGuards()
  const { changeTransition } = guards
  console.log(transition.transitionDirection, 'direction')

  changeTransition(transition.transitionDirection)
  transition.changeTransitionDirection('right')
  next()
})
export default router
