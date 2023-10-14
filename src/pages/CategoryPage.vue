<template>
  <q-page>
    <q-btn
      class="q-ma-lg"
      rounded
      flat
      icon="chevron_left"
      style="background: #FF0080; color: white"
      @click="back"
    >
    </q-btn>
        <q-btn
      class="q-ma-lg"
      rounded
      flat
      style="background: #e04a95; color: white"
      @click="back"
    >
      {{ categoryStore.categoryName }}
    </q-btn>
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
import { useRouter } from 'vue-router'
import { useCategoryStore } from 'src/stores/category'
import SubCategoryCard from 'src/components/SubCategory.vue'


const router = useRouter()

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

async function back() {
  router.push('/')
}



</script>
