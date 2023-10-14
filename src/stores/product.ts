import { defineStore } from 'pinia'


interface State {
  productID: string | null
}

export const useProductStore = defineStore('product', {
  state: (): State => ({
    productID: null,
  }),
})
