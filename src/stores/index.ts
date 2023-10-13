import { store } from 'quasar/wrappers'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Router } from 'vue-router'


declare module 'pinia' {
  export interface PiniaCustomProperties {
    readonly router: Router
  }
}

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const pinia = createPinia()

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)


  return pinia
})
