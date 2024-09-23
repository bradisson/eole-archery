<template>
  <LandingContainer>
    <main class="border-emerald-400 border flex flex-row">
      <section class="border-teal-700 border basis-1/3">
        <BowDetailsCarousel
          :data="data" />
      </section>
      <section class="border-red-400 border basis-2/3">
        details
      </section>
    </main>
  </LandingContainer>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'landing',
})
const { data } = useAsyncData('bowData', () => queryContent(useRoute().params.id as string).findOne())
</script>

<style>

</style>
