<template>
  <article class="article">
    
    <!-- Шапка статьи -->
    <header class="article__header">
      <div class="article__category">{{ article.category }}</div>
      <h1 class="article__title">{{ article.title }}</h1>
      
      <div class="article__meta">
        <span class="article__date">{{ article.date }}</span>
        <span class="article__author">Автор: {{ article.author }}</span>
      </div>
    </header>

    <!-- Обложка (если есть) -->
    <div v-if="article.image" class="article__cover">
      <img :src="article.image" :alt="article.title" />
    </div>

    <!-- Основной текст -->
    <div class="article__content">
      <!-- В реальности здесь будет v-html, если текст приходит с тегами из базы -->
      <p v-for="(paragraph, index) in article.paragraphs" :key="index">
        {{ paragraph }}
      </p>
    </div>

    <!-- Кнопка "Назад" -->
    <div class="article__footer">
      <NuxtLink to="/news" class="btn-back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Вернуться к новостям
      </NuxtLink>
    </div>

  </article>
</template>

<script setup lang="ts">
// Принимаем объект статьи
defineProps<{
  article: {
    category: string
    title: string
    date: string
    author: string
    image?: string
    paragraphs: string[]
  }
}>()
</script>

<style scoped lang="scss">
@import '~/assets/styles/variables';

.article {
  background: #ffffff;
  border-radius: 8px;
  padding: 40px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 24px 20px;
  }

  /* Шапка */
  &__header {
    margin-bottom: 30px;
  }

  &__category {
    display: inline-block;
    font-family: $font-heading;
    font-size: 12px;
    font-weight: 700;
    color: #005bff;
    background: #e6f0ff;
    padding: 4px 12px;
    border-radius: 4px;
    margin-bottom: 16px;
    text-transform: uppercase;
  }

  &__title {
    font-family: $font-heading;
    font-size: 36px;
    font-weight: 800;
    color: #1a1a1a;
    line-height: 1.2;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  &__meta {
    display: flex;
    gap: 20px;
    font-family: $font-heading;
    font-size: 13px;
    color: #94a3b8;
  }

  /* Обложка */
  &__cover {
    margin-bottom: 40px;
    border-radius: 8px;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
      display: block;
      max-height: 500px;
      object-fit: cover;
    }
  }

  /* Текст */
  &__content {
    font-family: $font-text;
    font-size: 17px;
    line-height: 1.8;
    color: #334155;

    p {
      margin-bottom: 24px;
      text-align: justify;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  /* Подвал */
  &__footer {
    margin-top: 50px;
    padding-top: 24px;
    border-top: 1px solid #e2e8f0;
  }
}

/* Кнопка назад */
.btn-back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: $font-heading;
  font-size: 14px;
  font-weight: 600;
  color: #666;
  text-decoration: none;
  transition: color 0.2s;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    color: #1a1a1a;
  }
}
</style>