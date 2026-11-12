<template>
  <div class="tasks-page">
    <div class="container">
      
      <!-- Хлебные крошки / Назад -->
      <NuxtLink to="/tasks" class="back-link">← Назад ко всем заданиям</NuxtLink>

      <!-- Заголовок задания (берем из первой задачи в списке) -->
      <header v-if="tasks.length > 0" class="task-page-header">
        <h1>Задание №{{ tasks[0].taskNumber }}</h1>
        <p>{{ tasks[0].taskTopic }}</p>
      </header>

      <!-- Панель фильтров -->
      <TaskFilters @apply="handleApplyFilters" />

      <!-- Состояние загрузки -->
      <div v-if="pending" class="empty-state">
        Загрузка задач...
      </div>

      <!-- Список задач -->
      <div v-else class="tasks-list">
        <div v-if="tasks.length === 0" class="empty-state">
          По выбранным фильтрам задач не найдено.
        </div>

        <!-- Ваш компонент карточки -->
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

// Получаем слаг из URL
const slug = computed(() => route.params.slug)

// ===== СОСТОЯНИЕ ФИЛЬТРОВ =====
const activeFilters = ref({
  year: '',
  type: '', 
  difficulty: '',
  taskNumber: ''
})

const handleApplyFilters = (newFilters: any) => {
  activeFilters.value = { ...newFilters }
}

// ===== ФОРМИРУЕМ ПАРАМЕТРЫ ЗАПРОСА =====
const queryParams = computed(() => {
  const params = new URLSearchParams()
  if (slug.value) params.append('task_slug', slug.value)
  if (activeFilters.value.year) params.append('year', activeFilters.value.year)
  return params.toString()
})

// ===== ЗАГРУЖАЕМ ДАННЫЕ С API =====
const { data, pending, error } = await useFetch<any>(
  () => `${config.public.apiBase}/api/tasks/?${queryParams.value}`,
  { watch: [queryParams] }
)

// ===== АДАПТИРУЕМ ДАННЫЕ =====
const tasks = computed(() => {
  if (!data.value) return []
  
  // Если API вернуло массив (как на вашем скриншоте) — берем его.
  // Если объект с пагинацией { results: [...] } — берем results.
  const rawTasks = Array.isArray(data.value) ? data.value : (data.value.results || [])
  
  if (rawTasks.length === 0) return []

  // Мапим поля из базы (task_number) в поля, которые ждет ваш TaskCard (taskNumber)
  return rawTasks.map((t: any) => ({
    id: t.id,
    externalId: t.external_id,
    taskNumber: t.task_number,
    taskTopic: t.task_topic,
    examType: 'ЕГЭ', 
    year: t.year,
    difficulty: 'Средний', 
    text: t.text,
    image: t.image,
    answer: t.answer
  }))
})

// SEO
useHead(() => ({
  title: tasks.value.length 
    ? `Задание №${tasks.value[0].taskNumber}: ${tasks.value[0].taskTopic} — ЕГЭ`
    : 'Загрузка задач...'
}))
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
.back-link:hover {
  text-decoration: underline;
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
  width: 100%; 
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