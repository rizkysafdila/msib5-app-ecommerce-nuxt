<script lang="ts" setup>
const cartStore = useCartStore()

if (cartStore.cartProducts.length == 0) await cartStore.getAllCarts()

const isAuthenticated = ref<boolean>(false)
const toggleLogout = () => {
  isAuthenticated.value = !isAuthenticated.value
}
</script>

<template>
  <div class="bg-gradient-to-b from-[#D8EEFD] to-white">
    <Navbar :is-authenticated="true" />

    <slot />
    <Footer />
  </div>
</template>
