<script setup>
import DetailCharacters from "../../components/characters/DetailCharacters.vue";
import ViewTitle from "../content/helpers/ViewTitle.vue";
</script>
<template>
  <view-title path="characters" path-name="Personajes" title="Detalle de personaje"/>
  <div class="row py-4">
    <detail-characters />
  </div>
</template>
