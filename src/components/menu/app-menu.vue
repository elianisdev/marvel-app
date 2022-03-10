<style lang="scss">
  @import 'app-menu';
</style>

<template>
  <nav>
    <div class="container">
      <ul class="top-menu flex-around-center unstyled-list">
        <li class="align-center ">
          <a class="text-white inline-flex-center" href="/characters">Personajes</a>
        </li>
        <li class="align-center ">
          <a class="text-white inline-flex-center" href="/comics">Comics</a>
        </li>
        <li class="align-center ">
          <a class="text-white inline-flex-center" href="/stories">Historias</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

  export default {
    name: 'AppMenu'
  };

</script>
