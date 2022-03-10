<template>
  <section>
    <header>
      <view-header></view-header>
    </header>
  </section>

  <section>
    <main>
  <h1 class="p-block">Content Characters</h1>
    </main>
  </section>

  <section>
    <footer>
      <view-footer></view-footer>
    </footer>
  </section>
</template>

<script>

import ViewHeader from '../content/header/view-header.vue';
import ViewFooter from '../content/footer/view-footer.vue';

export default {
  name: 'ViewCharacters',
  components: {
    ViewHeader,
    ViewFooter
  }
}
</script>

<style scoped>
.p-block {
  padding: 5rem;
}
</style>