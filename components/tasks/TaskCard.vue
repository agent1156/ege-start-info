<template>
  <div class="task-card">
    
    <!-- ===== ШАПКА С БЕЙДЖАМИ ===== -->
    <div class="task-card__badges">
      <span class="badge badge--green">№ {{ task.id }}</span>
      <span class="badge badge--blue">{{ task.examType }} | {{ task.year }}</span>
    </div>

    <!-- ===== ТЕКСТ УСЛОВИЯ ===== -->
    <div class="task-card__content">
      <p class="task-card__text">{{ task.text }}</p>
      
      <!-- Картинка к задаче (таблица, граф и т.д.) -->
      <div v-if="task.image" class="task-card__media">
        <img :src="task.image" :alt="'Задача №' + task.id" class="task-image" />
      </div>
    </div>

    <!-- ===== КНОПКИ ДЕЙСТВИЙ ===== -->
    <div class="task-card__actions">
      <button 
        class="btn btn--blue" 
        @click="showAnswer = !showAnswer"
      >
        {{ showAnswer ? 'СКРЫТЬ ОТВЕТ' : 'ПОКАЗАТЬ ОТВЕТ' }}
      </button>
      
      <button 
        class="btn btn--blue" 
        @click="showSolution = !showSolution"
      >
        {{ showSolution ? 'СКРЫТЬ РЕШЕНИЕ' : 'ПОКАЗАТЬ РЕШЕНИЕ' }}
      </button>
    </div>

    <!-- ===== БЛОК ОТВЕТА ===== -->
    <div v-if="showAnswer" class="task-card__answer-box">
      <span>Ответ: <strong>{{ task.answer }}</strong></span>
    </div>

    <!-- ===== БЛОК РЕШЕНИЯ (ВИДЕО) ===== -->
    <div v-if="showSolution" class="task-card__video-box">
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

// Заглушка для видео (позже можно вставить открытие модалки или iframe)
const playVideo = () => {
  if (props.task.videoUrl) {
    window.open(props.task.videoUrl, '_blank')
  } else {
    alert('Видео-решение скоро появится!')
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
  max-width: 900px;
  margin: 0 auto 30px auto;
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

  /* ===== КАРТИНКА ===== */
  &__media {
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    
    .task-image {
      max-width: 100%;
      height: auto;
      display: block;
    }
  }

  /* ===== КНОПКИ ===== */
  &__actions {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }

  .btn {
    padding: 12px 30px;
    border-radius: 4px;
    font-family: $font-text;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    border: none;
    transition: background-color 0.2s;
    text-transform: uppercase;

    &--blue {
      background-color: #7cb0ff;
      color: #ffffff;

      &:hover {
        background-color: #5c98e6;
      }
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
    }
  }
}
</style>