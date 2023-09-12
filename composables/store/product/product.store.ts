// export const useProductStore = defineStore('product', {
//   state: (): {
//     products: IProduct[]
//     isLoading: boolean
//   } => ({
//     products: [],
//     isLoading: false
//   }),
//   getters: {},
//   actions: {
//     async fetchProducts() {
//       try {
//         const response = await useFetch('https://dummyjson.com/products')
//         if (response.status) {
//           this.products = await response.json()
//         } else {
//           console.error('Failed to fetch products:', response.error)
//         }
//       } catch (error) {
//         console.error('Error fetching products:', error)
//       }
//     }
//   }
// })
