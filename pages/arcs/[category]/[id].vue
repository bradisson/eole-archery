<template>
  <LandingContainer>
    <main class="flex flex-row">
      <section class="basis-1/3 border-r border-gray-200 dark:border-gray-800 pt-2">
        <BowCarousel
          :data="data" />
      </section>
      <section class="basis-2/3 border-b border-gray-200 dark:border-gray-800 pt-2">
        details
      </section>
    </main>
  </LandingContainer>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'landing',
})
const { data } = await useAsyncData('bowData', () => queryContent(useRoute().params.id as string).findOne())
</script>

<style>

</style>
