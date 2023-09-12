<script lang="ts" setup>
const categories: ICategory[] = [
  { title: "Men's Fashion", fileName: "search" },
  { title: "Women's Fashion", fileName: "womenFashion" },
  { title: "Bicycle", fileName: "bicycle" },
  { title: "Handphone", fileName: "handphone" },
  { title: "Hobbies and Collections", fileName: "hobbies" },
  { title: "Household", fileName: "household" }
]
</script>


<template>
  <section class="bg-gradient-to-t from-white via-white">
    <div class="container mx-auto lg:gap-8 xl:gap-0 py-12 lg:py-24 px-8">
      <HomeSectionHeader title="Categories" button-url="#" />
      <div class="flex flex-wrap gap-3 md:gap-0 justify-around items-baseline md:justify-between">
        <div class="flex flex-col gap-5 justify-center items-center md:mb-5 md:basis-1/3 lg:basis-auto"
          v-for="item in categories" :key="item.title">
          <NuxtImg :src="`/categories/${item.fileName}.svg`" class="w-32" :alt="item.fileName" />
          <h5 class="max-w-[138px] text-[#212529] font-semibold text-center">{{ item.title }}</h5>
        </div>
      </div>
    </div>
  </section>
</template>
