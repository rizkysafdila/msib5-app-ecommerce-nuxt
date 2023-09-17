<script lang="ts" setup>
defineProps<{
  icon: string
}>()

const emits = defineEmits<{
  (e: 'count'): void
}>()
</script>

<template>
  <button
    @click="emits('count')"
    class="text-white font-semibold flex justify-center items-center p-2 w-14 h-14 bg-primary-600 hover:bg-primary-700 transition-colors duration-200 border border-primary-600 disabled:bg-gray-200 disabled:border-gray-200 rounded-lg shadow-sm"
  >
    <Icon :name="icon" size="24" />
  </button>
</template>
