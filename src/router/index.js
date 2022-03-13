import { createRouter, createWebHistory } from 'vue-router'
import ViewHome from "../views/home/ViewHome.vue";
import ViewCharacters from "../views/characters/ViewCharacters.vue";
import ViewComics  from "../views/comics/ViewComics.vue";
import ViewStories from "../views/stories/ViewStories.vue";
import ViewDetailCharacters from "../views/characters/ViewDetailCharacters.vue";

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
      path: '/characters/:id',
      name: 'detail-characters',
      component: ViewDetailCharacters
    },
    {
      path: '/comics',
      name: 'comics',
      component: ViewComics
    },
    {
      path: '/comics/:id',
      name: 'detail-comics',
      // component: ViewDetailCharacters
    },
    {
      path: '/stories',
      name: 'stories',
      component: ViewStories
    },
    {
      path: '/stories/:id',
      name: 'detail-stories',
      // component: ViewDetailCharacters
    },
  ]
})

export default router
