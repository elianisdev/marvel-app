<script setup>
import GridCharacters from "../../components/characters/GridCharacters.vue";
import ViewTitle from "../content/helpers/ViewTitle.vue";
</script>
<template>
    <view-title path="home" path-name="Home" title="Personajes"/>
    <div class="row py-4">
    <grid-characters />
    </div>
</template>
