<template>
  <q-btn
    class="q-ma-lg"
    rounded
    flat
    icon="chevron_left"
    style="background: #FF0080; color: white"
    @click="back"
  >
  </q-btn>
  <div v-if="!!info">

    <div class="container">
      <div class="row">
        <div
          class="col-xs-12 col-sm-6 q-px-xl q-pb-md q-pl-sm-md q-pr-sm-lg justify-center"
        >
          <q-img class="sticky" :src="info.Image"> </q-img>
        </div>
        <div class="col-xs-12 col-sm-6 q-mb-xl">
          <div v-if="!!info['Nom du produit']" class="text-h4 q-py-md q-mt-lg">
            {{ info['Nom du produit'] }}
          </div>

          <div class="q-my-sm">
            <span v-if="!!info['Unité prix B2C']">
              <div class="q-mb-md text-h6 bolder">
                {{ info['Unité prix B2C'].toFixed(2) }} €
              </div>
            </span>

          </div>

          <div class="row">
            <span v-if="info.IsInStock == true">
              <div class="q-mb-md">
                <q-icon
                  class="q-mb-xs q-mr-xs"
                  name="circle"
                  color="green"
                  font-size="xs"
                >
                </q-icon>
                En stock
              </div>
            </span>
              <span v-else>
              <div class="q-mb-md">
                <q-icon
                  class="q-mb-xs q-mr-xs"
                  name="circle"
                  color="red"
                  font-size="xs"
                >
                </q-icon>
                Eh bah y en a plus 😔
              </div>
            </span>
          </div>

          <q-separator />
          <div>
            <div v-if="!!info.Description">
              <div class="section-title q-my-lg">DETAILS DU PRODUIT</div>
              <div class="section-text">
                {{ info.Description }}
              </div>
            </div>


            <div v-if="!!info['Ingrédients']">
              <div class="section-title q-my-lg">INGREDIENTS</div>
              <div class="section-text">
                {{ info['Ingrédients'] }}
              </div>
            </div>

            <div v-if="!!info['Provenance / Producteur']">
              <div class="section-title q-mt-lg">PROVENANCE</div>
              <div class="section-text">
                {{ info['Provenance / Producteur'] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { api } from 'boot/axios'
import { useProductStore } from 'src/stores/product'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter()

const productStore = useProductStore()

const info = ref()


onMounted(async () => {
  console.log('load', productStore.productID)
  api
  .get('https://la-tournee-web-dev.osc-fr1.scalingo.io/web/stores/1657031023080x131691197342183490/products/' + productStore.productID)
  .then(response => (info.value = response.data))
})

async function back() {
  router.push('/category')
}


</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 210px

.container
  width: 90%
  max-width: 1100px
  margin-right: auto
  margin-left: auto
  padding: none


.img
  position: sticky
  top: 0
  left: 0
  right: 0
  width: 100%
  height: 100%
  -o-object-fit: cover
  object-fit: cover


.sticky
  position: sticky
  top: 8em


</style>


