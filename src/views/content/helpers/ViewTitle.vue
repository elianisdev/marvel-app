<script setup>
defineProps({
  title: String,
  pathName: String,
  path: String
})
</script>

<template>
  <h2 class="fst-italic fw-bold">
    <router-link class="text-dark" :to="{ name: path }">{{ pathName }}</router-link>
     > {{title}}</h2>
  <hr>
</template>

