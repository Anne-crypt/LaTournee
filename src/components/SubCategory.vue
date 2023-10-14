<template>
  <div class="q-pa-md items-start q-gutter-md">
    <q-card-section class="text-h6 q-pb-none">
      <div class="text-h6 q-pb-none" flat>
      {{ subCategory.Nom }}
      </div>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section class="row">

      <q-card v-for="product in products"
        :key="product.ID"
        class="my-card q-ma-xs q-px-xs cursor-pointer q-hoverable"
        flat
        bordered
        @click="stockIDAndGoNext(product.ID)"
      >
        <img :src="product.Image" style="height: 140px; max-width: 150px">
        {{ product['Nom du produit'] }}
      </q-card>

    </q-card-section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from 'src/stores/product'

const router = useRouter()

const productStore = useProductStore()

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
  products.value = props.subCategory.Produits
}

async function stockIDAndGoNext(productID:string) {
  productStore.productID = productID
  console.log('productID stocked :', productStore.productID)
  router.push('/product')

}

</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 210px

</style>


