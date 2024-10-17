<template>
  <swiper-container
    thumbs-swiper=".my-thumbs"
    slides-per-view="1"
    css-mode="true"
    centered-slides="true"
    class="w-96 flex place-content-center">
    <swiper-slide
      v-for="(image, index) in data.images"
      :key="index"
      class="flex flex-wrap place-content-center">
      <img
        :src="image"
        :alt="`Slide ${index + 1}`"
        class="w-64 flex place-content-center"
        loading="lazy">
    </swiper-slide>
  </swiper-container>
  <swiper-container
    class="my-thumbs w-96 flex"
    slides-per-view="3"
    navigation="true">
    <swiper-slide
      v-for="(image, index) in data.images"
      :key="index"
      class="flex flex-wrap place-content-center">
      <img
        :src="image"
        :alt="`Slide ${index + 1}`"
        class="w-16 flex place-content-center"
        loading="lazy">
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
