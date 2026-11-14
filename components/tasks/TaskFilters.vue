<template>
  <div class="filters-panel">
    <div class="filters-row">
      
      <div class="filter-item">
        <label>Год задачи</label>
        <select v-model="filters.year">
          <option value="">Все</option>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
        </select>
      </div>

      <div class="filter-item">
        <label>Тип задачи</label>
        <select v-model="filters.type">
          <option value="">Все</option>
          <option value="ЕГЭ">ЕГЭ</option>
          <option value="ОГЭ">ОГЭ</option>
        </select>
      </div>

      <div class="filter-item">
        <label>Уровень сложности</label>
        <select v-model="filters.difficulty">
          <option value="">Все</option>
          <option value="Базовый">Базовый</option>
          <option value="Средний">Средний</option>
          <option value="Высокий">Высокий</option>
        </select>
      </div>

      

      <div class="filter-item filter-item--btn">
        <button class="btn-apply" @click="$emit('apply', filters)">Применить</button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const filters = ref({
  year: '',
  type: '',
  difficulty: '',
  taskNumber: ''
})

defineEmits(['apply'])
</script>

<style scoped lang="scss">
@import '~/assets/styles/variables';

.filters-panel {
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
}

.filters-row {
  display: flex;
  gap: 15px;
  align-items: flex-end;
  flex-wrap: wrap;
}

.filter-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 140px;

  label {
    font-family: $font-heading;
    font-size: 11px;
    font-weight: 600;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  select {
    padding: 10px 12px;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    font-family: $font-heading;
    font-size: 14px;
    color: #333;
    background-color: #fff;
    outline: none;
    cursor: pointer;
    
    appearance: none; 
    -webkit-appearance: none;
    -moz-appearance: none;
    
    padding-right: 40px; 
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23333333%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 10px;
  }

  &--btn {
    flex: 0 0 auto;
  }
}

.btn-apply {
  background: #00c4a7;
  color: #fff;
  border: none;
  padding: 10px 24px;
  border-radius: 4px;
  font-family: $font-heading;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  height: 40px;

  &:hover {
    background: #00a88b;
  }
}

@media (max-width: 768px) {
  .filter-item { flex: 1 1 100%; }
  .btn-apply { width: 100%; }
}
</style>