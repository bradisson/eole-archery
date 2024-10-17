<script lang="ts" setup>
definePageMeta({
  layout: 'landing',
})
const bowCat = useNuxtApp().payload.data.bowCategories.body
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template #title>
        Les arcs
      </template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <LandingBowSection
        v-for="item of bowCat[0]"
        :key="item.label"
        :plan="item" />
      <LandingBowSection
        v-for="item of bowCat[1]"
        :key="item.label"
        :plan="item" />
    </div>
  </LandingContainer>
</template>
