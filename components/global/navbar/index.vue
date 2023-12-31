<script lang="ts" setup>
defineProps<{
  isAuthenticated: boolean
}>()

const cartStore = useCartStore()

const showDropdown = ref<boolean>(false)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}
</script>

<template>
  <nav class="w-full">
    <div
      class="container flex flex-wrap items-center justify-between mx-auto p-8"
    >
      <div class="flex items-center gap-10">
        <router-link to="/" class="flex items-center gap-2.5">
          <img
            src="@/assets/images/logos/Logomark.svg"
            class="h-8"
            alt="GITS ID"
          />
          <img
            src="@/assets/images/logos/Logotype.png"
            class="h-8"
            alt="GITS ID"
          />
        </router-link>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:gap-x-8 md:mt-0"
          >
            <li v-for="menu in MENU_LIST" :key="menu.name">
              <router-link
                :to="menu.url"
                class="block py-2 pl-3 pr-4 text-[#475467] rounded md:bg-transparent md:p-0"
              >
                <span class="flex items-center gap-2">
                  {{ menu.name }}
                  <span :class="{ hidden: !menu.hasDropdown }">
                    <Icon name="tabler:chevron-down" size="20" />
                  </span>
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex md:order-2">
        <div
          class="relative flex justify-center items-center gap-6"
          :class="{ hidden: !isAuthenticated }"
        >
          <router-link to="/checkout" class="flex relative">
            <Icon name="tabler:shopping-cart" size="32" />
            <div
              class="absolute w-4 h-4 flex justify-center items-center -right-1 -top-1 bg-secondary-600 rounded-full"
            >
              <span class="text-white text-[10px] text-center font-medium">
                {{ cartStore.getCartProductCount }}
              </span>
            </div>
          </router-link>
          <button
            type="button"
            @click="toggleDropdown"
            class="flex justify-center items-center w-10 h-10 text-sm bg-gray-300 rounded-full focus:ring-4 focus:ring-gray-300"
          >
            <NuxtImg class="rounded-full" src="/avatar.png" alt="user photo" />
          </button>
          <div
            class="z-10 absolute top-12 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-48"
            :class="{ hidden: !showDropdown }"
          >
            <div class="px-4 py-3 text-sm text-gray-900">
              <div>Olivia Rhye</div>
              <div class="font-medium truncate">oliviaryhe@gmail.com</div>
            </div>
            <div class="py-2">
              <button
                class="w-full flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <div class="flex gap-3" :class="{ hidden: isAuthenticated }">
          <router-link
            to="#"
            class="text-gray-600 font-semibold px-[18px] py-3.5 rounded-lg hover:bg-white transition-colors duration-200"
          >
            Log in
          </router-link>
          <router-link
            to="#"
            class="text-white font-semibold px-[18px] py-3.5 rounded-lg bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
          >
            Sign Up
          </router-link>
        </div>
        <button
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <Icon name="tabler:menu-2" size="36" />
        </button>
      </div>
    </div>
  </nav>
</template>
