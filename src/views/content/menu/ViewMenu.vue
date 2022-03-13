<script setup>
import {ref} from 'vue'

const routes = ref({
  home: {
    name: 'Home',
    route: 'home',
  },
  characters: {
    name: 'Personajes',
    route: 'characters',
  },
  comics: {
    name: 'Comics',
    route: 'comics',
  },
  stories: {
    name: 'Historias',
    route: 'stories',
  },
})

</script>

<style scoped lang="scss">
  @import 'ViewMenu';
</style>

<template>
  <div class="pt-3 bg-dark text-white">
      <div class="container">
        <div class="align-items-center justify-content-center justify-content-lg-start top-menu">
          <ul class="nav col-md-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li class="col-md-2 text-center" v-for="item in routes">
              <router-link class="nav-link" :to="{name: item.route}">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>


