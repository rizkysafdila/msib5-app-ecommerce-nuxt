<script lang="ts" setup></script>

<template>
  <div class="bg-gradient-to-b from-[#D8EEFD] to-white">
    <Navbar :is-authenticated="true" />

    <slot />
    <Footer />
  </div>
</template>
