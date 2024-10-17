<script lang="ts" setup>
defineProps(['content', 'index'])
</script>

<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div
      class="p-24 block"
      :class="index % 2 === 0 ? 'order-1' : '-order-1'">
      <img
        class="rounded-full"
        :src="content.images.src"
        :alt="content.images.alt"
        loading="eager"
        format="avif"
        width="512"
        height="512">
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        {{ content.label }}
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        {{ content.details }}
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          :href="content.to"
          style-name="outline"
          rel="noopener">
          {{ content.bouton?.label || "En savoir plus" }}
        </LandingLink>
      </div>
    </div>
  </main>
</template>
