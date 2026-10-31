<script setup>
// Явно указываем Nuxt, откуда брать компоненты
import HeaderTopBar from '~/components/header/HeaderTopBar.vue'
import HeaderMainBar from '~/components/header/HeaderMainBar.vue'
import HeaderHero from '~/components/header/HeaderHero.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
</script>
<template>
  <div class="app">
    <HeaderTopBar />
    <HeaderMainBar />
    <HeaderHero />

    <main class="app__main">
      <slot />
    </main>
    
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">


.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__main {
    flex: 1;
    max-width: 1360px; 
    width: 100%;
    margin: 0 auto;
    padding: 24px 20px;
  }
}
</style>