<script lang="ts" setup>
const menuitems = [
  {
    title: 'Accueil',
    path: '/',
  },
  {
    title: 'Les arcs',
    path: '/arcs',
  },
  {
    title: 'L\'atelier',
    path: '/atelier',
  },
  {
    title: 'A propos',
    path: '/info',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
]

const open = ref(false)

const route = useRoute()
console.log(route.path)
</script>

<template>
  <LandingContainer>
    <header class="flex items-center justify-center my-5 ">
      <div class="flex-1 flex justify-around  ">
        <a
          href="/"
          class="text-lg">
          <!-- TODO : Mettre le bon logo. -->
          <img
            src="/Logo.png"
            alt="logo"
            class="flex w-28">
        </a>

        <div class="block lg:hidden">
          <button
            class="text-gray-800"
            @click="open = !open">
            <svg
              fill="currentColor"
              class="w-4 h-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path
                v-show="open"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
              <path
                v-show="!open"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
            </svg>
          </button>
        </div>
      </div>
      <!-- <h1 class="flex-3 text-3xl  flex justify-center">Eole Archery</h1> -->
      <a
        href="/"
        class="text-lg">
        <!-- TODO : Mettre le bon titre. -->
        <img
          src="/title.png"
          alt="logo"
          class="flex w-56">
      </a>
      <nav
        class="content-center flex-2  flex "
        :class="{ hidden: open }">
        <ul class="flex gap-3 justify-around  flex-1">
          <li
            v-for="item of menuitems"
            class="flex  ">
            <a
              :href="item.path"
              class="w-fit text-gray-800 hover:text-gray-950 hover:bg-slate-300 active:bg-slate-600"
              :class="[route.path === item.path && 'bg-slate-400']">
              {{ item.title }}
            </a>
          </li>
        </ul>
        <div class="lg:hidden flex items-center mt-3 gap-4" />
      </nav>
    </header>
  </LandingContainer>
</template>
