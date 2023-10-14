<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-purple-6 text-white">


        <q-toolbar-title class="q-my-lg text-h4 row items-center">
          <img
            class="q-mx-xl cursor-pointer"
            src="/rond.svg"
            style="max-width: 80px; height:fit-content"
          />
          <div class="text-bold">
            Hello !
          </div>
        </q-toolbar-title>

        <q-btn class="q-mx-md" rounded color="secondary">
          se connecter
        </q-btn>

        <q-btn class="q-mr-md" rounded color="secondary" icon="shopping_cart">
        </q-btn>


      </q-toolbar>
    </q-header>

    <q-page-container style="background: #f7e1ca">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';


</script>
