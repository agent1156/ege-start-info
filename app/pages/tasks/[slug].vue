<template>
  <div class="tasks-page">
    <div class="container">
      
      <NuxtLink to="/tasks" class="back-link">← Назад ко всем заданиям</NuxtLink>

      <header v-if="tasks.length > 0" class="task-page-header">
        <h1>Задание №{{ tasks[0].taskNumber }}</h1>
        <p>{{ tasks[0].taskTopic }}</p>
      </header>

      <!-- Фильтры -->
      <TaskFilters @apply="handleApplyFilters" />

      <!-- Загрузка -->
      <div v-if="pending" class="empty-state">
        Загрузка задач...
      </div>

      <!-- Список -->
      <div v-else class="tasks-list">
        <div v-if="tasks.length === 0" class="empty-state">
          По выбранным фильтрам задач не найдено.
        </div>

        <TaskCard 
          v-for="task in tasks" 
          :key="task.id" 
          :task="task" 
        />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import TaskFilters from '~/components/tasks/TaskFilters.vue'
import TaskCard from '~/components/tasks/TaskCard.vue'

const route = useRoute()
const config = useRuntimeConfig()
const slug = computed(() => route.params.slug)

// Состояние фильтров (ДОБАВИЛИ type и difficulty)
const activeFilters = ref({
  year: '',
  type: '',
  difficulty: ''
})

const handleApplyFilters = (newFilters: any) => {
  activeFilters.value = { ...newFilters }
}

// Формируем URL
const apiUrl = computed(() => {
  let url = `${config.public.apiBase}/api/tasks/?task_slug=${slug.value}`
  if (activeFilters.value.year) url += `&year=${activeFilters.value.year}`
  if (activeFilters.value.type) url += `&type=${activeFilters.value.type}`
  if (activeFilters.value.difficulty) url += `&difficulty=${activeFilters.value.difficulty}`
  return url
})

// Запрос
const { data, pending, error } = await useFetch(apiUrl)

// Маппинг данных
const tasks = computed(() => {
  if (!data.value) return []
  const rawTasks = Array.isArray(data.value) ? data.value : (data.value.results || [])
  
  return rawTasks.map((t: any) => ({
    id: t.id,
    externalId: t.external_id,
    taskNumber: t.task_number,
    taskTopic: t.task_topic,
    // ВАЖНО: берем тип из API (t.type_name), а не хардкодим 'ЕГЭ'
    examType: t.type_name || '—', 
    year: t.year,
    difficulty: t.difficulty_name || 'Средний', 
    text: t.text,
    image: t.image,
    answer: t.answer,
    attachment: t.attachment
  }))
})
</script>

<style scoped lang="scss">
@import '~/assets/styles/variables';

.tasks-page {
  padding: 40px 0;
  background: #f8f9fa;
  min-height: 80vh;
}

.back-link {
  display: inline-block;
  margin-bottom: 20px;
  font-family: $font-heading;
  font-size: 14px;
  color: #2563eb;
  text-decoration: none;
}
.task-page-header {
  margin-bottom: 30px;
  h1 {
    font-family: $font-heading;
    font-size: 32px;
    margin: 0 0 8px;
    color: #0f172a;
  }
  p {
    font-size: 16px;
    color: #475569;
    margin: 0;
  }
}
.tasks-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.empty-state {
  text-align: center;
  padding: 40px;
  background: #fff;
  border-radius: 8px;
  color: #666;
  border: 1px solid #e2e8f0;
  font-family: $font-text;
}
</style>