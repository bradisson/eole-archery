<script lang="ts" setup>
defineProps(['bow', 'index'])
</script>

<template>
  <nuxt-link :to="`/arcs/${bow.id}`">
    <UCard class="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <!-- Header avec image de l'arc -->
      <template #header>
        <img
          :src="bow.images[index]"
          alt="Image de l'arc"
          class="w-full h-64 object-cover">
      </template>

      <!-- Contenu de la carte -->
      <div class="p-4">
        <!-- Titre / nom de l'arc -->
        <h2 class="text-2xl font-bold mb-2">
          {{ bow.title }}
        </h2>

        <!-- Description de l'arc -->
        <p class="text-gray-700 mb-4">
          {{ bow.description }}
        </p>

        <!-- Informations techniques -->
        <ul class="space-y-2 text-gray-600">
          <li><span class="font-semibold">Puissance : </span>{{ bow.features.poundage }} livres</li>
          <li><span class="font-semibold">Taille : </span>{{ bow.features.size }} pouces</li>
          <li><span class="font-semibold">Allonge max : </span>{{ bow.features.maxDrawLength }} pouces</li>
          <li><span class="font-semibold">Band recommandé : </span>{{ bow.features.recommendedBraceHeight }} pouces</li>
        </ul>
      </div>
    </UCard>
  </nuxt-link>
  <!-- <UCard>
    <template #header>
      <img
        :src="plan.images[0]"
        class="h-64 mx-auto">
    </template>

    <Placeholder class="h-32" />
    <div>
      <ul class="grid mt-8 text-left gap-y-4">
        <li
          class="flex items-start gap-3 text-gray-800">
          <LandingTick class-name="w-6 h-6" />
          <span> {{ plan.features.poundage }} livres @ 28' </span>
        </li>
        <li
          class="flex items-start gap-3 text-gray-800">
          <LandingTick class-name="w-6 h-6" />
          <span> {{ plan.features.size }}' </span>
        </li>
        <li
          class="flex items-start gap-3 text-gray-800">
          <LandingTick class-name="w-6 h-6" />
          <span> {{ plan.price }} € </span>
        </li>
      </ul>
    </div>

    <template #footer>
      <div class="flex">
        <LandingLink
          :href="plan.to || '#'"
          block
          style-name="outline"
          class="mx-auto">
          Détails
        </LandingLink>
      </div>
    </template>
  </UCard> -->
</template>
