<script setup lang="ts">
interface TaskNumber {
  number: number
  topic: string
  max_score: number
}

const props = defineProps<{ tasks: TaskNumber[] }>()

const router = useRouter()

const plural = (n: number, one: string, few: string, many: string): string => {
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return one
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few
  return many
}

const scoreWord = (n: number) => plural(n, 'балл', 'балла', 'баллов')
const pad2 = (n: number) => String(n).padStart(2, '0')

const openTask = (number: number) => {
  router.push({ path: '/tasks', query: { task_number: number } })
}
</script>

<template>
  <div class="task-grid">
    <a
      v-for="t in props.tasks"
      :key="t.number"
      class="task-card"
      :href="`/tasks?task_number=${t.number}`"
      :aria-label="`Задание ${t.number}: ${t.topic}. ${t.max_score} ${scoreWord(t.max_score)}`"
      @click.prevent="openTask(t.number)"
    >
      <div class="card__top">
        <div class="card__num">{{ pad2(t.number) }}</div>
        <div class="card__score" :class="`s-${Math.min(t.max_score, 4)}`">
          <strong>{{ t.max_score }}</strong>{{ scoreWord(t.max_score) }}
        </div>
      </div>

      <div class="card__topic">{{ t.topic }}</div>
    </a>
  </div>
</template>

<style scoped>
/* ===== локальные переменные (не зависят от глобальных) ===== */
.task-grid {
  --paper: #f6f1e8;
  --card: #fffdf8;
  --card-hover: #ffffff;
  --border: #e7dfd0;
  --border-strong: #d4c8b3;
  --ink: #2b2620;
  --ink-soft: #5a5148;
  --muted: #8a8074;
  --accent: #b45309;
  --green: #15803d;

  --font-text: 'ProggyVectorDotted', ui-monospace, 'Courier New', monospace;
  --font-head: 'IBM Plex Mono', ui-monospace, 'Courier New', monospace;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 14px;
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
  border-radius: 2px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: background .16s ease, border-color .16s ease,
              transform .16s ease, box-shadow .16s ease;
}

.task-card:hover {
  background: var(--card-hover);
  border-color: var(--border-strong);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(43, 38, 32, 0.06);
}

.task-card:focus-visible {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(180, 83, 9, 0.15);
}

.card__top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px dashed var(--border);
}

.card__num {
  font-family: var(--font-head);
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
  color: var(--ink);
  letter-spacing: -0.02em;
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

.card__score.s-1 { color: var(--muted); }
.card__score.s-2 { color: var(--green); }
.card__score.s-3 { color: #a16207; }
.card__score.s-4 { color: var(--accent); }

.card__score strong {
  font-size: 13px;
  margin-right: 3px;
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

@media (max-width: 480px) {
  .task-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .card__num { font-size: 22px; }
  .card__topic { font-size: 12px; -webkit-line-clamp: 3; }
  .card__top { padding-bottom: 8px; margin-bottom: 8px; }
}
</style>