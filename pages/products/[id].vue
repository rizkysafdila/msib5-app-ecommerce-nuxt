<script lang="ts" setup>
const { id } = useRoute().params
const idd = +id

const productStore = useProductStore()

await productStore.getSingleProduct(idd)
const product = ref<IProduct>(productStore.product)
</script>

<template>
  <section>
    <div
      class="container mx-auto lg:gap-8 xl:gap-0 py-12 lg:pt-16 lg:pb-[72px] px-8"
    >
      <div class="flex justify-between items-center">
        <router-link
          to="/products"
          class="text-gray-700 text-sm font-semibold flex justify-center items-center gap-2 px-4 py-3 bg-white hover:bg-gray-100 transition-colors duration-200 border border-gray-300 rounded-lg shadow-sm"
        >
          <Icon name="tabler:arrow-left" size="20" />
          <span class="hidden md:block">Back</span>
        </router-link>
        <h1
          class="text-gray-900 text-center text-2xl md:text-3xl lg:text-[40px] font-semibold"
        >
          Product Detail
        </h1>
        <button
          class="text-white text-sm font-semibold flex justify-center items-center gap-2 px-4 py-3 bg-primary-600 hover:bg-primary-700 transition-colors duration-200 border border-primary-600 rounded-lg shadow-sm"
        >
          <Icon name="tabler:plus" size="20" />
          <span class="hidden md:block">Add to Cart</span>
        </button>
      </div>
    </div>
  </section>
  <section class="bg-gradient-to-t from-white via-white pb-24">
    <div
      class="container mx-auto lg:gap-8 xl:gap-0 py-12 lg:pt-16 lg:pb-[72px] px-8"
    >
      <div class="w-full flex flex-wrap lg:flex-nowrap gap-5">
        <div class="flex flex-col gap-4 w-full lg:w-6/12">
          <div
            class="bg-gray-100 w-full p-5 lg:max-h-[546px] flex justify-center items-center rounded-xl"
          >
            <NuxtImg
              class="rounded-xl h-full object-scale-down"
              :src="product.image"
              alt="bottle"
            />
          </div>
          <div class="flex gap-4">
            <div
              class="cursor-pointer bg-gray-100 w-1/4 p-1 lg:max-h-[124px] active:border-2 active:border-primary-500 active:shadow-md flex justify-center items-center rounded-lg md:rounded-xl"
              v-for="i in 4"
            >
              <NuxtImg
                class="h-full object-scale-down rounded-md lg:rounded-xl"
                :src="product.image"
                alt="bottle"
              />
            </div>
          </div>
        </div>
        <div class="w-full lg:w-6/12 flex flex-col gap-8">
          <div>
            <h2 class="text-gray-900 text-xl md:text-3xl font-semibold mb-2.5">
              {{ product.title }}
            </h2>
            <h3 class="text-primary-700 md:text-2xl font-semibold">
              {{ usdCurrency(product.price) }}
            </h3>
          </div>
          <div>
            <h4 class="text-gray-500 font-medium mb-2">Color</h4>
            <ul class="flex flex-wrap md:flex-nowrap w-full gap-6">
              <li v-for="color in ['red', 'green', 'blue']">
                <input
                  type="radio"
                  :id="`color-${color}`"
                  class="hidden peer"
                  required
                />
                <label
                  :for="`color-${color}`"
                  class="inline-flex items-center gap-3 p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100"
                >
                  <div class="bg-secondary-500 w-10 h-10 rounded-full"></div>
                  <div class="block">
                    <div
                      class="w-full text-gray-600 text-lg font-semibold capitalize"
                    >
                      {{ color }}
                    </div>
                  </div>
                </label>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-gray-500 font-medium mb-2">Size</h4>
            <ul class="flex w-full gap-4">
              <li v-for="size in ['S', 'M', 'L', 'XL']" :key="size">
                <input
                  type="radio"
                  :id="`size-${size}`"
                  class="hidden peer"
                  required
                />
                <label
                  :for="`size-${size}`"
                  class="inline-flex justify-center items-center gap-4 p-2 w-14 h-14 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-primary-600 peer-checked:text-primary-600 peer-hover:text-gray-600 peer-hover:bg-gray-100 peer-disabled:bg-gray-200 peer-disabled:cursor-default"
                >
                  <div class="block">
                    <div class="w-full text-gray-600 text-xl font-semibold">
                      {{ size }}
                    </div>
                  </div>
                </label>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-gray-500 font-medium mb-2">Quantity</h4>
            <div class="flex gap-4">
              <button
                class="text-white font-semibold flex justify-center items-center p-2 w-14 h-14 bg-primary-600 hover:bg-primary-700 transition-colors duration-200 border border-primary-600 disabled:bg-gray-200 disabled:border-gray-200 rounded-lg shadow-sm"
                disabled
              >
                <Icon name="tabler:minus" size="24" />
              </button>
              <input
                type="text"
                class="text-gray-900 text-xl text-center font-semibold flex justify-center items-center p-2 w-14 h-14 bg-white border border-gray-300 rounded-lg shadow-sm outline-none"
                value="1"
              />
              <button
                class="text-white font-semibold flex justify-center items-center p-2 w-14 h-14 bg-primary-600 hover:bg-primary-700 transition-colors duration-200 border border-primary-600 rounded-lg shadow-sm"
              >
                <Icon name="tabler:plus" size="24" />
              </button>
            </div>
          </div>
          <div>
            <h4 class="text-gray-500 font-medium mb-2">Description</h4>
            <p class="text-gray-900 text-lg font-semibold">
              {{ product.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
