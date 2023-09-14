<script lang="ts" setup>
useHead({
  title: 'GITS Commerce - Checkout',
  meta: [{ name: 'description', content: 'GITS Commerce Checkout Page' }]
})
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
      <div class="flex flex-wrap md:flex-nowrap justify-between gap-6">
        <div class="w-full flex flex-col gap-6 md:w-7/12">
          <div
            class="group w-full flex flex-wrap items-center p-2 bg-white hover:bg-gray-100 transition-colors duration-300 border border-gray-200 rounded-xl"
            v-for="i in 4"
          >
            <div
              class="flex w-full h-fit md:h-full md:w-2/5 justify-center items-center lg:px-16 bg-gray-100 group-hover:bg-white transition-colors duration-300 rounded-lg"
            >
              <NuxtImg src="/products/bottle.png" class="w-full" alt="Bottle" />
            </div>
            <div
              class="flex flex-col justify-between w-full md:w-3/5 h-fit md:h-full p-3"
            >
              <div>
                <div class="flex flex-wrap justify-between items-center">
                  <h2 class="text-gray-900 font-normal">
                    UX review presentations
                  </h2>
                  <h3
                    class="text-gray-900 text-right text-lg md:text-xl font-semibold"
                  >
                    Rp 36.000
                  </h3>
                </div>
                <h4 class="text-gray-400 text-xs font-normal mt-1">
                  Color Name
                </h4>
              </div>
              <div class="flex justify-between items-center mt-10 md:mt-0">
                <div class="text-gray-700 text-lg font-medium">Qty: 1</div>
                <button
                  class="text-red-700 hover:text-primary-900 transition-colors duration-200 text-sm font-semibold flex justify-center items-center gap-2"
                >
                  <Icon name="tabler:trash" size="20" />
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex md:w-5/12">
          <div
            class="w-full h-fit flex flex-wrap bg-white border border-gray-200 rounded-xl p-5"
          >
            <div class="w-full flex justify-between mb-2 lg:mb-1">
              <div class="text-gray-900 font-normal">Sub Total</div>
              <div
                class="text-gray-900 text-lg md:text-xl text-right font-semibold"
              >
                Rp 144.000
              </div>
            </div>
            <div
              class="text-gray-400 text-sm md:text-base font-normal md:w-[190px] mb-5"
            >
              Shipping and taxes calculated at checkout
            </div>
            <button
              class="w-full block px-5 py-3 text-white text-center font-semibold bg-primary-600 hover:bg-primary-700 transition-colors duration-200 border border-primary-600 rounded-lg shadow-sm"
            >
              <Icon name="tabler:arrow-right" size="20" />
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
