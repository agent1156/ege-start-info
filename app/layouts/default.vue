<template>
  <div class="app">
    <HeaderTopBar />
    <HeaderMainBar />
    <HeaderHero />

    <main class="app__main">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/styles/variables';

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