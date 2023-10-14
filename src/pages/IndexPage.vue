<template>
  <q-page class="row items-center justify-evenly">
    <category-card
      v-for="category in info"
      :key="category.id"
      :name="category.Nom"
      :color="category.Couleur"
      :description="category.Description"
      :picture="category.Image"
      :categoryID="category.id"
      @click="stockIDAndGoNext(category.ID, category.Nom)"
    >
    </category-card>
  </q-page>
</template>

<script setup lang="ts">
import { api } from 'boot/axios'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCategoryStore } from 'src/stores/category'
import CategoryCard from 'src/components/CategoryCard.vue'


const router = useRouter()

const categoryStore = useCategoryStore()

const info = ref()


onMounted(async () => {
  console.log('load')
  api
  .get('https://la-tournee-web-dev.osc-fr1.scalingo.io/web/stores/1657031023080x131691197342183490/categories')
  .then(response => (info.value = response.data))
  categoryStore.categoryID = null
  categoryStore.categoryName = null
})

async function stockIDAndGoNext(categoryID:string, categoryName:string) {
  categoryStore.categoryID = categoryID
  categoryStore.categoryName = categoryName
  console.log('bonjouuuuur', categoryStore.categoryID)
  router.push('/category')
}

</script>
