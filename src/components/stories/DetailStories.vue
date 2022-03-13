<script setup>
import {useRoute} from "vue-router";
import {ref, onMounted} from "vue";
import MarvelApi from "../../api/MarvelApi";
import Loading from "../helpers/loading/Loading.vue";
import TreeList from "../helpers/tree-list/TreeList.vue";
const route = useRoute()

const storyId = ref(route.params.id)
const story = ref({});
const characters = ref([]);
const loadingStatus = ref(true);

const getStory = async () => {
  story.value = await MarvelApi.getStoryId(storyId.value);
  story.value = story.value.data.results[0];

  characters.value = await MarvelApi.getStoriesCharacters(storyId.value);
  characters.value = characters.value.data.results;

}

onMounted(async () => {
  await getStory();
  loadingStatus.value = false;
});

</script>

<template>

  <div class="col-md-12">

    <div class="row" v-show="loadingStatus" >
      <loading />
    </div>
    <div class="row" v-if="!loadingStatus">

      <div class="col-md-4 border-end">
        <h3> {{ story.title }}</h3>
        <hr>
        <span class="fs-6">
          {{ story.description ? story.description : 'Descripción no disponible'}}</span>

      </div>

      <div class="col-md-8">
        <h3> Mas detalles ...</h3>
        <hr>

        <div class="col-md-12 py-3">
          <p class="fs-6">A continuación podras encontrar una lista detallada de
            los personajes asociados a {{story.name}}: </p>
        </div>
          <tree-list title="Personajes" :items="characters"/>
      </div>

    </div>
    <hr>
  </div>
</template>