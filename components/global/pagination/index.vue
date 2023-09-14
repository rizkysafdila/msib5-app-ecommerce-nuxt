<script lang="ts" setup></script>

<template>
  <div class="flex justify-between items-center mt-6">
    <button
      class="text-gray-700 text-sm font-semibold flex justify-center items-center gap-2 px-4 py-3 bg-white hover:bg-gray-100 transition-colors duration-200 border border-gray-300 rounded-lg shadow-sm"
    >
      <Icon name="tabler:arrow-left" size="20" />
      <span class="hidden md:block">Previous</span>
    </button>
    <div class="flex gap-0.5">
      <button
        class="bg-gray-100 hover:bg-gray-100 transition-colors duration-200 flex justify-center items-center p-3 w-10 h-10 rounded-lg"
      >
        <span class="text-gray-800 text-sm font-medium text-center">1</span>
      </button>
      <button
        class="bg-white hover:bg-gray-100 transition-colors duration-200 flex justify-center items-center p-3 w-10 h-10 rounded-lg"
      >
        <span class="text-gray-800 text-sm font-medium text-center">2</span>
      </button>
      <button
        class="bg-white hover:bg-gray-100 transition-colors duration-200 flex justify-center items-center p-3 w-10 h-10 rounded-lg"
      >
        <span class="text-gray-800 text-sm font-medium text-center">3</span>
      </button>
    </div>
    <button
      class="text-gray-700 text-sm font-semibold flex justify-center items-center gap-2 px-4 py-3 bg-white hover:bg-gray-100 transition-colors duration-200 border border-gray-300 rounded-lg shadow-sm"
    >
      <span class="hidden md:block">Next</span>
      <Icon name="tabler:arrow-right" size="20" />
    </button>
  </div>
</template>
