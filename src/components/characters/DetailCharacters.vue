<script setup>
import {useRoute} from "vue-router";
import {ref, onMounted} from "vue";
import MarvelApi from "../../api/MarvelApi";
import Loading from "../helpers/loading/Loading.vue";
import TreeList from "../helpers/tree-list/TreeList.vue";
const route = useRoute()

const characterId = ref(route.params.id)
const character = ref({});
const comics = ref([]);
const stories = ref([]);
const loadingStatus = ref(true);

const getCharacter = async () => {
  character.value = await MarvelApi.getCharacterId(characterId.value);
  character.value = character.value.data.results[0];

  comics.value = await MarvelApi.getCharacterComics(characterId.value);
  comics.value = comics.value.data.results;

  stories.value = await MarvelApi.getCharacterStories(characterId.value);
  stories.value = stories.value.data.results;

}

onMounted(async () => {
  await getCharacter();
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
        <h3> {{ character.name }}</h3>
        <hr>
        <img class="w-100 p-4"
            :src="character.thumbnail?.path + '.' + character.thumbnail?.extension" :alt="character.name">

      </div>

      <div class="col-md-8">
        <h3> Mas detalles ...</h3>
        <hr>

        <div class="col-md-12 py-3">
          <p class="fs-6">A continuación podras encontrar una lista detallada de
            las historias y comics asociadas a {{character.name}}: </p>
        </div>
          <tree-list title="Historias" :items="stories"/>
          <tree-list class="py-3" title="Comics" :items="comics"/>
      </div>

    </div>
    <hr>
  </div>
</template>