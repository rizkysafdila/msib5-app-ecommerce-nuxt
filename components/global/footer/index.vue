<script lang="ts" setup></script>

<template>
  <footer class="bg-gray-800">
    <div
      class="container mx-auto flex flex-wrap md:justify-center gap-8 xl:gap-0 pt-8 lg:pt-16 px-8"
    >
      <div class="block text-center">
        <h5
          class="text-white text-2xl md:text-3xl font-semibold text-center mb-4"
        >
          Let's get started on something great
        </h5>
        <p class="text-gray-200 text-lg md:text-xl font-normal">
          Join over 4,000+ startups already growing with Morpheme.
        </p>
        <div class="inline-flex gap-3 mt-10">
          <router-link
            to="#"
            class="text-gray-700 font-semibold px-5 py-3 rounded-lg bg-white hover:bg-gray-300 border border-gray-300 transition-colors duration-200"
          >
            Chat to us
          </router-link>
          <router-link
            to="#"
            class="text-white font-semibold px-5 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 border border-primary-600 transition-colors duration-200"
          >
            Get Started
          </router-link>
        </div>
      </div>
    </div>
    <div
      class="container mx-auto flex flex-wrap md:justify-between gap-8 xl:gap-0 py-12 lg:py-24 px-8"
    >
      <div class="max-w-xs flex flex-col gap-8">
        <div class="flex gap-2.5">
          <NuxtImg src="/logos/Logomark.svg" alt="GITS ID" />
          <NuxtImg src="/logos/Logotype-White.png" alt="GITS ID" />
        </div>
        <p class="text-gray-200 font-normal line-clamp-2">
          Design amazing digital experiences that create more happy in the
          world.
        </p>
      </div>
      <div v-for="link in FOOTER_LINKS" :key="link.title">
        <h6 class="text-gray-300 text-sm font-semibold mb-4">
          {{ link.title }}
        </h6>
        <ul class="flex flex-col gap-3">
          <li v-for="item in link.links">
            <router-link
              :to="item.url"
              class="text-gray-200 font-semibold hover:text-gray-500 transform-cpu duration-200"
            >
              {{ item.label }}
            </router-link>
            <span
              class="text-white text-xs font-medium text-center ml-2 bg-white bg-opacity-10 border border-white border-opacity-30 rounded-full px-2 py-0.5"
              :class="{ hidden: !item.isNew }"
              >New</span
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="container mx-auto p-8">
      <hr class="border-gray-600" />
      <div
        class="flex flex-wrap justify-center md:justify-between items-center mt-8"
      >
        <p class="text-gray-500 text-center font-normal mb-5">
          © 2077 Morpheme UI. All rights reserved.
        </p>
        <ul class="flex gap-6">
          <li class="lg:p-1" v-for="item in SOCIALS" :key="item.fileName">
            <a :href="item.url" target="_blank">
              <NuxtImg
                :src="`/icons/${item.fileName}.svg`"
                class="w-6 h-6"
                :alt="item.fileName"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
