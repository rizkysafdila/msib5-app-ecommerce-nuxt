<script lang="ts" setup>
useHead({
  title: 'GITS Commerce - Checkout',
  meta: [{ name: 'description', content: 'GITS Commerce Checkout Page' }]
})

const productStore = useProductStore()
const cartStore = useCartStore()

await productStore.fetchProducts()
await cartStore.getAllCarts()
</script>

<template>
  <section>
    <div class="container mx-auto lg:gap-8 xl:gap-0 py-12 lg:py-16 px-8">
      <div class="flex justify-between items-center">
        <h1
          class="text-gray-900 text-center text-2xl md:text-3xl lg:text-[40px] font-semibold"
        >
          Shopping Cart
        </h1>
      </div>
    </div>
  </section>
  <section class="bg-gradient-to-t from-white via-white">
    <div class="container mx-auto lg:gap-8 xl:gap-0 py-12 lg:pb-24 px-8">
      <div
        class="flex gap-6 flex-col justify-center items-center"
        v-if="cartStore.cartProducts.length == 0"
      >
        <p class="text-gray-900 text-2xl text-center">
          There are no products yet
        </p>
        <router-link
          to="/products"
          class="text-gray-900 font-semibold px-5 py-3 rounded-lg bg-transparent hover:bg-primary-600 hover:text-white border-2 border-primary-600 transition-colors duration-200"
        >
          <Icon name="tabler:shopping-cart" size="24" class="mr-2" />
          Start Shopping
        </router-link>
      </div>
      <div v-else>
        <CheckoutCard :products="cartStore.cartProducts" />
      </div>
    </div>
  </section>
</template>
