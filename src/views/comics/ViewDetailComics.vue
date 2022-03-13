<script setup>
import ViewTitle from "../content/helpers/ViewTitle.vue";
import DetailComics from "../../components/comics/DetailComics.vue";
</script>
<template>
  <view-title path="comics" path-name="Comics" title="Detalle de comic"/>
  <div class="row py-4">
    <detail-comics />
  </div>
</template>
