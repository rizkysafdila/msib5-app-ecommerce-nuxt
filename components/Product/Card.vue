<script lang="ts" setup>
const props = defineProps<{
  data: IProduct,
}>()

const priceAfterDiscount = computed(() => {
  return props.data.price * (1 - props.data.discountPercentage / 100)
});
</script>


<template>
  <div class="md:w-[222px] xl:w-[224px] flex flex-col bg-white border border-gray-200 rounded-lg">
    <router-link to="#">
      <div class="bg-gray-100 w-full flex justify-center items-center rounded-t-lg">
        <NuxtImg class="rounded-t-lg" :src="`/products/${data.fileName}.png`" :alt="data.fileName" />
      </div>
    </router-link>
    <div class="p-6">
      <div class="inline-flex px-3 py-1 bg-gray-100 rounded-2xl mix-blend-multiply">
        <span class="text-gray-700 text-sm text-center font-medium">{{ data.category }}</span>
      </div>
      <div class="mt-4">
        <span class="text-gray-900 font-normal line-clamp-2">{{ data.title }}</span>
      </div>
      <div class="flex justify-between items-center mt-2">
        <span class="text-gray-900 text-xl font-semibold">{{ rupiahCurrency(priceAfterDiscount) }}</span>
        <span class="text-gray-400 text-xs text-center font-normal uppercase">{{ `${data.stock}ML` }}</span>
      </div>
      <div class="flex items-center gap-2 mt-[2px]">
        <span class="text-gray-400 text-xs font-normal line-through">{{ rupiahCurrency(data.price) }}</span>
        <div class="inline-flex px-2 py-[2px] bg-red-50 rounded-2xl mix-blend-multiply">
          <span class="text-red-700 text-xs text-center font-medium">{{ `-${data.discountPercentage}%` }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
