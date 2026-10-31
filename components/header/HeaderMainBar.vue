<template>
  <div class="main-bar">
    <div class="container main-bar__inner">
      
      <!-- Логотип -->
      <NuxtLink to="/" class="logo">
        <img src="/images/logo.png" alt="IT START" />
      </NuxtLink>

      <!-- Темная панель меню -->
      <div class="dark-panel">
        <nav class="dark-panel__links">
          <NuxtLink to="/ege">Курсы ЕГЭ</NuxtLink>
          <NuxtLink to="/oge">ОГЭ</NuxtLink>
          <NuxtLink to="/olympiads">олимпиады</NuxtLink>
          <NuxtLink to="/medcollege">Медколледж</NuxtLink>
        </nav>
        <button class="btn-login">Войти</button>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/styles/variables';

.main-bar {
  background: #fff;
  padding: 15px 0 25px;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

    /* Планшеты и небольшие ноутбуки */
    @media (max-width: 992px) {
      flex-direction: column;
      gap: 20px;
    }
  }
}

.logo {
  display: block;
  flex-shrink: 0;

  img { 
    height: 50px; 
  }
}

.dark-panel {
  display: flex;
  align-items: center;
  background: $color-dark;
  border-radius: 40px;
  padding: 6px 6px 6px 30px;
  gap: 40px;

  /* Планшеты */
  @media (max-width: 992px) {
    gap: 20px;
  }

  /* Мобильные телефоны */
  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 20px;
    padding: 15px;
    width: 100%;
    gap: 15px;
  }

  &__links {
    display: flex;
    gap: 24px;

    /* Мобильные телефоны */
    @media (max-width: 768px) {
      flex-wrap: wrap; /* Ссылки переносятся на новую строку */
      justify-content: center;
      gap: 12px;
    }

    a {
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      transition: 0.2s;

      &:hover { 
        color: #ccc; 
      }
    }
  }
}

.btn-login {
  background: #000;
  color: #fff;
  padding: 10px 30px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 14px;
  border: 1px solid #555;
  white-space: nowrap;

  /* Мобильные телефоны */
  @media (max-width: 768px) {
    width: 100%; /* Кнопка на всю ширину */
  }
}
</style>