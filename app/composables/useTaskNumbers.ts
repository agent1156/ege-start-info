export interface TaskNumber {
  number: number
  topic: string
  max_score: number
}

// Запасной вариант, если API не отвечает
const FALLBACK: TaskNumber[] = [
  { number: 1,  topic: 'Анализ информационных моделей (графы, таблицы)', max_score: 1 },
  { number: 2,  topic: 'Построение таблиц истинности логических выражений', max_score: 1 },
  { number: 3,  topic: 'Поиск информации в реляционных базах данных', max_score: 1 },
  { number: 4,  topic: 'Кодирование и декодирование. Условие Фано', max_score: 1 },
  { number: 5,  topic: 'Анализ алгоритмов для исполнителей', max_score: 1 },
  { number: 6,  topic: 'Анализ программ (циклы, условия)', max_score: 1 },
  { number: 7,  topic: 'Кодирование графической и звуковой информации', max_score: 1 },
  { number: 8,  topic: 'Комбинаторика, перебор слов и комбинаций', max_score: 1 },
  { number: 9,  topic: 'Электронные таблицы (обработка данных)', max_score: 1 },
  { number: 10, topic: 'Поиск и сортировка в текстовых документах', max_score: 1 },
  { number: 11, topic: 'Вычисление количества информации', max_score: 1 },
  { number: 12, topic: 'Алгоритмы для исполнителя. Замена символов', max_score: 2 },
  { number: 13, topic: 'IP-адресация в сетях. Маска подсети', max_score: 1 },
  { number: 14, topic: 'Позиционные системы счисления', max_score: 1 },
  { number: 15, topic: 'Логические уравнения и преобразования', max_score: 2 },
  { number: 16, topic: 'Рекуррентные соотношения и рекурсия', max_score: 1 },
  { number: 17, topic: 'Обработка целочисленной информации', max_score: 2 },
  { number: 18, topic: 'Анализ алгоритмов. Динамическое программирование', max_score: 2 },
  { number: 19, topic: 'Теория игр. Одна куча (выигрышная стратегия)', max_score: 1 },
  { number: 20, topic: 'Теория игр. Одна куча (два хода)', max_score: 1 },
  { number: 21, topic: 'Теория игр. Одна куча (три хода)', max_score: 1 },
  { number: 22, topic: 'Анализ многопоточных вычислений', max_score: 1 },
  { number: 23, topic: 'Динамическое программирование. Подсчёт путей', max_score: 1 },
  { number: 24, topic: 'Обработка символьной информации', max_score: 2 },
  { number: 25, topic: 'Обработка целочисленной информации (перебор)', max_score: 2 },
  { number: 26, topic: 'Обработка данных. Сортировка, поиск', max_score: 3 },
  { number: 27, topic: 'Программирование. Сложные алгоритмы', max_score: 4 },
]

export const useTaskNumbers = () => {
  const config = useRuntimeConfig()

  const { data, error } = useFetch<TaskNumber[]>(
    `${config.public.apiBase}/api/task-numbers/`,
    { default: () => FALLBACK },
  )

  const tasks = computed<TaskNumber[]>(() => {
    const list = data.value
    if (Array.isArray(list) && list.length > 0) return list
    return FALLBACK
  })

  return { tasks, error }
}