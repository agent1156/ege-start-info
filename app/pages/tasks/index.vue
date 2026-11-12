<template>
  <main class="page">
    <div class="container">
      <!-- ===== ШАПКА ===== -->
      <header class="page-head">
        <div class="kicker">ЕГЭ · Информатика · 2026</div>
        <h1>Задания и первичные баллы</h1>
        <p>27 заданий · справочник тем · шкала оценивания</p>
      </header>

      <!-- ===== СОСТОЯНИЯ ЗАГРУЗКИ ===== -->
      <div v-if="pending" class="state">
        Загрузка данных с сервера...
      </div>
      
      <div v-else-if="error" class="state state--error">
        Ошибка загрузки. Проверьте, запущен ли Django на порту 8000.
      </div>

      <!-- ===== СЕТКА КАРТОЧЕК ===== -->
      <div v-else class="grid">
        <NuxtLink
          v-for="t in tasks"
          :key="t.number"
          class="task-card"
          :to="`/tasks/${t.slug}`" 
          :aria-label="`Задание ${t.number}: ${t.topic}. ${t.max_score} ${scoreWord(t.max_score)}`"
        >
          <div class="card__top">
            <div class="card__num">{{ String(t.number).padStart(2, '0') }}</div>
            <div class="card__score" :class="`s-${t.max_score}`">
              <strong>{{ t.max_score }}</strong>{{ scoreWord(t.max_score) }}
            </div>
          </div>
          <div class="card__topic">{{ t.topic }}</div>
        </NuxtLink>
      </div>

      <!-- ===== ЛЕГЕНДА ===== -->
      <div class="legend">
        <span class="legend__item">
          <span class="legend__dot" style="background:#94a3b8;"></span> 1 балл
        </span>
        <span class="legend__item">
          <span class="legend__dot" style="background:#10b981;"></span> 2 балла
        </span>
        <span class="legend__item">
          <span class="legend__dot" style="background:#f59e0b;"></span> 3 балла
        </span>
        <span class="legend__item">
          <span class="legend__dot" style="background:#ef4444;"></span> 4 балла
        </span>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// 1. SEO для страницы
useHead({
  title: 'Задания ЕГЭ по информатике — 27 заданий',
  meta: [
    { name: 'description', content: 'Справочник тем и первичных баллов за все 27 заданий ЕГЭ по информатике' }
  ]
})

// 2. Получаем настройки API
const config = useRuntimeConfig()

// 3. Интерфейс, описывающий ответ от Django
interface TaskNumber {
  number: number
  topic: string
  max_score: number
  slug: string
}

// 4. Загружаем данные с бэкенда
const { data: tasks, pending, error } = await useFetch<TaskNumber[]>(
  `${config.public.apiBase}/api/task-numbers/`
)

// 5. Функция для склонения слова "балл"
const scoreWord = (n: number) => {
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return 'балл'
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return 'балла'
  return 'баллов'
}
</script>

<style scoped>
/* =========================================
   ПЕРЕМЕННЫЕ И ОБЩИЕ СТИЛИ (Белая тема)
   ========================================= */
.page {
  --bg: #ffffff;
  --card: #ffffff;
  --card-hover: #f8fafc;
  --border: #e2e8f0;
  --border-strong: #cbd5e1;
  --ink: #0f172a;
  --ink-soft: #475569;
  --muted: #94a3b8;
  --accent: #2563eb;
  
  --font-text: 'ProggyVectorDotted', ui-monospace, 'Courier New', monospace;
  --font-head: 'IBM Plex Mono', ui-monospace, 'Courier New', monospace;

  background-color: var(--bg);
  color: var(--ink);
  font-family: var(--font-text);
  font-size: 15px;
  line-height: 1.6;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 48px 24px 72px;
}

/* =========================================
   ШАПКА
   ========================================= */
.page-head {
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
  position: relative;
}

.kicker {
  font-family: var(--font-head);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 12px;
}

.page-head h1 {
  margin: 0 0 12px;
  font-family: var(--font-head);
  font-size: 34px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--ink);
}

.page-head p {
  margin: 0;
  color: var(--ink-soft);
  font-family: var(--font-text);
  font-size: 15px;
}

/* =========================================
   СОСТОЯНИЯ
   ========================================= */
.state {
  padding: 40px;
  text-align: center;
  color: var(--ink-soft);
  font-family: var(--font-head);
  background: #f8fafc;
  border-radius: 8px;
  border: 1px dashed var(--border);
}
.state--error {
  color: #ef4444;
  border-color: #fca5a5;
  background: #fef2f2;
}

/* =========================================
   СЕТКА КАРТОЧЕК
   ========================================= */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 16px;
}

.task-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  aspect-ratio: 1 / 1;
  padding: 18px 16px 16px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: all .2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
}

.task-card:hover {
  background: var(--card-hover);
  border-color: var(--border-strong);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
}

.card__top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px dashed var(--border);
}

.card__num {
  font-family: var(--font-head);
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
  color: var(--accent);
}

.card__score {
  font-family: var(--font-head);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--muted);
  white-space: nowrap;
}

/* Цвета баллов */
.card__score.s-1 { color: #94a3b8; }
.card__score.s-2 { color: #10b981; }
.card__score.s-3 { color: #f59e0b; }
.card__score.s-4 { color: #ef4444; }

.card__score strong {
  font-size: 14px;
  margin-right: 2px;
}

.card__topic {
  font-family: var(--font-text);
  font-size: 13px;
  line-height: 1.45;
  color: var(--ink-soft);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* =========================================
   ЛЕГЕНДА
   ========================================= */
.legend {
  display: flex;
  justify-content: flex-start;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
  font-family: var(--font-head);
  font-size: 13px;
  color: var(--muted);
}

.legend__item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.legend__dot {
  width: 8px; height: 8px;
  display: inline-block;
  border-radius: 50%;
}

/* =========================================
   МОБИЛЬНАЯ АДАПТАЦИЯ
   ========================================= */
@media (max-width: 480px) {
  .container { padding: 32px 16px 48px; }
  .page-head h1 { font-size: 26px; }
  .page-head { margin-bottom: 24px; padding-bottom: 16px; }
  
  .grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .task-card { padding: 14px 12px 12px; }
  .card__num { font-size: 22px; }
  .card__topic { font-size: 12px; -webkit-line-clamp: 3; }
  .card__top { padding-bottom: 8px; margin-bottom: 8px; }
}
</style>