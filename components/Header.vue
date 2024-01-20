<script setup></script>

<template>
  <header class="bg-slate-500">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-20 w-auto" src="/logo.png" alt="" />
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <Popover class="relative">
          <PopoverButton
            class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
          >
            Product
            <ChevronDownIcon
              class="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </PopoverButton>
        </Popover>

        <NuxtLink
          to="/fabrication"
          class="text-sm font-semibold leading-6 text-gray-900"
          >Ma passion</NuxtLink
        >
        <NuxtLink
          to="/fabrication"
          class="text-sm font-semibold leading-6 text-gray-900"
          >L'atelier</NuxtLink
        >
        <NuxtLink
          to="/fabrication"
          class="text-sm font-semibold leading-6 text-gray-900"
          >Les Arcs</NuxtLink
        >
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
          >Log in <span aria-hidden="true">&rarr;</span></a
        >
      </div>
    </nav>
  </header>
</template>

<style lang="scss"></style>
