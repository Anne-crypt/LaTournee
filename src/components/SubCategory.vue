<template>
  <div class="q-pa-md items-start q-gutter-md">
    <q-card-section class="text-h6 q-pb-none">
      <div class="text-h6 q-pb-none" flat>
      {{ subCategory.Nom }}
      </div>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section class="row">

      <q-card v-for="product in products" :key="product.ID"  class="my-card q-ma-xs q-px-xs" flat bordered>
        <img :src="product.Image" style="height: 140px; max-width: 150px">
        {{ product['Nom du produit'] }}
      </q-card>

    </q-card-section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const products = ref([])


const props = defineProps({
  subCategory: {
    type: Object,
    default() {
      return ''
    }
  },
})

onMounted(async () => {
  formatData()
})

async function formatData() {
  console.log('bonjour')
  products.value = props.subCategory.Produits
}

</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 210px

</style>


