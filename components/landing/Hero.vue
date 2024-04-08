<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/hero.jpg"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512">
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        Fabrication d'arcs traditionnel
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Facture d'arc traditionnel par Yvan PINET.<wbr> Eole Archery propose des arcs traditionnel de qualité.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="/arcs"
          rel="noopener">
          Les Arcs
        </LandingLink>
        <LandingLink
          size="lg"
          style-name="outline"
          rel="noopener"
          href="atelier">
          L'atelier
        </LandingLink>
      </div>
    </div>
  </main>
</template>
