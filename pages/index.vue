<script lang="ts" setup>
const productStore = useProductStore()
const cartStore = useCartStore()

await productStore.fetchProducts()
await cartStore.getAllCarts()
</script>

<template>
  <div>
    <HomeHero />
    <HomeCategories />
    <HomeFlashSale :products="productStore.products" />
    <HomeLatestProduct :products="productStore.products" />
    <HomePromo />
    <HomeLatestProduct :products="productStore.products" />
    <HomeForYou :products="productStore.products" />
    <HomeNewsletter />
  </div>
</template>
