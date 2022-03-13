<script setup>
import {onMounted, ref} from "vue";
import MarvelApi from "../../api/MarvelApi";
import Loading from "../content/loading/Loading.vue";


const stories = ref([]);
const totalRows = ref(0);
const currentPage = ref(  1);
const perPage = ref(0);
const params = ref({});
const loadingStatus = ref(true);

const getStories = async () => {
  stories.value = await MarvelApi.getStories(params.value);
  stories.value = stories.value.data;
  totalRows.value = stories.value.total;
  perPage.value = stories.value.limit;
  loadingStatus.value = false;
}

const handleChangePage = (e) => {
  loadingStatus.value = true;
  const value = e.target.innerText;
  if (value === 'Ultimo') {
    currentPage.value = parseInt(stories.value.total / perPage.value) + 1;
  } else if (value === 'Primero') {
    currentPage.value = 1;
  } else if (value !== 'Anterior' && value !== 'Siguiente') {
    currentPage.value = parseInt(e.target.innerText);
  }
  params.value = {...params.value, offset: perPage.value * (currentPage.value-1)};
  getStories();
}

onMounted(async () => {
  await getStories();
});
</script>

<template>

  <div class="col-md-12">
    <div class="row" v-show="loadingStatus" >
      <loading />
    </div>
    <div class="row" v-if="!loadingStatus">
      <div class="col-md-4 square box" v-for="(item, index) in stories.results"
           :key="index"
           :data-id="item.id"
           :style=" item.thumbnail ? `background-image: url(${item.thumbnail.path + '.' + item.thumbnail.extension});` : ''">
        <router-link class="text-decoration-none text-dark"
                    :to="{ name: 'characters'}">
        <div :class="[index %2 === 0 ? 'oddboxinner pt-2' : 'evenboxinner mt-3']"> {{item.title}} </div>
          <div class="text-center">
            <router-link class="btn btn-danger text-white transition-slow"
                        :to="{ name: 'characters'}">Ver</router-link>
          </div>
          </router-link>
      </div>
    </div>

  </div>

  <hr>
  <b-pagination class="pagination justify-content-center fs-5 text-dark"
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
  @import 'GridStories';
</style>