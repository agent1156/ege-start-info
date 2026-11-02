<script setup>
import HeaderTopBar from '~/components/header/HeaderTopBar.vue'
import AppHeader from '~/components/layout/AppHeader.vue'
import HeaderHero from '~/components/header/HeaderHero.vue'
import MaterialsSection from '~/components/sections/MaterialsSection.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import StartPath from '~/components/sections/StartPath.vue'
import ContactForm from '~/components/sections/ContactForm.vue'
</script>

<template>
  <div class="app">
    <HeaderTopBar />
    <AppHeader />
    <HeaderHero />
    <MaterialsSection />
    <StartPath />
    <ContactForm />

    <main class="app__main">
      <slot />
    </main>
    
    <AppFooter />
  </div>
</template>