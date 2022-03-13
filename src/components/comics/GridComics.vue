<script setup>
import MarvelApi from "../../api/MarvelApi";
import {onMounted, ref} from "vue";
import SearchBar from "../helpers/search-bar/SearchBar.vue";
import Loading from "../helpers/loading/Loading.vue";

const searchValue = ref('');
const comics = ref([]);
const totalRows = ref(0);
const currentPage = ref(  1);
const perPage = ref(0);
const params = ref({});
const loadingStatus = ref(true);

const getComics = async () => {
  comics.value = await MarvelApi.getComics(params.value);
  comics.value = comics.value.data;
  totalRows.value = comics.value.total;
  perPage.value = comics.value.limit;
  loadingStatus.value = false;
}

const handleChangeText = (e) => {
  loadingStatus.value = true;
  currentPage.value = 0;
  params.value.offset = currentPage.value;
  if (searchValue.value.trim()) {
    params.value.titleStartsWith = searchValue.value.trim();
    getComics();
  }else {
    delete params.value.titleStartsWith;
    getComics();
  }
}

const handleChangePage = (e) => {
  loadingStatus.value = true;
  const value = e.target.innerText;
  if (value === 'Ultimo') {
    currentPage.value = parseInt(comics.value.total / perPage.value) + 1;
  } else if (value === 'Primero') {
    currentPage.value = 1;
  } else if (value !== 'Anterior' && value !== 'Siguiente') {
    currentPage.value = parseInt(e.target.innerText);
  }
  params.value = {...params.value, offset: perPage.value * (currentPage.value-1)};
  getComics();
}

const validateImages = (path) => {
  return path.indexOf('image_not_available') === (-1);
}

onMounted(async () => {
  await getComics()
});

</script>

<template>

  <search-bar placeholder="Escribe aqui un comic ..."
             v-model="searchValue" @update:modelValue="handleChangeText"/>

  <div class="row" v-show="loadingStatus" >
    <loading />
  </div>
   <div class="comic col-md-12" v-if="!loadingStatus">

     <div class="row px-3 py-2">

           <div class="row justify-content-center">
             <div class="p-0" v-for="(item, index) in comics.results"
                  :key="index"
                  :data-id="item.id"
                  :class="[index %2 === 0 ? 'col-md-3' : 'col-md-4']"
                  v-show="validateImages(item.thumbnail?.path)">
               <router-link class="text-decoration-none" :to="{ name: 'characters'}">
               <div class="panel"
                    :style="`background-image: url(${item.thumbnail.path + '.' + item.thumbnail.extension});`">
                   <p class="text bottom-right text-red fs-6">{{item.title}}</p>
               </div>
               </router-link>
             </div>
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
@import 'GridComics';
</style>