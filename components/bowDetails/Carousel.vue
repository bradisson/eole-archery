<template>
  <swiper-container
    slides-per-view="1"
    speed="500"
    loop="true"
    css-mode="true"
    navigation="true"
    pagination="true"
    centered-slides="true"
    class="w-96 flex place-content-center">
    <swiper-slide
      v-for="(image, index) in data.images"
      :key="index"
      class="flex flex-wrap place-content-center">
      <img
        :src="image"
        :alt="`Slide ${index + 1}`"
        class="w-64 flex place-content-center">
    </swiper-slide>
  </swiper-container>
</template>

<script lang="ts" setup>
defineProps(['data'])
</script>

<style>
swiper-container::part(wrapper) {
  align-items: center;
}
</style>
