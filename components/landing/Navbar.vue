<script lang="ts" setup>
const bowCat = useNuxtApp().payload.data.bowCategories.body
const buildingSteps = useNuxtApp().payload.data.buildingSteps.body
const menuitems = [[
  {
    label: 'Accueil',
    to: '/',
  },
  {
    label: 'Les arcs',
    to: '/arcs',
    sections: bowCat,
  },
  {
    label: 'La fabrication',
    to: '/fabrication',
    sections: buildingSteps,
  },
  {
    label: 'A propos',
    to: '/info',
  }],
[{
  label: 'Contact',
  to: '/contact',
}],
]
</script>

<template>
  <LandingContainer>
    <UHorizontalNavigation
      :links="menuitems"
      class="border-b border-gray-200 dark:border-gray-800">
      <template #default="{ link }">
        <UDropdown
          v-if="link.sections"
          :items="link.sections"
          :popper="{ placement: 'bottom-start' }"
          mode="hover"
          class="hover:bg-white-100 ">
          <UButton
            color="white"
            :label="link.label"
            trailing-icon="i-heroicons-chevron-down-20-solid"
            class="ring-white-100 ring-0 shadow-none" />
          <!-- <template
            #type="{ item }">
            <span class="bg-gray-300 font-bold">{{ item.label }}</span>
          </template> -->
        </UDropdown>
      </template>
    </UHorizontalNavigation>
  </LandingContainer>
</template>
