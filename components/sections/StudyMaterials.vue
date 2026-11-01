<template>
  <section class="study-materials">
    <div class="container">
      <h2 class="study-materials__title">ОБУЧАЮЩИЕ МАТЕРИАЛЫ</h2>
      
      <div class="study-materials__grid">
        
        <!-- Карточка 1: ЕГЭ -->
        <div class="material-card">
          <div class="material-card__header material-card__header--ege">
            <span>ЕГЭ</span>
          </div>
          <div class="material-card__body">
            <p class="material-card__desc">
              СЕРИЯ ВИДЕО УРОКОВ ПО ПОДГОТОВКЕ К ЕГЭ ПО ИНФОРМАТИКЕ ДЛЯ 10, 11 КЛАССОВ
            </p>
            <NuxtLink to="/ege" class="material-card__btn">ПЕРЕЙТИ</NuxtLink>
          </div>
        </div>

        <!-- Карточка 2: ОГЭ -->
        <div class="material-card">
          <div class="material-card__header material-card__header--oge">
            <span>ОГЭ</span>
          </div>
          <div class="material-card__body">
            <p class="material-card__desc">
              СЕРИЯ ВИДЕО УРОКОВ ПО ПОДГОТОВКЕ К ОГЭ ПО ИНФОРМАТИКЕ ДЛЯ 9 КЛАССОВ
            </p>
            <NuxtLink to="/oge" class="material-card__btn">ПЕРЕЙТИ</NuxtLink>
          </div>
        </div>

        <!-- Карточка 3: ПРОГА -->
        <div class="material-card">
          <div class="material-card__header material-card__header--proga">
            <span>ПРОГА</span>
          </div>
          <div class="material-card__body">
            <p class="material-card__desc">
              ОСНОВЫ ПРОГРАММИРОВАНИЯ НА ЯЗЫКЕ PYTHON
            </p>
            <NuxtLink to="/proga" class="material-card__btn">ПЕРЕЙТИ</NuxtLink>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '~/assets/styles/variables';

.study-materials {
  background-color: #f4f8fb; /* Светло-голубой фон секции */
  padding: 60px 0;

  &__title {
    font-family: $font-heading;
    font-size: 24px;
    font-weight: 800;
    color: #333;
    text-transform: uppercase;
    margin-bottom: 40px;
    letter-spacing: 1px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
}

/* ===== КАРТОЧКА ===== */
.material-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); /* Легкая тень */

  &__header {
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    span {
      font-family: $font-heading;
      font-size: 48px;
      font-weight: 800;
      color: #fff;
      letter-spacing: 8px; /* Разрядка как в макете */
      text-transform: uppercase;
    }

    /* Цвета заголовков */
    &--ege {
      background-color: #00c4a7; /* Бирюзовый */
    }
    &--oge {
      background-color: #ff8c00; /* Оранжевый */
    }
    &--proga {
      background-color: #00b2e2; /* Голубой */
    }
  }

  &__body {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex: 1; /* Растягиваем на всю доступную высоту */
    justify-content: space-between; /* Прижимаем кнопку к низу */
  }

  &__desc {
    font-family: $font-text; /* Пиксельный шрифт */
    font-size: 14px;
    line-height: 1.6;
    color: #555;
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  &__btn {
    display: block;
    width: 100%;
    background-color: #5c5cff; /* Фиолетовый */
    color: #fff;
    text-align: center;
    padding: 14px;
    border-radius: 8px;
    font-family: $font-heading;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #4a4ae0; /* Темнеет при наведении */
    }
  }
}
</style>