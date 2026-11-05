<template>
  <div class="news-wrapper">
    
    <!-- Шапка раздела с вкладками -->
    <div class="news-header">
      <h1 class="news-title">Новости</h1>
      
      <div class="news-filters">
        <button 
          v-for="tab in tabs" 
          :key="tab"
          class="filter-btn"
          :class="{ active: activeTab === tab }"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>
    </div>

    <!-- Список новостей -->
    <div class="news-list">
      <article 
        v-for="(item, index) in filteredNews" 
        :key="index" 
        class="news-item"
      >
        <h2 class="news-item__title">{{ item.title }}</h2>
        <p class="news-item__text">{{ item.text }}</p>
      </article>

      <div v-if="filteredNews.length === 0" class="empty-state">
        Новостей по этой категории пока нет.
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Состояние активной вкладки
const activeTab = ref('ЕГЭ')
const tabs = ['ЕГЭ', 'ОГЭ', 'ОБРАЗОВАНИЕ']

// Тестовые данные (в будущем берем из API)
const allNews = ref([
  {
    category: 'ЕГЭ',
    title: 'Новости для поступления в институты',
    text: 'Сегодня в столице начал работу инновационный образовательный центр, ориентированный на подготовку специалистов в сфере искусственного интеллекта и анализа данных. На площадке более 2000 квадратных метров разместились лаборатории робототехники, классы программирования и зоны для проектной работы. Отмечается, что до конца года обучение в центре пройдут свыше пяти тысяч человек. По словам организаторов, приоритет будет отдан практическим занятиям и стажировкам в ведущих IT-компаниях.'
  },
  {
    category: 'ЕГЭ',
    title: 'Новости для поступления в институты',
    text: 'Сегодня в столице начал работу инновационный образовательный центр, ориентированный на подготовку специалистов в сфере искусственного интеллекта и анализа данных. На площадке более 2000 квадратных метров разместились лаборатории робототехники, классы программирования и зоны для проектной работы. Отмечается, что до конца года обучение в центре пройдут свыше пяти тысяч человек. По словам организаторов, приоритет будет отдан практическим занятиям и стажировкам в ведущих IT-компаниях.'
  }
])

// Логика фильтрации по вкладкам
const filteredNews = computed(() => {
  return allNews.value.filter(item => item.category === activeTab.value)
})
</script>

<style scoped lang="scss">
@import '~/assets/styles/variables';

/* Общая белая карточка */
.news-wrapper {
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 20px;
  }
}

/* Шапка с фильтрами */
.news-header {
  margin-bottom: 40px;
}

.news-title {
  font-family: $font-heading;
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 16px;
}

.news-filters {
  display: flex;
  gap: 24px;
}

.filter-btn {
  font-family: $font-heading;
  font-size: 14px;
  font-weight: 600;
  color: #666;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s;
  
  &:hover {
    color: #005bff;
  }
  
  &.active {
    color: #1a1a1a;
    border-bottom: 2px solid #1a1a1a;
    padding-bottom: 4px;
  }
}

/* Список новостей */
.news-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.news-item {
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 40px;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &__title {
    font-family: $font-heading;
    font-size: 24px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 16px;

    @media (max-width: 600px) {
      font-size: 20px;
    }
  }

  &__text {
    font-family: $font-text;
    font-size: 15px;
    color: #666;
    line-height: 1.6;
    text-align: justify;
  }
}

.empty-state {
  text-align: center;
  color: #94a3b8;
  font-family: $font-text;
  padding: 40px 0;
}
</style>