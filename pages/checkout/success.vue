<script lang="ts" setup>
useHead({
  title: 'GITS Commerce - Checkout Success',
  meta: [
    { name: 'description', content: 'GITS Commerce Checkout Success Page' }
  ]
})
</script>

<template>
  <section class="bg-gradient-to-t from-white via-white h-screen">
    <div
      class="container mx-auto lg:gap-8 xl:gap-0 py-12 lg:pt-16 lg:pb-24 px-8"
    >
      <div class="flex flex-col justify-center items-center">
        <h1
          class="text-gray-900 text-center text-lg md:text-xl font-semibold mb-1"
        >
          Thank you!
        </h1>
        <p class="text-gray-400 text-center font-normal mb-6">
          Your order will be processed immediately.
        </p>
        <router-link
          to="/"
          class="w-fit flex justify-center items-center gap-2 text-white font-semibold px-5 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 border border-primary-600 transition-colors duration-200"
        >
          <Icon name="tabler:home" size="20" />
          Back to home
        </router-link>
      </div>
    </div>
  </section>
</template>
