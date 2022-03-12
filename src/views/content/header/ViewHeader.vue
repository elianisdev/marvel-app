<style lang="scss">
  @import 'ViewHeader';
</style>

<template>
  <header>
    <div class="view-header-top container">
      <div class="view-header-top-logo">
        <RouterLink :to="{ name: 'home'}">
          <img src="../../../assets/images/logo.png" class="img-logo" title="marvel-logo" alt="marvel-logo">
        </RouterLink>
      </div>
    </div>
  </header>
</template>


