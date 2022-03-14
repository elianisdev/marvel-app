<script setup>
const imagePath = './images/search.png';
defineProps({
            placeholder: {
                type: String,
                default: ''
            },
            modelValue: {
                type: String,
                default: ''
            }
    });
defineEmits(['update:modelValue']);
</script>

<template>
  <div class="col-md-1 text-end label">
    <b>Buscar </b>
  </div>
  <div class="col-md-4">
    <div class="top-bar-nav-bottom">
      <div class="top-bar-search">
        <b-form-input type="text" v-model="modelValue"
                      :style="`background-image: url(${imagePath})`"
                      :placeholder="placeholder"
                      @keyup="$emit('update:modelValue', modelValue)"></b-form-input>
      </div>
    </div>
  </div>
</template>