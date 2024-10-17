<template>
  <LandingContainer>
    <LandingSectionhead>
      <template #title>
        Les {{ cat }}s
      </template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-3 gap-2 mx-auto max-w-screen-lg mt-12">
      <BowCard
        v-for="(item, index) of bowList.data.value"
        :key="item._path"
        :index="index"
        :bow="item" />
    </div>
  </LandingContainer>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'landing',
})
const cat = useRoute().params.category

const bowList = await useAsyncData('bowCategories', () => queryContent(`/arcs/${cat}`).find())
console.log(bowList.data)
</script>

<style>

</style>
