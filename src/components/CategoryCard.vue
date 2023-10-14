<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-if="name!='landing'&&'Nouveautés'"
      class="my-card cursor-pointer q-hoverable"
      style="background: #b4cac7"
      flat
      bordered
      clickable
    >
      <q-card-section>
        <div class="text-h6">
        {{ name }}
        </div>
        <q-separator></q-separator>
      </q-card-section>
      <q-card-section
        class="q-pt-none"
      >
        {{ description }}
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
  },
  categoryID: {
    type: String,
    default() {
      return ''
    }
  },
})

</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px

</style>


