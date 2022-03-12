<script setup>
  import MarvelApi from "../../api/MarvelApi";
  import {onMounted, ref} from "vue";
  const selectedText = ref('');
  const characters = ref([]);
  const totalRows = ref(0);
  const currentPage = ref(  1);
  const perPage = ref(0);
  const params = ref({});
  const imagePath = './images/search.png';

  const getCharters = async () => {
    characters.value = await MarvelApi.getCharacters(params.value);
    characters.value = characters.value.data;
    totalRows.value = characters.value.total;
    perPage.value = characters.value.limit;
  }

  const handleChangeText = (e) => {
    params.value.offset = 0;
    if (selectedText.value.trim()) {
      params.value.nameStartsWith = selectedText.value.trim();
      getCharters();
    }else {
      delete params.value.nameStartsWith;
      getCharters();
    }
  }

  const handleChangePage = (e) => {
    const value = e.target.innerText;
    if (value === 'Ultimo') {
      currentPage.value = characters.value.total / perPage.value;
    } else if (value === 'Primero') {
      currentPage.value = 1;
    } else if (value !== 'Anterior' && value !== 'Siguiente') {
      currentPage.value = parseInt(e.target.innerText);
    }
    params.value = {...params.value, offset: perPage.value * (currentPage.value-1)};
    getCharters();
  }

  onMounted(async () => {
    await getCharters();
  });

</script>

<template>

  <div class="col-md-1 text-end label">
    <b>Buscar </b>
  </div>
  <div class="col-md-4">
    <div class="top-bar-nav-bottom">
      <div class="top-bar-search">
        <b-form-input type="text" v-model="selectedText"
                      :style="`background-image: url(${imagePath})`"
                      placeholder="Escribe aqui un personaje ..." v-on:keyup="handleChangeText"/>
      </div>
    </div>
  </div>
  <div class="row">
  <div class="col-md-2 py-3 text-center"

         v-for="(item, index) in characters.results"
         :key="index"
         :data-id="item.id">
      <div class="list-item">
        <RouterLink class="text-decoration-none" :to="{ name: 'home', params: { id: item.id }}">
          <div class="item-thumbnail py-1">
            <img :src="item.thumbnail.path + '.' + item.thumbnail.extension" :alt="item.name">
          </div>

          <div class="balloon">
            <div class="item-title align-center">
              <h3 class="item-title-name">
                {{item.name}}
              </h3>
              <!--          <span v-if="item.description">{{item.description }}</span>-->

            </div>
          </div>
        </RouterLink>

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
                v-on:click="handleChangePage"
  ></b-pagination>

</template>

<style scoped lang="scss">
 @import 'GridCharters';
</style>