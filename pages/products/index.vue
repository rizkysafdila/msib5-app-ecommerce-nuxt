<script lang="ts" setup>
useHead({
  title: 'GITS Commerce - Products',
  meta: [{ name: 'description', content: 'GITS Commerce Products Page' }]
})

const productStore = useProductStore()
const cartStore = useCartStore()

await productStore.fetchProducts()
// await cartStore.getAllCarts()
</script>

<template>
  <section>
    <div class="container mx-auto lg:gap-8 xl:gap-0 py-12 lg:pt-16 lg:pb-[72px] px-8">
      <div class="flex flex-col justify-center items-center gap-6">
        <h1 class="text-gray-900 text-center text-[40px] font-semibold">
          Product List
        </h1>
        <div class="flex flex-wrap md:flex-nowrap gap-2.5">
          <div class="relative flex md:w-[360px] lg:w-[480px] xl:w-[612px]">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Icon name="uil:search" color="#667085" size="20" />
            </div>
            <input type="search"
              class="block w-full pl-10 text-gray-500 text-sm bg-white p-3.5 border border-gray-300 shadow-sm rounded-lg focus:outline-none"
              placeholder="Search" />
          </div>
          <button
            class="flex justify-center items-center gap-2 text-gray-700 text-sm font-semibold bg-white hover:bg-gray-100 transition-colors duration-200 border border-gray-300 rounded-lg px-4 py-3.5">
            <NuxtImg src="/icons/filter-lines.svg" alt="filter-lines" />
            <span class="hidden md:block">Sort by</span>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-gradient-to-t from-white via-white pb-24">
    <div class="container mx-auto lg:gap-8 xl:gap-0 py-12 lg:pt-16 lg:pb-[72px] px-8">
      <div class="flex flex-wrap md:items-center gap-3 lg:gap-6">
        <div class="min-w-full md:min-w-min" v-for="product in productStore.products">
          <ProductCard :data="product" />
        </div>
      </div>
      <Pagination />
    </div>
  </section>
</template>
