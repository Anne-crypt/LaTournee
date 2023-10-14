<template>
  <q-page>
    <q-item-section v-if="categoryStore.categoryName=='Nouveautés'">
      <q-item-label class="text-h5 q-pa-lg">Nouveautés</q-item-label>
    </q-item-section>
    <sub-category
      :subCategory="info2"
    >
    </sub-category>


    <div class="row items-center justify-evenly">
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
    </div>



  </q-page>
</template>

<script setup lang="ts">
import { api } from 'boot/axios'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCategoryStore } from 'src/stores/category'
import SubCategory from 'src/components/SubCategory.vue'
import CategoryCard from 'src/components/CategoryCard.vue'


const router = useRouter()

const categoryStore = useCategoryStore()

const info = ref()
const info2 = ref()
const sousCategories = ref([])


onMounted(async () => {
  console.log('load')
    api
    .get('https://la-tournee-web-dev.osc-fr1.scalingo.io/web/stores/1657031023080x131691197342183490/categories')
    .then(response => (info2.value = response.data.forEach((item:string) => {
      if (item["Nom"] == 'Nouveautés') {
        console.log('SSSSSSSSSS', item['ID'])
        categoryStore.categoryID = item['ID']
        api
          .get('https://la-tournee-web-dev.osc-fr1.scalingo.io/web/stores/1657031023080x131691197342183490/categories/' + categoryStore.categoryID)
          .then(response => (info2.value = response.data['Sous-categories']))

        sousCategories.value.push(info2)
        console.log('GGGGGGGGG', sousCategories.value)

      }
})))
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
