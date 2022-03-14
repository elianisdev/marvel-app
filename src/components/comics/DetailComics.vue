<script setup>
import {useRoute} from "vue-router";
import {ref, onMounted} from "vue";
import MarvelApi from "../../api/MarvelApi";
import Loading from "../helpers/loading/Loading.vue";
import TreeList from "../helpers/tree-list/TreeList.vue";
import Favorite from "../helpers/favorite/Favorite.vue";
const route = useRoute()

const comicId = ref(route.params.id)
const comic = ref({});
const characters = ref([]);
const loadingStatus = ref(true);

const getComic = async () => {
  comic.value = await MarvelApi.getComicId(comicId.value);
  comic.value = comic.value.data.results[0];

  characters.value = await MarvelApi.getComicsCharacters(comicId.value);
  characters.value = characters.value.data.results;

}

onMounted(async () => {
  await getComic();
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
        <h3> {{ comic.title }}</h3>
        <hr>
        <img class="w-100 p-1 image-detail"
            :src="comic.thumbnail?.path + '.' + comic.thumbnail?.extension" :alt="comic.name">
        <div class="col-md-12 text-center">
          <favorite :id="comic.id" element="comics"/>
        </div>
      </div>

      <div class="col-md-8">
        <h3> Mas detalles ...</h3>
        <hr>

        <div class="col-md-12 py-3">
          <p class="fs-6">A continuación podras encontrar una lista detallada de
            los personajes asociados a {{comic.name}}: </p>
        </div>
          <tree-list title="Personajes" :items="characters"/>
      </div>

    </div>
    <hr>
  </div>
</template>