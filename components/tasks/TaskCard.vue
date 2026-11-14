<template>
  <div class="task-card">
    
    <!-- ===== ШАПКА С БЕЙДЖАМИ ===== -->
    <div class="task-card__badges">
      <span class="badge badge--green">№ {{ task.externalId }}</span>
      <span class="badge badge--blue">{{ task.examType }} | {{ task.year }}</span>
    </div>

    <!-- ===== ТЕКСТ УСЛОВИЯ ===== -->
    <div class="task-card__content">
      <p class="task-card__text">{{ task.text }}</p>
      
      <!-- Картинка к задаче (выравнивание по левому краю) -->
      <div v-if="task.image" class="task-card__media">
        <img :src="task.image" :alt="'Задача №' + task.externalId" class="task-image" />
      </div>
    </div>

    <!-- ===== КНОПКИ ДЕЙСТВИЙ ===== -->
    <div class="task-card__actions">
      <!-- Кнопка "Показать ответ" -->
      <button 
        class="btn" 
        @click="showAnswer = !showAnswer"
      >
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
        </svg>
        {{ showAnswer ? 'Скрыть ответ' : 'Показать ответ' }}
      </button>
      
      <!-- Кнопка "Показать решение" (выводится только если есть видео) -->
      <button 
        v-if="task.videoUrl"
        class="btn btn--primary" 
        @click="showSolution = !showSolution"
      >
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        {{ showSolution ? 'Скрыть решение' : 'Показать решение' }}
      </button>
    </div>

    <!-- ===== БЛОК ОТВЕТА ===== -->
    <div v-if="showAnswer" class="task-card__answer-box">
      <span>Ответ: <strong>{{ task.answer }}</strong></span>
    </div>

    <!-- ===== БЛОК РЕШЕНИЯ (ВИДЕО) ===== -->
    <!-- Показываем только если есть видео и пользователь нажал "Показать решение" -->
    <div v-if="showSolution && task.videoUrl" class="task-card__video-box">
      <div class="video-placeholder" @click="playVideo">
        <button class="play-btn" aria-label="Воспроизвести видео">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// ===== ПРИНИМАЕМ ДАННЫЕ ИЗ БАЗЫ =====
const props = defineProps<{
  task: {
    id: number
    externalId: number
    examType: string
    year: number
    text: string
    image?: string
    answer: string
    videoUrl?: string
  }
}>()

// Состояния для кнопок
const showAnswer = ref(false)
const showSolution = ref(false)

// Открытие видео
const playVideo = () => {
  if (props.task.videoUrl) {
    window.open(props.task.videoUrl, '_blank')
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/styles/variables';

.task-card {
  background: #ffffff;
  border-radius: 4px;
  padding: 24px;
  border: 1px solid #e2e8f0;
  width: 100%; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);

  /* ===== БЕЙДЖИ ===== */
  &__badges {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }

  .badge {
    padding: 4px 10px;
    border-radius: 4px;
    font-family: $font-text;
    font-size: 12px;
    font-weight: 700;

    &--green {
      background-color: #00c4a7;
      color: #fff;
    }
    
    &--blue {
      background-color: #7cb0ff;
      color: #fff;
    }
  }

  /* ===== ТЕКСТ ===== */
  &__text {
    font-family: $font-text;
    font-size: 15px;
    line-height: 1.6;
    color: #333;
    margin-bottom: 24px;
  }

  /* ===== КАРТИНКА (ВЫРАВНИВАНИЕ ПО ЛЕВОМУ КРАЮ) ===== */
  &__media {
    margin-bottom: 30px;
    display: flex;
    justify-content: flex-start; /* Изменено с center на flex-start */
    
    .task-image {
      max-width: 100%;
      height: auto;
      display: block;
    }
  }

  /* ===== КНОПКИ ===== */
  &__actions {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
  }

  .btn {
    padding: 8px 16px; 
    border-radius: 8px; 
    font-family: $font-text;
    font-size: 13px; 
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 6px; 
    
    background: #ffffff;
    border: 1px solid #e2e8f0;
    color: #334155;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);

    &:hover {
      border-color: #cbd5e1;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
      transform: translateY(-1px);
    }

    &--primary {
      color: #005bff;
      border-color: #bfdbfe;

      &:hover {
        border-color: #93c5fd;
        background: #f0f7ff;
      }
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }

  /* ===== БЛОК ОТВЕТА ===== */
  &__answer-box {
    background-color: #f1f5f9;
    padding: 16px;
    border-radius: 4px;
    margin-bottom: 24px;
    font-family: $font-text;
    font-size: 15px;
    color: #333;

    strong {
      font-weight: 700;
    }
  }

  /* ===== БЛОК ВИДЕО ===== */
  &__video-box {
    margin-top: 24px;
  }

  .video-placeholder {
    width: 100%;
    aspect-ratio: 16 / 9;
    background-color: #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover .play-btn {
      transform: scale(1.05);
    }
  }

  .play-btn {
    width: 80px;
    height: 80px;
    background-color: #e31e24;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease;

    svg {
      width: 40px;
      height: 40px;
      color: #fff;
      margin-left: 6px; 
    }
  }
}

/* ===== АДАПТИВНОСТЬ ===== */
@media (max-width: 576px) {
  .task-card {
    padding: 16px;

    &__actions {
      flex-direction: column;
    }

    .btn {
      width: 100%;
      justify-content: center;
    }
  }
}
</style>