<template>
  <q-page class="row items-center justify-evenly">
    <category-card
      v-for="category in info"
      :key="category.id"
      :name="category.Nom"
      :color="category.Couleur"
      :description="category.Description"
      :picture="category.Image"
    >
    </category-card>
  </q-page>
</template>

<script setup lang="ts">
import { api } from 'boot/axios'
import {ref, onMounted } from 'vue'
import CategoryCard from 'src/components/CategoryCard.vue';

const info = ref()


onMounted(async () => {
  console.log('load')
      api
      .get('https://la-tournee-web-dev.osc-fr1.scalingo.io/web/stores/1657031023080x131691197342183490/categories')
      .then(response => (info.value = response.data))
})


</script>
