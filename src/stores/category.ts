import { defineStore } from 'pinia'


interface State {
  categoryID: string | null
  categoryName: string | null
}

export const useCategoryStore = defineStore('category', {
  state: (): State => ({
    categoryID: null,
    categoryName:null
  }),
})
