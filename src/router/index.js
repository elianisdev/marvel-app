import { createRouter, createWebHistory } from 'vue-router'
import ViewHome from "../views/home/ViewHome.vue";
import ViewCharacters from "../views/characters/ViewCharacters.vue";
import ViewComics  from "../views/comics/ViewComics.vue";
import ViewStories from "../views/stories/ViewStories.vue";

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
      component: ViewComics
    },
    {
      path: '/stories',
      name: 'stories',
      component: ViewStories
    }
  ]
})

export default router
