<template>
  <div class="main-bar">
    <div class="container main-bar__inner">
      <NuxtLink to="/" class="logo">
        <img src="/images/logo.png" alt="IT START" />
      </NuxtLink>

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
    gap: 40px;
  }
}

.logo {
  display: block;
  flex-shrink: 0;

  img { height: 50px; }
}

.dark-panel {
  display: flex;
  align-items: center;
  background: $color-dark;
  border-radius: 40px;
  padding: 6px 6px 6px 30px;
  width: 100%;
  max-width: 800px;
  justify-content: space-between;

  &__links {
    display: flex;
    gap: 24px;

    a {
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      transition: 0.2s;

      &:hover { color: #ccc; }
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
}
</style>