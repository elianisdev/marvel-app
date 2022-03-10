import { createRouter, createWebHistory } from 'vue-router'
import ViewHome from "../views/home/view-home.vue";
import ViewCharacters from "../views/characters/view-characters.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewHome
    },
    {
      path: '/characters',
      name: 'characters',
      component: ViewCharacters
    },
    {
      path: '/comics',
      name: 'comics',
      component: ViewHome
    },
    {
      path: '/stories',
      name: 'stories',
      component: ViewHome
    }
  ]
})

export default router
