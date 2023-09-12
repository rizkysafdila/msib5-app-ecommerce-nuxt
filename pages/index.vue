<script lang="ts" setup>

// const productStore = useProductStore()

// // change to SSR
// const { data: products } = await useAsyncData('product', () => productStore.fetchProducts())
// console.log(products)

const products: IProduct[] = [
  {
    label: "Label",
    title: "UX Review Presentations",
    price: 40000,
    discountPercentage: 10,
    stock: 450,
    fileName: "bottle",
  },
  {
    label: "Label",
    title: "UX Review Presentations",
    price: 40000,
    discountPercentage: 10,
    stock: 450,
    fileName: "shoes",
  },
  {
    label: "Label",
    title: "UX Review Presentations",
    price: 40000,
    discountPercentage: 10,
    stock: 450,
    fileName: "bottle",
  },
  {
    label: "Label",
    title: "UX Review Presentations",
    price: 40000,
    discountPercentage: 10,
    stock: 450,
    fileName: "bottle",
  },
  {
    label: "Label",
    title: "UX Review Presentations",
    price: 40000,
    discountPercentage: 10,
    stock: 450,
    fileName: "bottle",
  },
  {
    label: "Label",
    title: "UX Review Presentations",
    price: 40000,
    discountPercentage: 10,
    stock: 450,
    fileName: "bottle",
  },
  {
    label: "Label",
    title: "UX Review Presentations",
    price: 40000,
    discountPercentage: 10,
    stock: 450,
    fileName: "bottle",
  },
  {
    label: "Label",
    title: "UX Review Presentations",
    price: 40000,
    discountPercentage: 10,
    stock: 450,
    fileName: "bottle",
  },
  {
    label: "Label",
    title: "UX Review Presentations",
    price: 40000,
    discountPercentage: 10,
    stock: 450,
    fileName: "bottle",
  },
  {
    label: "Label",
    title: "UX Review Presentations",
    price: 40000,
    discountPercentage: 10,
    stock: 450,
    fileName: "bottle",
  },
  {
    label: "Label",
    title: "UX Review Presentations",
    price: 40000,
    discountPercentage: 10,
    stock: 450,
    fileName: "bottle",
  },
  {
    label: "Label",
    title: "UX Review Presentations",
    price: 40000,
    discountPercentage: 10,
    stock: 450,
    fileName: "bottle",
  },
  {
    label: "Label",
    title: "UX Review Presentations",
    price: 40000,
    discountPercentage: 10,
    stock: 450,
    fileName: "bottle",
  },
  {
    label: "Label",
    title: "UX Review Presentations",
    price: 40000,
    discountPercentage: 10,
    stock: 450,
    fileName: "bottle",
  },
  {
    label: "Label",
    title: "UX Review Presentations",
    price: 40000,
    discountPercentage: 10,
    stock: 450,
    fileName: "bottle",
  },
]
</script>


<template>
  <div>
    <HomeHero />
    <HomeCategories />
    <HomeFlashSale :products="products" />
    <HomeLatestProduct :products="products" />
    <HomePromo />
    <HomeLatestProduct :products="products" />
    <HomeNewsletter />
  </div>
</template>
