<template>
  <section class="schedule-section">
    <div class="container">
         <!-- ЗАГОЛОВОК СТРАНИЦЫ -->
      <div class="schedule-page-header">
        <h1 class="schedule-page-title">Расписание занятий</h1>
        <p class="schedule-page-subtitle">Актуальное расписание учебных групп</p>
      </div>
      
      <!-- Карточка календаря -->
      <div class="schedule-card">
        
        <!-- Шапка с навигацией -->
        <div class="schedule-header">
          <h2 class="schedule-title">{{ monthName }} {{ currentYear }}</h2>
          
          <div class="schedule-nav">
            <button class="nav-btn" @click="changeMonth(-1)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button class="nav-btn today-btn" @click="goToToday">Сегодня</button>
            <button class="nav-btn" @click="changeMonth(1)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <!-- Сетка календаря -->
        <div class="calendar-grid">
          
          <!-- Дни недели -->
          <div v-for="day in weekDays" :key="day" class="calendar-day-name">
            {{ day }}
          </div>

          <!-- Ячейки дней -->
          <div 
            v-for="(day, index) in calendarDays" 
            :key="index"
            class="calendar-day"
            :class="{ 
              'other-month': !day.isCurrentMonth,
              'today': isToday(day.date)
            }"
          >
            <span class="day-number">{{ day.date.getDate() }}</span>
            
            <!-- События -->
            <div class="events-wrapper">
              <div 
                v-for="group in getGroupsForDay(day.date)" 
                :key="group.id"
                class="event"
                :class="group.type"
              >
                <span class="event-title">{{ group.name }}</span>
                <span class="event-time">{{ group.time }}</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// ===== ТЕКУЩАЯ ДАТА =====
const currentDate = ref(new Date())

const currentYear = computed(() => currentDate.value.getFullYear())
const currentMonth = computed(() => currentDate.value.getMonth())

const weekDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

const monthName = computed(() => {
  const date = new Date(currentYear.value, currentMonth.value, 1)
  const name = date.toLocaleString('ru-RU', { month: 'long' })
  return name.charAt(0).toUpperCase() + name.slice(1)
})

// ===== ГЕНЕРАЦИЯ СЕТКИ =====
const calendarDays = computed(() => {
  const year = currentYear.value
  const month = currentMonth.value

  const firstDay = new Date(year, month, 1)
  let startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1 
  
  const lastDay = new Date(year, month + 1, 0)
  const totalDays = lastDay.getDate()
  const prevMonthLastDay = new Date(year, month, 0).getDate()
  
  const days = []

  // Предыдущий месяц
  for (let i = startDay - 1; i >= 0; i--) {
    days.push({
      date: new Date(year, month - 1, prevMonthLastDay - i),
      isCurrentMonth: false
    })
  }

  // Текущий месяц
  for (let i = 1; i <= totalDays; i++) {
    days.push({
      date: new Date(year, month, i),
      isCurrentMonth: true
    })
  }

  // Следующий месяц
  const remainingDays = 42 - days.length
  for (let i = 1; i <= remainingDays; i++) {
    days.push({
      date: new Date(year, month + 1, i),
      isCurrentMonth: false
    })
  }

  return days
})

// ===== НАВИГАЦИЯ =====
const changeMonth = (offset: number) => {
  const newDate = new Date(currentDate.value)
  newDate.setMonth(newDate.getMonth() + offset)
  currentDate.value = newDate
}

const goToToday = () => {
  currentDate.value = new Date()
}

const isToday = (date: Date) => {
  const today = new Date()
  return date.getDate() === today.getDate() &&
         date.getMonth() === today.getMonth() &&
         date.getFullYear() === today.getFullYear()
}

// ===== РАСПИСАНИЕ ГРУПП =====
// 1 - Понедельник, 2 - Вторник, 3 - Среда, 4 - Четверг
const groups = [
  {
    id: 1,
    name: 'Группа 1',
    time: '15:00',
    days: [1, 3], // Пн, Ср
    type: 'green'
  },
  {
    id: 2,
    name: 'Группа 2',
    time: '16:30',
    days: [1, 3], // Пн, Ср
    type: 'blue'
  },
  {
    id: 3,
    name: 'Группа 3',
    time: '14:00',
    days: [2, 4], // Вт, Чт
    type: 'red'
  },
  {
    id: 4,
    name: 'Группа 4',
    time: '19:00',
    days: [2, 4], // Вт, Чт
    type: 'gray'
  }
]

