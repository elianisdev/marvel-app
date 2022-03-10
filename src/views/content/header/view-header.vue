<style lang="scss">
  @import 'view-header';
</style>

<template>

    <div class="view-header-top container flex-between">
      <div class="flex3 view-header-top-logo">
        <router-link :to="{ name: 'home'}" class="flex">
          <img src="../../../assets/images/logo.png" class="img-logo" title="marvel-logo" alt="marvel-logo">
        </router-link>
      </div>
    </div>
    <div class="view-header-top-menu text-white">
      <app-menu></app-menu>
    </div>

</template>

<script>

  import AppMenu from '../../../components/menu/app-menu.vue';

  export default {
    name: 'ViewHeader',
    components: {
      AppMenu
    },
  }
</script>
