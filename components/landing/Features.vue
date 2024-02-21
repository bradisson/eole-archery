<script setup>
const features = [
  {
    title: "Bois noble",
    description:
      "Fort d'un inventaire de plus x essences d'arbre, chaque arc est unique.",
    icon: "game-icons:wood-beam",
  },
  {
    title: "",
    description: "",
    icon: "bx:bxs-window-alt",
  },
  {
    title: "",
    description: "",
    icon: "bx:bxs-data",
  },
  {
    title: "",
    description: "",
    icon: "bx:bxs-bot",
  },
  {
    title: "",
    description: "",
    icon: "bx:bxs-file-find",
  },
  {
    title: "",
    description: "",
    icon: "bx:bxs-user",
  },
];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Plus de 30 d'expériences dans la facture d'arcs
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      Eole archery dispose d'un vaste choix de compétences et avantage pour
      produire des arc toujours plus beau et qualitatif.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
