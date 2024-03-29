<script setup>
  import MarvelApi from "../../api/MarvelApi";
  import {onMounted, ref} from "vue";
  import SearchBar from "../helpers/search-bar/SearchBar.vue";
  import Loading from "../helpers/loading/Loading.vue";
  import Favorite from "../helpers/favorite/Favorite.vue";
  import NotFound from "../helpers/not-found/NotFound.vue";

  const searchValue = ref('');
  const characters = ref([]);
  const totalRows = ref(0);
  const currentPage = ref(  1);
  const perPage = ref(0);
  const params = ref({});
  const loadingStatus = ref(true);

  const getCharters = async () => {
    characters.value = await MarvelApi.getCharacters(params.value);
    characters.value = characters.value.data;
    totalRows.value = characters.value.total;
    perPage.value = characters.value.limit;
    loadingStatus.value = false;
  }

  const handleChangeText = () => {
    loadingStatus.value = true;
    currentPage.value = 0;
    params.value.offset = currentPage.value;
    if (searchValue.value.trim()) {
      params.value.nameStartsWith = searchValue.value.trim();
      getCharters();
    }else {
      delete params.value.nameStartsWith;
      getCharters();
    }
  }

  const handleChangePage = (e) => {
    loadingStatus.value = true;
    const value = e.target.innerText;
    if (value === 'Ultimo') {
      currentPage.value = parseInt(characters.value.total / perPage.value);
    } else if (value === 'Primero') {
      currentPage.value = 1;
    } else if (value !== 'Anterior' && value !== 'Siguiente') {
      currentPage.value = parseInt(e.target.innerText);
    }
    params.value = {...params.value, offset: perPage.value * (currentPage.value-1)};
    getCharters();
  }

  const validateImages = (path) => {
    return path.indexOf('image_not_available') === (-1);
  }

  onMounted(async () => {
    await getCharters();
  });

</script>

<template>

  <search-bar placeholder="Escribe aqui un personaje ..."
             v-model="searchValue" @update:modelValue="handleChangeText"/>

  <div class="row" v-show="loadingStatus" >
    <loading />
  </div>
  <hr>
  <not-found v-if="!loadingStatus && characters.results.length === 0" />
  <div class="row" v-if="!loadingStatus">
  <div class="col-md-2 py-3 text-center"
         v-for="(item, index) in characters.results"
         :key="index"
         :data-id="item.id"
         v-show="validateImages(item.thumbnail?.path)">
      <div class="list-item">
        <router-link class="text-decoration-none" :to="{ name: 'detail-characters', params: { id: item.id }}">
          <div class="item-thumbnail py-1">
            <img :src="item.thumbnail.path + '.' + item.thumbnail.extension" :alt="item.name">
          </div>

          <div class="balloon">
            <div class="item-title align-center">
              <h3 class="item-title-name">
                {{item.name}}
              </h3>

            </div>
          </div>
        </router-link>
        <favorite :id="item.id" element="characters"/>
      </div>
    </div>
  </div>

  <hr>
  <b-pagination class="pagination justify-content-center fs-5"
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      first-text="Primero"
      prev-text="Anterior"
      next-text="Siguiente"
      last-text="Ultimo"
      @click="handleChangePage"
  ></b-pagination>

</template>

<style scoped lang="scss">
 @import 'GridCharacters';
</style>