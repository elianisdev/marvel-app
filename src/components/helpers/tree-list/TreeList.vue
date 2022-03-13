<script setup>
defineProps({
  items: {
    type: Array,
    default: []
  },
  title: {
    type: String,
    default: ''
  }
});
</script>

<template>

  <div class="accordion accordion-flush" :id="`accordion-${title}`">
    <div class="accordion-item">
      <h2 class="accordion-header" :id="`heading-${title}`">
        <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse"
                :data-bs-target="`#collapse-${title}`" aria-expanded="false" :aria-controls="`collapse-${title}`">
          {{ title }} ({{items.length}})
        </button>
      </h2>
      <div :id="`collapse-${title}`" class="accordion-collapse collapse"
           :aria-labelledby="`heading-${title}`" :data-bs-parent="`#accordion-${title}`">
        <div class="accordion-body p-0 ps-3">


          <div class="accordion accordion-flush" :id="`accordion-${item.id}`"
               v-for="item in items"
               :key="item.id">
            <div class="accordion-item border-bottom">
              <h2 class="accordion-header" :id="`heading-${item.id}`">
                <button class="accordion-button collapsed border-start" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapse-${item.id}`" aria-expanded="false" :aria-controls="`collapse-${item.id}`">
                  {{ item.title }}
                </button>
              </h2>
              <div :id="`collapse-${item.id}`" class="accordion-collapse collapse border-start"
                   :aria-labelledby="`heading-${item.id}`" :data-bs-parent="`#accordion-${item.id}`">
                <div class="accordion-body p-0 ps-3">
                  <div class="py-4 fs-6">
                    <strong> Descripción: </strong>
                    {{ item.description ? item.description : 'No existe descripción disponible.'}}
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
  @import 'TreeList';
</style>