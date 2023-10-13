<template>
  <q-page class="">
    <q-item-section>
      <q-item-label class="text-h5 q-pa-lg">{{ categoryStore.categoryName }}</q-item-label>
    </q-item-section>
    <!-- {{ sousCategories }} -->
    <sub-category-card
      v-for="subCat in sousCategories"
      :key="subCat.Nom"
      :subCategory="subCat"
    >
    </sub-category-card>
  </q-page>
</template>

<script setup lang="ts">
import { api } from 'boot/axios'
import {ref, Ref, onMounted } from 'vue'
import { useCategoryStore } from 'src/stores/category'
import SubCategoryCard from 'src/components/SubCategory.vue'

const categoryStore = useCategoryStore()

const info2 = ref()
const sousCategories = ref([])


onMounted(async () => {
  console.log('load', categoryStore.categoryID)
  api
    .get('https://la-tournee-web-dev.osc-fr1.scalingo.io/web/stores/1657031023080x131691197342183490/categories/' + categoryStore.categoryID)
    .then(response => (info2.value = response.data['Sous-categories'].forEach((item:string) => {
      const nom = item["Nom"]
      console.log(item)
      sousCategories.value.push(item)
})))
})


</script>
