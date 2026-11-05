<template>
  <div class="tasks-page">
    <div class="container">
      
      <!-- Панель фильтров -->
      <TaskFilters @apply="handleApplyFilters" />

      <!-- Список задач -->
      <div class="tasks-list">
        <div v-if="filteredTasks.length === 0" class="empty-state">
          По выбранным фильтрам задач не найдено.
        </div>

        <TaskCard 
          v-for="task in filteredTasks" 
          :key="task.id" 
          :task="task" 
        />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

import { ref, computed } from 'vue'
// Используем относительные пути
import TaskFilters from '../../../components/tasks/TaskFilters.vue'
import TaskCard from '../../../components/tasks/TaskCard.vue'

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

// ===== ТЕСТОВЫЕ ДАННЫЕ (Позже заменим на API) =====
const allTasks = ref([
  {
    id: 9167,
    taskNumber: 1,
    examType: 'ЕГЭ',
    year: 2026,
    difficulty: 'Средний',
    text: 'В некоторой социальной сети пользователи обмениваются сообщениями. У пользователей есть имена и соответствующие им в сети идентификаторы. На графе отображено взаимодействие девяти из пользователей в течение дня. В матрице смежности отображается активность пользователей в виде общего количества переданных друг другу сообщений.',
    image: '/images/task-9167.png',
    answer: '10'
  },
  {
    id: 9168,
    taskNumber: 1, 
    examType: 'ЕГЭ',
    year: 2025,
    difficulty: 'Базовый',
    text: 'На рисунке схема дорог Н-ского района изображена в виде графа...',
    image: '/images/task-9167.png',
    answer: '12'
  }
])

// ===== ЛОГИКА ФИЛЬТРАЦИИ =====
const filteredTasks = computed(() => {
  return allTasks.value.filter(task => {
    if (activeFilters.value.year && String(task.year) !== activeFilters.value.year) return false
    if (activeFilters.value.type && task.examType !== activeFilters.value.type) return false
    if (activeFilters.value.difficulty && task.difficulty !== activeFilters.value.difficulty) return false
    if (activeFilters.value.taskNumber && String(task.taskNumber) !== activeFilters.value.taskNumber) return false
    return true
  })
})
</script>

<style scoped lang="scss">
@import '~/assets/styles/variables';

.tasks-page {
  padding: 40px 0;
  background: #f8f9fa;
  min-height: 80vh;
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