// Функция проверяет: есть ли в этот день занятия
const getGroupsForDay = (date: Date) => {
  let dayOfWeek = date.getDay()
  if (dayOfWeek === 0) dayOfWeek = 7 // Воскресенье

  // Возвращаем группы, у которых в расписании есть этот день недели
  // Сортируем по времени, чтобы расписание шло по порядку
  return groups
    .filter(group => group.days.includes(dayOfWeek))
    .sort((a, b) => a.time.localeCompare(b.time))
}
</script>

<style scoped lang="scss">
@import '~/assets/styles/variables';

/* ===== КОНТЕЙНЕР И ОБЩАЯ СЕКЦИЯ ===== */
.schedule-section {
  padding: 60px 0;
  background: #f8f9fa;
}
.schedule-page-header{
    margin-bottom: 30px;
}
.container {
  max-width: 1170px;
  margin: 0 auto;
  #padding: 0 20px;
}

/* ===== КАРТОЧКА КАЛЕНДАРЯ ===== */
.schedule-card {
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}

/* ===== ШАПКА ===== */
.schedule-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  border-bottom: 1px solid #e2e8f0;
  background: #fff;
}

.schedule-title {
  font-family: $font-heading;
  font-size: 24px;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0;
}

.schedule-nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  color: #64748b;
  transition: all 0.2s;

  svg { width: 20px; height: 20px; }

  &:hover {
    background: #f8fafc;
    color: #1a1a1a;
    border-color: #cbd5e1;
  }
}

.today-btn {
  width: auto;
  padding: 0 16px;
  font-family: $font-heading;
  font-size: 14px;
  font-weight: 600;
  color: #005bff;
  border-color: #bfdbfe;

  &:hover {
    background: #e6f0ff;
    color: #0047cc;
    border-color: #93c5fd;
  }
}

/* ===== СЕТКА КАЛЕНДАРЯ ===== */
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: #e2e8f0;
  gap: 1px;
}

.calendar-day-name {
  background: #f8fafc;
  padding: 16px 12px;
  text-align: center;
  font-family: $font-heading;
  font-size: 12px;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
}

.calendar-day {
  background: #fff;
  min-height: 120px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: background 0.2s;

  &:hover {
    background: #f8fafc;
  }

  &.other-month {
    background: #fafafa;
    .day-number { color: #cbd5e1; }
  }

  &.today {
    background: #f0f7ff;
    .day-number {
      color: #fff;
      background: #005bff;
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
  }
}

.day-number {
  font-family: $font-text;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 4px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
}

/* ===== СОБЫТИЯ ===== */
.events-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.event {
  padding: 6px 8px;
  border-radius: 6px;
  font-family: $font-text;
  font-size: 11px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 2px;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s;
  border-left: 3px solid transparent;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.9;
  }

  &-title {
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &-time {
    font-size: 10px;
    opacity: 0.8;
  }

  /* Цвета групп */
  &.green {
    background: #ecfdf5;
    color: #047857;
    border-left-color: #10b981;
  }
  &.blue {
    background: #eff6ff;
    color: #1d4ed8;
    border-left-color: #3b82f6;
  }
  &.red {
    background: #fef2f2;
    color: #b91c1c;
    border-left-color: #ef4444;
  }
  &.gray {
    background: #f1f5f9;
    color: #334155;
    border-left-color: #64748b;
  }
}

/* ===== АДАПТИВНОСТЬ ===== */
@media (max-width: 768px) {
  .schedule-header {
    padding: 16px;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .calendar-day {
    min-height: 90px;
    padding: 8px;
  }

  .calendar-day-name {
    padding: 10px 4px;
    font-size: 10px;
  }

  .event {
    padding: 4px;
    font-size: 10px;
    
    &-time {
      display: none; /* Скрываем время на мобильных, чтобы влезло */
    }
  }
}
</style>