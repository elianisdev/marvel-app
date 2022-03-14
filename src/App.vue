<script setup>
import {RouterView} from 'vue-router'
import ViewFooter from './views/content/footer/ViewFooter.vue';
import ViewHeader from "./views/content/header/ViewHeader.vue";
import ViewMenu from "./views/content/menu/ViewMenu.vue";
</script>

<template>

  <header>
    <view-header/>
  </header>

  <nav>
    <view-menu/>
  </nav>

  <main class="container">
    <div class="row py-5">
      <div class="col-md-12">
    <router-view/>
        </div>
      </div>
  </main>

  <footer>
    <view-footer/>
  </footer>
</template>
