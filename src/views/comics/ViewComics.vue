<script setup>
import GridComics from "../../components/comics/GridComics.vue";
import ViewTitle from "../content/helpers/ViewTitle.vue";
</script>
<template>
  <view-title path="home" path-name="Home" title="Comics"/>
  <div class="row py-4">
    <grid-comics />
  </div>
</template>
