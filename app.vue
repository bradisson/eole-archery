import nuxtConfig from './nuxt.config';
<template>
  <div>
    <NuxtLayout>
      <NavBar />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <Footer />
    </NuxtLayout>
  </div>
</template>
