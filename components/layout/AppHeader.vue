<template>
  <header class="header">
    
    <!-- ===== ВЕРХНЯЯ ПОЛОСКА ===== -->


    <!-- ===== ОСНОВНОЕ МЕНЮ (ТЕМНАЯ ПАНЕЛЬ) ===== -->
    <div class="main-bar">
      <div class="container main-bar__inner">
        
        <!-- Левая колонка: Логотип -->
        <div class="main-bar__left">
          <NuxtLink to="/" class="logo">
            IT START
          </NuxtLink>
        </div>

        <!-- Центральная колонка: Навигация -->
        <nav class="main-bar__center">
          <NuxtLink to="/ege">Курсы ЕГЭ</NuxtLink>
          <NuxtLink to="/oge">ОГЭ</NuxtLink>
          <NuxtLink to="/olympiads">олимпиады</NuxtLink>
          <NuxtLink to="/medcollege">Методички</NuxtLink>
        </nav>

        <!-- Правая колонка: Кнопка Войти -->
        <div class="main-bar__right">
          <button class="btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 8v4l3 3"></path>
            </svg>
            Войти
          </button>
        </div>

      </div>
    </div>

  </header>
</template>

<style scoped lang="scss">
@import '~/assets/styles/variables';

.header {
  width: 100%;
  background-color: #2b2b2b; /* Общий темный фон для всей шапки */
}

/* ===== ВЕРХНЯЯ ПОЛОСКА ===== */
.top-bar {
  background: #fff;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 12px;
    }
  }

  &__promo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    font-weight: 700;
    color: #1a1a1a;

    @media (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;
    }

    .italic {
      color: $color-red;
      font-style: italic;
      font-size: 17px;
    }
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 15px;
  }
}

.avatar-placeholder {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e0e0e0;
  color: #555;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  border: 2px solid #ccc;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #d0d0d0;
  }
}

.badge-red {
  background: $color-red;
  color: #fff;
  padding: 5px 14px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.5px;
}

.btn-red {
  background: $color-red;
  color: #fff;
  padding: 9px 26px;
  border-radius: 25px;
  font-weight: 700;
  font-size: 14px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(227, 30, 36, 0.2);

  &:hover {
    background: darken($color-red, 10%);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(227, 30, 36, 0.4);
  }
}

/* ===== ОСНОВНОЕ МЕНЮ (ТЕМНОЕ) ===== */
.main-bar {
  padding: 15px 0;

  /* ИСПОЛЬЗУЕМ GRID ДЛЯ ИДЕАЛЬНОГО ЦЕНТРИРОВАНИЯ */
  &__inner {
    display: grid;
    grid-template-columns: 1fr auto 1fr; /* Левая часть, центр, правая часть */
    align-items: center;
    gap: 20px;

    /* Адаптив для планшетов и мобильных */
    @media (max-width: 992px) {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }

  &__left {
    display: flex;
    justify-content: flex-start; /* Логотип прижат влево */
  }

  &__center {
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center; /* Меню строго по центру */

    @media (max-width: 992px) {
      order: 3;
      flex-wrap: wrap;
      gap: 20px;
    }

    a {
      color: #ffffff;
      font-size: 15px;
      font-weight: 500;
      text-decoration: none;
      transition: color 0.2s;
      white-space: nowrap;

      &:hover {
        color: #aaa;
      }

      @media (max-width: 576px) {
        font-size: 13px;
      }
    }
  }

  &__right {
    display: flex;
    justify-content: flex-end; /* Кнопка прижата вправо */

    @media (max-width: 992px) {
      order: 2;
      width: 100%;
      justify-content: center;
    }
  }
}

.logo {
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -1px;
  color: #fff;
  text-decoration: none;
  flex-shrink: 0;
}

.btn-outline {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  color: #fff;
  padding: 10px 24px;
  border-radius: 30px;
  border: 1px solid #555;
  font-weight: 700;
  font-size: 14px;
  transition: all 0.2s;

  &:hover {
    border-color: #fff;
    background-color: rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 576px) {
    padding: 8px 16px;
    font-size: 12px;
  }
}
</style>