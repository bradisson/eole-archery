<script lang="ts" setup>
definePageMeta({
  layout: 'landing',
})
const buildingSteps = useNuxtApp().payload.data.buildingSteps.body
console.log(buildingSteps)
</script>

<template>
  <LandingContainer>
    <BuildingHero
      v-for="item, index of buildingSteps[0]"
      :key="item.label"
      :content="item"
      :index="index" />
    <LandingFeatures />
    <!-- <LandingLogos></LandingLogos> -->
    <LandingCta />
  </LandingContainer>
</template>
