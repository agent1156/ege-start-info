<template>
  <div class="news-page">
    <div class="container">
      
      <!-- Вызов нашего компонента -->
      <NewsList />

    </div>
  </div>
</template>

<script setup lang="ts">
// Явный импорт компонента (на всякий случай, чтобы не было ошибок пути)
import NewsList from '~/components/news/NewsList.vue'
</script>

<style scoped lang="scss">
.news-page {
  padding: 40px 0;
  background: #f8f9fa;
  min-height: 80vh;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>