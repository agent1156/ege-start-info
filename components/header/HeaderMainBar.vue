<template>
  <div class="main-bar">
    <div class="container main-bar__inner">
      
      <!-- Логотип слева -->
      <NuxtLink to="/" class="logo">
        <span class="logo__it">IT</span>
        <span class="logo__start">START</span>
      </NuxtLink>

      <!-- Меню и кнопка справа -->
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
    justify-content: space-between; /* Логотип слева, меню справа */
    gap: 20px;

    @media (max-width: 992px) {
      flex-direction: column;
      gap: 20px;
    }
  }
}

.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #111;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  line-height: 1;
  text-decoration: none;
  transition: transform 0.2s;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.02);
  }

  &__it {
    font-size: 20px;
    font-weight: 900;
    letter-spacing: -1px;
  }

  &__start {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 2px;
    color: #aaa;
    margin-top: 2px;
  }
}

.dark-panel {
  display: flex;
  align-items: center;
  background: $color-dark;
  border-radius: 40px;
  padding: 6px 6px 6px 30px;
  gap: 30px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

  @media (max-width: 992px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 20px;
    padding: 15px;
    gap: 15px;
  }

  &__links {
    display: flex;
    gap: 24px;

    @media (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
    }

    a {
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      transition: 0.2s;
      text-decoration: none;

      &:hover {
        color: #aaa;
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
  border: 1px solid #444;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;
  flex-shrink: 0;

  &:hover {
    background: #222;
    border-color: #666;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
}
</style>