<script setup>
import HeaderTopBar from '~/components/header/HeaderTopBar.vue'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
</script>

<template>
  <div class="app">
    <!-- Шапка -->
    <HeaderTopBar />
    <AppHeader />
    
    <!-- Сюда вставляются страницы (главная, каталог, задачи и т.д.) -->
    <main class="app__main">
      <slot />
    </main>
    
    <!-- Футер -->
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8f9fa;

  &__main {
    flex: 1;
    width: 100%;
  }
}
</style>