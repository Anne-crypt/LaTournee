<template>
  <q-card
    class="my-card q-ma-xs q-px-xs"
    flat
    square
    @click="$router.push('/product/' + slug)"
  >
    <q-img
      v-if="!!imgUrl"
      class="product-card-img-container cursor-pointer"
      :src="imgUrl"
      :srcset="
        imgUrl +
        ', 400w,' +
        imgUrl +
        ', 800w,' +
        imgUrl +
        ', 1200w,' +
        imgUrl +
        ', 1600w'
      "
      sizes="(max-width: 400px) 400w,
      (min-width: 400px) and (max-width: 800px) 800w,
      (min-width: 800px) and (max-width: 1200px) 1200w,
      (min-width: 1200px) 1600w"
      width="100%"
      ratio="1"
    >
      <div class="absolute-full flex flex-center transparent q-px-none">
        <!--<q-card-actions v-if="netStockUnit > 0" vertical class="justify-around">-->
        <q-card-actions vertical class="justify-around">
          <q-btn
            class="add-product-btn absolute"
            :class="{ 'add-product-btn-round': !deliveryZoneName }"
            flat
            size="12px"
            no-caps
            :round="!!deliveryZoneName ? false : true"
            :rounded="!!deliveryZoneName ? true : false"
            text-color="black"
            :icon-right="!!deliveryZoneName && !outOfZone ? 'add' : null"
            :icon="!!deliveryZoneName ? undefined : 'add'"
            :label="deliveryZoneText"
            aria-label="Ajouter au panier"
            :disable="outOfZone"
            @click.stop="addOneToCart()"
          ></q-btn>
        </q-card-actions>


        <div v-if="isReturnable" class="product-card-sticker">
          consigne: 0.10€
        </div>
      </div>
    </q-img>
    <q-card-section class="q-px-none cursor-pointer" @click="goToProductPage()">

    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
.q-btn--round {
  min-height: 30px;
  min-width: 30px;
  height: 30px;
  width: 30px;
}

.q-btn--rounded {
  min-height: 30px;
  height: 30px;
}

.my-card {
  font-family: 'gt-walsheim', sans-serif;

  line-height: 21px;
  font-weight: 300;

  width: 100%;

  @media (min-width: $breakpoint-xs) {
    max-width: 190px;
    font-size: 16px;
  }

  @media (max-width: $breakpoint-xs) {
    max-width: 160px;
    font-size: 12px;
  }
}

.product-card-img-container {
  position: relative;
  padding: 0;
  margin: 0;
  transition: transform 0.2s; /* Animation */
  :hover > & {
    transform: scale(1.04);
  }
}

.add-product-btn {
  background-color: $accent;
  /*border-radius: 1.6em;*/
  top: 7%;
  right: 7%;
  /*margin-top: 10px;
  margin-right: 10px;*/
  :hover > & {
    background-color: rgb(255, 255, 255);
  }
}
.add-product-btn-round {
  height: 40px;
  width: 40px;
}

.product-card-unavailable {
  position: absolute;
  margin: 0;
  top: 0;
  right: 0;
  left: 0;
  min-height: 2.5em;
  font-size: 0.7em;
  letter-spacing: 2px;
  font-weight: 500;
}

.unavailable-product-btn {
  background-color: rgb(255, 255, 255);
  border-radius: 1.6em;
  font-size: 0.8em; /*taille du plus*/

  &:hover {
    background-color: $secondary;
  }
}

.product-card-sticker {
  font-family: 'gt-walsheim', sans-serif;
  font-size: 0.9em;
  line-height: 1.2em;
  font-weight: light;
  padding: 4px 10px;
  border-radius: 20px;
  background-color: white;
  color: #333;
  position: absolute;
  bottom: 10px;
  right: 15px;
}

.text-subtitle2 {
  font-family: 'gt-walsheim', sans-serif;
  font-weight: light;
  font-size: 1em;
}

.text-body2 {
  font-family: 'gt-walsheim', sans-serif;
  font-weight: light;
  font-size: 0.9em;
  font-weight: 300;
}

.picto {
  width: 1.1em;
  line-height: 1em;
}
</style>
