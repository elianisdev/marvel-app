<script setup>
import ViewTitle from "../content/helpers/ViewTitle.vue";
import DetailStories from "../../components/stories/DetailStories.vue";
</script>
<template>
  <view-title path="stories" path-name="Historias" title="Detalle de historia"/>
  <div class="row py-4">
    <detail-stories />
  </div>
</template>
