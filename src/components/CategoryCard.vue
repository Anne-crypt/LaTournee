<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      class="my-card"
      :color="color"
      @click="$router.push('/product/' + slug)"
    >
      <q-card-section>
        {{ name }}
        {{ color }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  name: {
    type: String,
    default() {
      return ''
    }
  },
  color: {
    type: String,
    default() {
      return ''
    }
  },
  description: {
    type: String,
    default() {
      return ''
    }
  },
  picture: {
    type: String,
    default() {
      return ''
    }
  }
})

</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px

</style>


