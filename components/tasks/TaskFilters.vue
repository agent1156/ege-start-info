<template>
  <div class="filters-panel">
    <!-- ГОД -->
    <div class="filter-group">
      <label class="filter-label">Год задачи</label>
      <select v-model="localFilters.year" @change="applyFilters" class="filter-select">
        <option value="">Все</option>
        <option v-for="y in options.years" :key="y" :value="String(y)">
          {{ y }}
        </option>
      </select>
    </div>

    <!-- ТИП -->
    <div class="filter-group">
      <label class="filter-label">Тип задачи</label>
      <select v-model="localFilters.type" @change="applyFilters" class="filter-select">
        <option value="">Все</option>
        <option v-for="t in options.types" :key="t" :value="t">
          {{ t }}
        </option>
      </select>
    </div>

    <!-- СЛОЖНОСТЬ -->
    <div class="filter-group">
      <label class="filter-label">Уровень сложности</label>
      <select v-model="localFilters.difficulty" @change="applyFilters" class="filter-select">
        <option value="">Все</option>
        <option v-for="d in options.difficulties" :key="d" :value="d">
          {{ d }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['apply'])
const config = useRuntimeConfig()

// Состояние выбранных фильтров
const localFilters = ref({
  year: '',
  type: '',
  difficulty: ''
})

// Загружаем доступные фильтры с бэкенда
const { data: filtersData } = await useFetch(`${config.public.apiBase}/api/filters/`)

// Если данные пришли, берем их, иначе ставим пустые массивы (чтобы не было ошибки)
const options = computed(() => {
  return filtersData.value || { years: [], types: [], difficulties: [] }
})

const applyFilters = () => {
  emit('apply', { ...localFilters.value })
}
</script>

<style scoped>
.filters-panel {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background: #fff;
  padding: 20px 24px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  margin-bottom: 30px;
  align-items: flex-end;
}
.filter-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 150px;
}
.filter-label {
  font-weight: 600;
  font-size: 11px;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.filter-select {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  color: #334155;
  cursor: pointer;
  outline: none;
  background-color: #f8fafc;
}
.filter-select:focus {
  border-color: #00c4a7;
  background-color: #fff;
}
</style>