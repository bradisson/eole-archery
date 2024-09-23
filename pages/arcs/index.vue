<script lang="ts" setup>
definePageMeta({
  layout: 'landing',
})

const pricing = [
  {
    name: 'Longbow',
    price: 'de 600 à 800 €',
    popular: false,
    features: [
      'De 25 à 50 livres',
      'De 24 a 30 pouces',
      'Monobloc',
      'Livré avec une corde tressé',
    ],
    button: {
      text: 'Parcourir les longbows',
      link: '/arcs/longbow',
    },
  },
  {
    name: 'Recurve',
    price: 'de 700 à 1200 €',
    popular: true,
    features: [
      'De 25 à 50 livres',
      'De 20 a 26 pouces',
      'Monobloc ou démontable',
      'Livré avec une corde tressé',
    ],
    button: {
      text: 'parcourirs les recurves',
      link: '#',
    },
  },

]
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template #title>
        Les arcs
      </template>
      <template #desc>
        Simple & Predictable pricing. No Surprises.
      </template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-screen-lg mt-12">
      <LandingBowSection
        v-for="item of pricing"
        :key="item.name"
        :plan="item" />
    </div>
  </LandingContainer>
</template>
