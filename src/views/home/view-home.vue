<template>
    <section>
      <header>
        <view-header></view-header>
      </header>
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
    name: 'ViewHome',
    components: {
      ViewHeader,
      ViewFooter
    }
  }
</script>
