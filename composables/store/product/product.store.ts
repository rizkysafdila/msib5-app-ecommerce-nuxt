export const useProductStore = defineStore('product', {
  state: (): {
    products: IProduct[]
    product: IProduct
    isLoading: boolean
  } => ({
    products: [],
    product: {},
    isLoading: false
  }),
  getters: {},
  actions: {
    async fetchProducts() {
      this.isLoading = true
      try {
        const { data } = await useNuxtApp().$axios.get('/products')
        this.products = data
      } catch (err) {
        Promise.reject(err)
      } finally {
        this.isLoading = false
      }
    },

    async getSingleProduct(id: number): Promise<void> {
      this.isLoading = true
      try {
        const { data } = await useNuxtApp().$axios.get(`/products/${id}`)
        this.product = data
        this.products = [] // empty state when get single product
      } catch (err) {
        Promise.reject(err)
      } finally {
        this.isLoading = false
      }
    },

    async searchProducts(query: string): Promise<void> {}
  }
})
