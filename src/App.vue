<script setup>
import {RouterView} from 'vue-router'
import ViewFooter from './views/content/footer/ViewFooter.vue';
import ViewHeader from "./views/content/header/ViewHeader.vue";
import ViewMenu from "./views/content/menu/ViewMenu.vue";
</script>

<template>

  <header>
    <ViewHeader/>
  </header>

  <nav>
    <ViewMenu/>
  </nav>

  <main class="container">
    <div class="row py-5">
      <div class="col-md-12">
    <RouterView/>
        </div>
      </div>
  </main>

  <footer>
    <ViewFooter/>
  </footer>
</template>
