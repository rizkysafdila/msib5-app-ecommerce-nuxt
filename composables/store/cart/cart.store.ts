export const useCartStore = defineStore('cart', {
  state: (): {
    carts: ICart
    cartProducts: ICartProduct[]
    isLoading: boolean
  } => ({
    carts: {},
    cartProducts: [],
    isLoading: false
  }),
  getters: {
    getSubTotalPrice: state => {
      if (state.cartProducts.length === 0) {
        return 0 // return 0 if cartProducts is empty
      }
      return state.cartProducts
        .map(product => product.totalPrice)
        .reduce((acc, curVal) => acc + curVal)
    },
    getCartProductCount: state => {
      return state.cartProducts.length
    }
  },
  actions: {
    async getAllCarts() {
      this.isLoading = true
      try {
        const { data } = await useNuxtApp().$axios.get('/carts/user/1')
        this.carts = data[0]
        this.cartProducts = this.CART_PRODUCT_DETAILS()
      } catch (err) {
        Promise.reject(err)
      } finally {
        this.isLoading = false
      }
    },

    async addToCart(id: number, qty: number) {
      this.isLoading = true

      const newCartProduct = { productId: id, quantity: qty }

      try {
        const productStore = useProductStore()

        await useNuxtApp().$axios.post('/carts', {
          userId: 1,
          date: Date.now(),
          products: newCartProduct
        })
        this.carts.products = [newCartProduct, ...this.carts.products]
        // const cartProductDetails = productStore.products
        //   .map(product => product)
        //   .filter(product => product.id == newCartProduct.productId)
        // this.cartProducts = [...cartProductDetails, ...this.cartProducts]
        this.cartProducts = this.CART_PRODUCT_DETAILS().reverse()
      } catch (err) {
        Promise.reject(err)
      } finally {
        this.isLoading = false
      }
    },

    CART_PRODUCT_DETAILS() {
      const productStore = useProductStore()
      const cartProducts = this.carts.products.map((item: any) => item)
      const cartProductDetails = productStore.products
        .filter(product =>
          cartProducts.map((item: any) => item.productId).includes(product.id)
        )
        .map(product => ({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image
        }))
        .map(cartProduct => ({
          ...cartProduct,
          quantity:
            cartProducts.find(
              (product: any) => product.productId === cartProduct.id
            )?.quantity || 0
        }))
        .map(product => ({
          ...product,
          totalPrice: product.price * product.quantity
        }))

      return cartProductDetails
    },

    REMOVE_PRODUCT(id: number) {
      try {
        this.carts.products = this.carts.products.filter(
          (product: any) => product.productId !== id
        )
        this.cartProducts = this.cartProducts.filter(
          product => product.id !== id
        )
      } catch (err) {
        return Promise.reject(err)
      }
    }
  },
  persist: {
    paths: ['carts', 'cartProducts']
  }
})
