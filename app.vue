<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang=ts setup>
import { register } from 'swiper/element/bundle'
// register Swiper custom elements
register()

await useAsyncData('bowCategories', () => queryContent('/bowcategories').findOne())
await useAsyncData('buildingSteps', () => queryContent('/buildingsteps').findOne())
</script>
