<script setup>

import {onMounted, ref} from "vue";

const alertSuccess = ref(0);
const alertDanger = ref(0);
const active = ref(false);
const secondsDismiss = 1;

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  element: {
    type: String,
    required: true
  }
});

const toggleFavorite = (status) => {

  let currentData = JSON.parse(localStorage.getItem(props.element));
  if (!currentData) {
    currentData = [];
  }

  if(status) {
    currentData = currentData.filter( data => parseInt(data) !== props.id);
    alertDanger.value = secondsDismiss;
  } else {
    currentData.push(props.id);
    alertSuccess.value = secondsDismiss;
  }

  localStorage.setItem(props.element, JSON.stringify(currentData));
  validateFavorite()
}

const validateFavorite = () => {
    const item = JSON.parse(localStorage.getItem(props.element));
    if (item) {
      active.value = false;
      item.forEach( data => {
        if (parseInt(data) === props.id) {
          active.value = true;
        }
      });
    }

}

const countSuccessChanged = (countDown) => {
  alertSuccess.value = countDown
}

const countDangerChanged = (countDown) => {
  alertDanger.value = countDown
}

onMounted(() => {
   validateFavorite()
});

</script>

<template>

  <b-alert v-model="alertSuccess" variant="success" dismissible
           @dismissed="alertSuccess=0"
           @dismiss-count-down="countSuccessChanged">
    Favorito agregado! </b-alert>

  <b-alert v-model="alertDanger" variant="danger" dismissible
           @dismissed="alertDanger=0"
           @dismiss-count-down="countDangerChanged">
    Favorito removido! </b-alert>

  <button v-show="!alertSuccess && !alertDanger" 
          @click="toggleFavorite(active)" class="btn btn-lg border-0 mt-2 mb-4">
    <i class="bi bi-suit-heart-fill favorite"
    :class="active? 'active' : ''"></i>
  </button>
</template>

<style scoped lang="scss">
  @import "Favorite";
</style>