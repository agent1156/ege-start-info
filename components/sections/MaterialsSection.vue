<template>
  <section class="study-materials">
    <div class="container">
      
      <div class="study-materials__header">
        <h2 class="study-materials__title">Обучающие материалы</h2>
        <p class="study-materials__subtitle">Выберите направление и начните свой путь в IT прямо сейчас</p>
      </div>
      
      <div class="bento-grid">
        
        <!-- Карточка 1: ЕГЭ -->
        <NuxtLink to="/ege" class="bento-card bento-card--ege">
          <span class="bento-card__number">01</span>
          <div class="bento-card__top">
            <span class="bento-card__tag tag-ege">ЕГЭ</span>
          </div>
          <div class="bento-card__content">
            <h3 class="bento-card__title">Подготовка к ЕГЭ</h3>
            <p class="bento-card__desc">Серия видео уроков по подготовке к ЕГЭ по информатике для 10 и 11 классов.</p>
          </div>
          <div class="bento-card__bottom">
            <div class="bento-card__arrow">
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>
        </NuxtLink>

        <!-- Карточка 2: ОГЭ -->
        <NuxtLink to="/oge" class="bento-card bento-card--oge">
          <span class="bento-card__number">02</span>
          <div class="bento-card__top">
            <span class="bento-card__tag tag-oge">ОГЭ</span>
          </div>
          <div class="bento-card__content">
            <h3 class="bento-card__title">Подготовка к ОГЭ</h3>
            <p class="bento-card__desc">Серия видео уроков по подготовке к ОГЭ по информатике для 9 классов.</p>
          </div>
          <div class="bento-card__bottom">
            <div class="bento-card__arrow">
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>
        </NuxtLink>

        <!-- Карточка 3: ПРОГА (широкая) -->
        <NuxtLink to="/proga" class="bento-card bento-card--proga bento-card--wide">
          <span class="bento-card__number">03</span>
          <div class="bento-card__top">
            <span class="bento-card__tag tag-proga">ПРОГРА</span>
          </div>
          <div class="bento-card__content">
            <h3 class="bento-card__title">Основы программирования</h3>
            <p class="bento-card__desc">Изучите Python с нуля. Переменные, циклы, функции и первые проекты. Идеальный старт для будущих разработчиков.</p>
          </div>
          <div class="bento-card__bottom">
            <div class="bento-card__arrow">
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>
        </NuxtLink>

      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '~/assets/styles/variables';

/* Переменные, которых может не быть в вашем глобальном файле */
$accent-color: #5c5cff;

.study-materials {
  background-color: #f4f7f9;
  padding: 100px 0;
  position: relative;
  overflow: hidden;

  /* Легкое декоративное свечение на фоне */
  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(92, 92, 255, 0.05) 0%, rgba(0, 0, 0, 0) 70%);
    z-index: 0;
    pointer-events: none;
  }

  &__header {
    text-align: center;
    margin-bottom: 60px;
    position: relative;
    z-index: 1;
  }

  &__title {
    font-family: $font-heading;
    font-size: 42px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: -1px;
    margin-bottom: 16px;
    color: #1a1a1a;
  }

  &__subtitle {
    color: #666;
    font-size: 16px;
    max-width: 500px;
    margin: 0 auto;
  }
}

/* ===== BENTO GRID ===== */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(280px, auto);
  gap: 24px;
  position: relative;
  z-index: 1;
}

/* ===== КАРТОЧКА ===== */
.bento-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  text-decoration: none;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    border-color: #cbd5e1;
  }

  &--wide {
    grid-column: span 2;

    .bento-card__title {
      font-size: 48px;
    }
    .bento-card__desc {
      max-width: 60%;
    }
  }

  /* Индивидуальные цвета при наведении */
  &--ege:hover {
    box-shadow: 0 20px 40px rgba(0, 200, 160, 0.15);
    border-color: rgba(0, 200, 160, 0.3);
  }
  &--oge:hover {
    box-shadow: 0 20px 40px rgba(255, 140, 0, 0.15);
    border-color: rgba(255, 140, 0, 0.3);
  }
  &--proga:hover {
    box-shadow: 0 20px 40px rgba(0, 150, 255, 0.15);
    border-color: rgba(0, 150, 255, 0.3);
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 40px;
  }

  &__number {
    font-family: $font-heading;
    font-size: 80px;
    font-weight: 800;
    line-height: 1;
    color: rgba(0, 0, 0, 0.03);
    position: absolute;
    top: 20px;
    right: 30px;
    user-select: none;
  }

  &__tag {
    display: inline-block;
    padding: 6px 14px;
    border-radius: 20px;
    font-family: $font-heading;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  &__title {
    font-family: $font-heading;
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 12px;
    color: #1a1a1a;
  }

  &__desc {
    font-size: 15px;
    color: #666;
    line-height: 1.5;
    max-width: 80%;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 40px;
  }

  &__arrow {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: $accent-color;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    flex-shrink: 0;
    box-shadow: 0 4px 15px rgba(92, 92, 255, 0.3);

    svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }
  }
}

/* При наведении на карточку меняем стрелку */
.bento-card:hover .bento-card__arrow {
  background: #4a4ae0;
  transform: rotate(-45deg) scale(1.1);
  box-shadow: 0 6px 20px rgba(92, 92, 255, 0.5);
}

/* Цвета тегов */
.tag-ege {
  color: #00a88b;
  background: rgba(0, 200, 160, 0.1);
}
.tag-oge {
  color: #e67e00;
  background: rgba(255, 140, 0, 0.1);
}
.tag-proga {
  color: #0084b4;
  background: rgba(0, 150, 255, 0.1);
}

/* ===== АДАПТИВНОСТЬ ===== */
@media (max-width: 992px) {
  .bento-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(250px, auto);
  }
  .bento-card--wide {
    grid-column: span 1;
    .bento-card__desc {
      max-width: 100%;
    }
  }
  .study-materials__title {
    font-size: 32px;
  }
}

@media (max-width: 576px) {
  .bento-card {
    padding: 30px 24px;
  }
  .bento-card__title {
    font-size: 24px;
  }
  .bento-card--wide .bento-card__title {
    font-size: 32px;
  }
  .bento-card__desc {
    max-width: 100%;
  }
  .bento-card__number {
    font-size: 60px;
  }
}
</style>