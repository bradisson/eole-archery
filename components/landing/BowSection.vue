<script lang="ts" setup>
defineProps(['plan'])
</script>

<template>
  <div>
    <div
      class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md">
      <div class="text-center">
        <h4 class="text-lg font-medium text-gray-400">
          {{ plan.label }}
        </h4>
        <p class="mt-3 text-4xl font-bold text-black md:text-4xl">
          de {{ plan.priceRange.min }} à {{ plan.priceRange.max }} €
        </p>
        <!-- {
        plan.price.original && (
          <p class="mt-1 text-xl font-medium text-gray-400 line-through md:text-2xl">
            {plan.price.original}
          </p>
        )
      } -->
      </div>
      <ul class="grid mt-8 text-left gap-y-4">
        <li
          v-for="item of plan.features"
          :key="item"
          class="flex items-start gap-3 text-gray-800">
          <LandingTick class-name="w-6 h-6" />
          <span>de {{ item.min }} à {{ item.max }} {{ item.label }}</span>
        </li>
      </ul>
      <div class="flex mt-8">
        <LandingLink
          :href="plan.to || '#'"
          block
          :style-name="plan.popular ? 'primary' : 'outline'">
          {{ plan.label || "Get Started" }}
        </LandingLink>
      </div>
    </div>
  </div>
</template>
